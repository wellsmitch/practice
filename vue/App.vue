<template>
  <div id="app">
    <transition :name="transitionName">
      <!-- <navigation> -->
        <router-view class="myRouterView"/>
      <!-- </navigation> -->
    </transition>
  </div>
</template>

<script>
  import 'ASSETS/scss/index.scss';
import './assets/iconfont/iconfont.css'
export default {
  name: 'App',
  data(){
    return{
      transitionName:'',
      currentWgtVer:'',//当前版本号
      updateWgtVer:'',//检测的版本号
      apkUrl:'',//apk下载地址
      iosClick:2,  //是否监听苹果的点击事件。苹果的推送情况有三种：1.打开app时（会直接触发click）。2.app在后台时（打开就已经触发click）。3.app没有启动时。
      astep:0,  //计算安卓receive执行次数
      cid:'', //为了不停获取cielentId
      system:'',//区分系统
    }
  },
  computed:{
    token(){
      return this.$store.state.token
    }
  },
  watch: {
    '$route' (to, from) {
        if (to.meta.Weights < from.meta.Weights) {
          this.transitionName = "left2right";
        } else if(to.meta.Weights == from.meta.Weights) {
          this.transitionName = "";
        } else {
          this.transitionName = "right2left";
        }
    },
    cid(newVal,oldVal){
      if(newVal && this.$store.state.token){
        this.saveCid();
      }
    },
    token(newVal,oldVal){
      if(newVal && this.cid && this.cid != null){
        this.saveCid();
      }
    }
},
  methods:{
    saveCid(){
      if(!this.$store.state.save_cid){
        console.log('zhixing')
        let data;
        if(this.system == 'ios_client_id'){
          data = {
            'ios_client_id':this.cid
          }
        }else if(this.system == 'android_client_id'){
          data = {
            'android_client_id':this.cid
          }
        }
        this.$util.post(this.$util.api._save_cid,data).then((res)=>{
          // console.log(res)
          if(res.data.data.userinfo.android_client_id){
            this.$store.commit('addSaveCid',res.data.data.userinfo.android_client_id);
          }else if(res.data.data.userinfo.ios_client_id){
            this.$store.commit('addSaveCid',res.data.data.userinfo.ios_client_id);
          }
        }).catch((err)=>{

        })
      }

    },

    //添加hbuilder相关
    plus_ready(){
      document.addEventListener('plusready', ()=>{
        plus.key.addEventListener('backbutton', ()=>{
          let webview = plus.webview.currentWebview();
          let webview_list = plus.webview.all();
          if (webview_list.indexOf(webview) == webview_list.length-1){
            webview.canBack((e)=>{
              if(e.canBack) {
                webview.back();
              } else {
                plus.nativeUI.confirm('确认退出？', (event)=>{
                  if (0 == event.index) {
                    plus.runtime.quit();
                  }
                }, '提示', ["确定", "取消"]);
              }
            })
          }else {
            webview_list[webview_list.length-1].canBack((e)=>{
              if(e.canBack) {
                webview_list[webview_list.length-1].back();
              } else {
                webview_list[webview_list.length-1].close();
              }
            })
          }
        });
      });
    },

      //获取当前app版本号
      getwgtVer(){
        // 显示系统等待对话框
        // plus.nativeUI.showWaiting(title, options);
        // title: ( String ) 可选 等待对话框上显示的提示标题内容
        // plus.nativeUI.showWaiting("检测更新...");
        // 获取当前应用的版本号
        let plusReady = ()=>{
            // ......
            // 获取本地应用资源版本号

            plus.runtime.getProperty(plus.runtime.appid,(inf)=>{
                this.$store.commit('addVersion',inf.version);
                this.currentWgtVer=inf.version;
                this.checkUpdate();
            });
        }
        if(window.plus){
            plusReady();
        }else{
            document.addEventListener('plusready',plusReady,false);
        }
      },

      // 请求接口检查版本号是否更新
      checkUpdate(){
        let data;
        this.$util.post(this.$util.api._checkUpdate,data).then((res)=>{    //安卓
        // this.$util.post(this.$util.api._checkIOSUpdate,data).then((res)=>{    //IOS
          this.updateWgtVer = res.data.version;

          if(this.currentWgtVer && this.updateWgtVer && (this.currentWgtVer != this.updateWgtVer)){
            // plus.nativeUI.confirm(res.data.ios_version_content, (e)=> {   //ios
            plus.nativeUI.confirm(res.data.android_version_content, (e)=> {   //安卓
                if(e.index == 1){
                    this.apkUrl = res.data.url;
                    this.downWgt(); // 下载升级包
                    // plus.runtime.openURL(res.data.url);//跳转appstore
                }
            }, "发现新版本"+res.data.version, ["暂不更新", "立即更新"]);
          }
        }).catch((err)=>{
          // plus.nativeUI.alert("检测更新失败！");
        })
      },

      //从服务器下载应用资源包（wgt文件）
      downWgt(){
        plus.nativeUI.showWaiting("下载apk文件...");

        plus.downloader.createDownload( this.apkUrl, {filename:"_doc/update/"}, (d,status)=>{
            if ( status == 200 ) {
                console.log("下载apk成功："+d.filename);
                this.installApk(d.filename); // 安装apk包
            } else {
                console.log("下载apk失败！");
                plus.nativeUI.alert("下载apk失败！");
            }
            plus.nativeUI.closeWaiting();
        }).start();
      },

      // 更新安装包应用资源
      installApk(path){
        plus.nativeUI.showWaiting("安装apk文件...");
        // force:false进行版本号校验，如果将要安装应用的版本号不高于现有应用的版本号则终止安装，并返回安装失败
        plus.runtime.install(path,{force:false},function(){
            plus.nativeUI.closeWaiting();
            //console.log("安装apk文件成功！");
            plus.nativeUI.alert("应用资源更新完成！",function(){
                plus.runtime.restart();
            });
        },function(e){
            plus.nativeUI.closeWaiting();
            //console.log("安装apk文件失败[" + e.code + "]：" + e.message);
            plus.nativeUI.alert("安装apk文件失败[" + e.code + "]：" + e.message);
        });
    },

    //本地推送加时间
    dateToStr(datetime){
        var year    = datetime.getFullYear();
        var month   = datetime.getMonth()+1;//js从0开始取
        var date    = datetime.getDate();
        var hour    = datetime.getHours();
        var minutes = datetime.getMinutes();
        var second  = datetime.getSeconds();
        if(month<10){
          month = "0" + month;
        }
        if(date<10){
          date = "0" + date;
        }
        if(hour <10){
          hour = "0" + hour;
        }
        if(minutes <10){
          minutes = "0" + minutes;
        }
        if(second <10){
          second = "0" + second ;
        }
        var time = year+"-"+month+"-"+date+" "+hour+":"+minutes+":"+second; //2009-06-12 17:18:05
        return time;
    },

    //处理消息和跳转
    logoutPushMsg( payload,plus ){
        plus.runtime.setBadgeNumber(0);  //Runtime模块管理运行环境，可用于获取当前运行环境信息、与其它程序进行通讯等。通过plus.runtime可获取运行环境管理对象。这个是设置程序快捷方式上显示的提示数字（角标），0就是清除角标。
        plus.push.clear();//通过plus.push可获取推送消息管理对象。这个方法是清除消息中心的所有消息。
        if( payload.url ){
          this.$router.replace({
            path:payload.url
          })
        }
    },

    //开始监听推送代码
    push(){
      document.addEventListener("plusready", () => {
        console.log(plus);
          // version    =  APP版本号
          this.$store.commit('addOs_version',plus.os.version)//系统版本信息
          this.$store.commit('addOs_name',plus.os.name)//系统的名称
          this.$store.commit('addOs_vendor',plus.os.vendor)//系统的供应商信息
          this.$store.commit('addUuid',plus.device.uuid)//手机uuid
          this.$store.commit('addImei',plus.device.imei)//设备的国际移动设备身份码
          this.$store.commit('addImsi',plus.device.imsi)//设备的国际移动用户识别码
          this.$store.commit('addModel',plus.device.model)//设备型号
          this.$store.commit('addDevice_vendor',plus.device.vendor)//设备的生产厂商
          this.$store.commit('addChannel',plus.runtime.channel)//产品标识
          this.$store.commit('addLauncher',plus.runtime.launcher)//应用启动来源
          this.$store.commit('addApk_version',plus.runtime.version)//客户端的版本号
          this.$store.commit('addInner_version',plus.runtime.innerVersion)//客户端的版本号
          this.$store.commit('addAc',plus.networkinfo.getCurrentType())//系统网络类型
          if( plus.os.name == 'iOS' ) {
              this.system = 'ios_client_id';
              this.$store.commit('addSystem','ios_client_id');

              document.addEventListener('pause',function(){ //pause事件切换后台
                  this.iosClick = 1;
              },false)
              document.addEventListener('resume',function(){  //resume事件切换前台
                  this.iosClick = 2;
              },false)
          }else{
            this.system = 'android_client_id';
            this.$store.commit('addSystem','android_client_id');
          }
          let num = 0;
          let t1 = window.setInterval(()=> {
              num++;
              let info = plus.push.getClientInfo();
              this.cid = info.clientid;
              this.$store.commit('addCid',info.clientid);
              if (num == 10 || this.cid != '') {
                  window.clearInterval(t1);
              }
          }, 1000);

        // 监听点击消息事件
        plus.push.addEventListener("click", (msg) => {
            if( typeof( msg.payload ) == "string" ) {
                msg.payload = JSON.parse( msg.payload );
            }
            var payload = msg.payload ? msg.payload : {};

            if(plus.os.name == 'iOS'){
              if(this.iosClick == 2){
                this.logoutPushMsg(payload,plus);
              }
              if(this.iosClick == 1){
                return false;
              }
            }else{
              this.logoutPushMsg(payload,plus);
            }

        }, false );

        // 监听在线消息事件
        plus.push.addEventListener("receive", (msg) => {
            if( typeof( msg.payload ) == "string" ) {
                msg.payload = JSON.parse( msg.payload );
            }
            var payload = msg.payload ? msg.payload : {};
            if(plus.os.name == 'iOS'){
              if(this.iosClick == 2){   //前台
                if(payload.type != "LocalMSG"){
                  let options = {cover:false,title:payload.title,sound:''};
                  let str = payload.content;
                  payload.type = "LocalMSG";
                  void plus.push.createMessage( str, JSON.stringify(payload), options );
                }
              }
            }else{
              if(payload.transtype == 0){
                let options = {cover:false,title:payload.title,sound:''};
                let str = payload.content;
                void plus.push.createMessage( str, JSON.stringify(payload), options );
              }else{
                this.logoutPushMsg(payload,plus);
              }
            }
        }, false );

        // 获取支付通道
        plus.payment.getChannels((channels)=>{
          this.$store.commit('updatePayChannels',channels);
        },(e)=>{
          console.log("获取支付通道失败："+e.message);
        });
      })
    }


  },
  created() {
    if(this.$store.state.token){
      if(this.$store.state.group_id == 1){
        this.$router.replace({path:'/bidder/bidderHome'})//供应商：商机列表
      }else if(this.$store.state.group_id == 2){
        this.$router.replace({path:'/bidder/ConstructionBusiness'})//施工方：商机列表
      }else if(this.$store.state.group_id==3) {
        this.$router.replace({path: '/tender/tenderBusiness'})//招标方：招标列表
      }else {
        this.$router.replace({path:'/common/selectRole'})
      }
    }else{
      this.$router.replace({path:'/common/loginRegister/login'})
    }
  },
  mounted() {
    this.plus_ready();
    this.getwgtVer();
    this.push();
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~ASSETS/scss/index";
#app{
  height: 100%;
  width: 100%;
}
/* .myRouterView{
  will-change: transform;
  width: 100%;
  height: 100%;
} */
.left2right-enter{
  transform: translate3d(-2rem,0,0);
  opacity: 0;
}
.left2right-enter-active{
  transition: all 0.2s ease;
}
.right2left-enter{
  transform: translate3d(2rem,0,0);
  opacity: 0;
}
.right2left-enter-active{
  transition: all 0.2s ease;
}
</style>
