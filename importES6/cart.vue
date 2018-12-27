<template>
  <div style="display: flex;flex-direction: column">
    <header class="appHead" style="padding: 0 .25rem;display: flex;justify-content: space-between">
      <router-link to="/home/sousuo" @click="$router.back('-1')" class="iconfont icon-zuo" tag="p"
                   style="font-size:.5rem;margin-top:-.1rem;width:22px;height:22px;background:#fff"></router-link>
      <p style="font-size: 18px">{{str}}</p>
      <router-link to="/home/cart" class="iconfont" tag="p"
                   style="width:22px;height:22px;background: #fff"></router-link>

    </header>
    <section style="flex: 1;background: f6f6f6">


      <ul id="list">
        <li>
          <div style="height: 2.2rem;width: 100%;padding: .44rem 0;background: #fff">
            <label style="float: left;width: .52rem;
    margin-top: .72rem;" class="dian mint-checklist-label"><span style="font-size: .38rem" class="mint-checkbox"><input
              type="checkbox" class="mint-checkbox-input" value="A"> <span
              class="mint-checkbox-core"></span></span> </label>
            <img style="display:block;margin-right:.2rem;width: 2.2rem;height: 2.2rem;float: left"
                 src="static/pop-up.jpg"/>
            <div style="float: left;">
              <p style="height: .44rem;font:bolder .3rem/.44rem '微软雅黑'">名字</p>
              <p style="height: .84rem;font:bolder .3rem/.84rem '微软雅黑'">
                <span>颜色</span>
                <span>红</span>
                <span>尺码</span>
                <span>42</span>
              </p>
              <p class="danjia" style="height: .96rem;font:bolder .4rem/.96rem '微软雅黑'">￥1200</p>

            </div>
            <div style="border:1px solid #bababa;padding:0 .1rem;float: left;width: 1.28rem;height: .48rem;margin-top: .6rem;
    margin-left: .4rem;background: #fff;display: flex">
              <input style="display: block;width: .34rem;font-size:.5rem;line-height:.24rem;color: #a8a8a8"
                     type="button" value="-" class="subtraction"></input>
              <p style="display: block;width: .6rem;font-size:.3rem;line-height: .44rem;text-align: center" class="number">1
                </p>
              <input style="display: block;width: .34rem;font-size:.5rem;line-height:.24rem;" type="button" value="+"
                     class="addnum"></input>
            </div>
          </div>
        </li>
        <li>
          <div style="height: 2.2rem;width: 100%;padding: .44rem 0;background: #fff">
            <label style="float: left;width: .52rem;
    margin-top: .72rem;" class="dian mint-checklist-label"><span style="font-size: .38rem" class="mint-checkbox"><input
             type="checkbox" class="mint-checkbox-input" value="A"> <span
              class="mint-checkbox-core"></span></span> </label>
            <img style="display:block;margin-right:.2rem;width: 2.2rem;height: 2.2rem;float: left"
                 src="static/pop-up.jpg"/>
            <div style="float: left;">
              <p style="height: .44rem;font:bolder .3rem/.44rem '微软雅黑'">名字</p>
              <p style="height: .84rem;font:bolder .3rem/.84rem '微软雅黑'">
                <span>颜色</span>
                <span>红</span>
                <span>尺码</span>
                <span>42</span>
              </p>
              <p class="danjia" style="height: .96rem;font:bolder .4rem/.96rem '微软雅黑'">￥1200</p>

            </div>
            <div style="border:1px solid #bababa;padding:0 .1rem;float: left;width: 1.28rem;height: .48rem;margin-top: .6rem;
    margin-left: .4rem;background: #fff;display: flex">
              <input style="display: block;width: .34rem;font-size:.5rem;line-height:.24rem;color: #a8a8a8"
                     type="button" value="-" class="subtraction"></input>
              <p style="display: block;width: .6rem;font-size:.3rem;line-height: .44rem;text-align: center" class="number">1
                </p>
              <input style="display: block;width: .34rem;font-size:.5rem;line-height:.24rem;" type="button" value="+"
                     class="addnum"></input>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer style="justify-content: space-between">
      <label style="width: 1.56rem" class="mint-checklist-label"><span style="font-size: .38rem" class="mint-checkbox"><input id="all" @click="tap()" type="checkbox" class="mint-checkbox-input" value="A"> <span class="mint-checkbox-core"></span> 全选</span> </label>
      <a href="javascript:;" class="jiesuan"
         style="font-size: .38rem;text-align: right;display: block;flex: 1;height: 60px;line-height: 60px;padding-right: .5rem">总价：0</a>
      <a
        style="font-size: .4rem;display:block;width: 2.28rem;text-align:center;background:#ffa401;display: block;height: 60px;line-height: 60px"
        href="javascript:;">去结算</a>
    </footer>
  </div>
</template>

<script>
  import $ from "jquery";

  export default {
    name: "cart",
    data() {
      return {
        str: "购物车"
      };
    },
    mounted() {
      var price =0
      //多个全部选中  全选生效
      $('.dian').click(function() {
        var isdui = true

        $.each($('#list li input[type=checkbox]'), function(i, e) {
          if($(e).is(':checked') == false){
            isdui = false
            $('#all').is(':checked')
          }
          // console.log($(e)[0].checked)//必须这样拿,通过attr与setattribute无法做到
        });
        if(isdui==true) {
          $('#all')[0].checked = true
        }else{
          $('#all')[0].checked = false
        };
        money()
      })
//减法
    $('.subtraction').click(function() {
      if(parseFloat($(this).next().text()) <= 0){
        //如果文本框的值小于1,则设置值为1
        $(this).next().html(0);

      }else{
        $(this).next().html(parseInt($(this).next().text()) - 1)
      };
      money()
    })

      $('#all').click(function() {
       money() ;
      })

      //加法
      $('.addnum').click(function() {

          $(this).prev().html(parseInt($(this).prev().text()) + 1)

        money()
      })

      //算钱的函数封装
      function money() {
        var price = 0;
        $.each($('#list li input[type=checkbox]'), function(i, e) {
          if(e.checked == true) {
            price += parseInt($(e).parent().parent().next().next().next().find('p').text()) * parseInt($(e).parent().parent().next().next().find('p:nth-child(3)').text().replace(/^￥/, ''))
          }
        })
        $('.jiesuan').html('总价：' + price)
        return 1;
      }
      money()
    },
    methods: {
      //全选函数
      tap() {
          if($('#all').is(':checked') == true) {
            $.each($('#list li input[type=checkbox]'), function(i, e) {
              $(e)[0].checked = true
              console.log($(e)[0].checked)//必须这样拿,通过attr与setattribute无法做到
            });
          } else if($('#all').is(':checked') == false) {
            $.each($('#list li input[type=checkbox]'), function(i, e) {
              $(e)[0].checked=false
            });
          }
      }
    }
  };
</script>
<style scoped="">
  li {
    margin-bottom: .24rem;
  }
</style>
