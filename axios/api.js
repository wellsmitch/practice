import axios from './http.js'
//用户
export class Api_user {
	yzm(param) {
		return axios.post("userLogin/verification", param).then(function (response) {
			// console.log(response.data);
				return response.data;
			}).catch(function (error) {
				console.log(error);
			});
  };
  findPwd(param){
    return axios.post("userLogin/getpassword",param).then(function(response){
      return response.data;
    }).catch(function(err){
      console.log(err);
    })
  };
  login(param) {
    return axios.post("userLogin/login", param).then(function (response) {
      // console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
  };
  getUserInfo (param) {
    return axios.post('userLogin/getUserinfo', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  };
  register(param){
    return axios.post('userLogin/register',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  };
  sendPhone(param){
    return axios.post('sms/sendsms',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  }
  changePwd(param){
    return axios.post('userLogin/savepassword',param).then(res=>{
      return res.data
    }).catch(err => console.log(err))
  }
  sendEmail(param) {
    return axios.post('sms/sendemail', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  bindEmail(param) {
    return axios.post('userLogin/adduseremail', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  authentication(param) {
    return axios.post('userLogin/authentication', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  addGoods(param) {
    return axios.post('goods/addgoods', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  getSaleService(param) {
    return axios.post('goods/getsaleservice', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  // 删除商品
  delGoods(param) {
    return axios.post('goods/delgoods', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  // 批量删除
  batchesDel(param) {
    return axios.post('goods/getallidtodel', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  // 开店
  addShop() {
    return axios.post('shop/addshop').then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  saveShop(param) {
    return axios.post('shop/saveshop', param).then(res => {
      return res.data
    }).catch(err => {console.log(err)})
  }
  //获取所有标签
  getShopLabel() {
    return axios.post('shoplable/getshoplable').then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  getShopInfo() {
    return axios.post('shop/getshopinfo').then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  addUserInfo(param) {
    return axios.post('userLogin/adduserinfo', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  // 装修店铺
  shopRenovation(param) {
    return axios.post('shop/shoprenovation', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  //发布需求一对一
  addDemand(param){
    return axios.post('demand/adddemand',param).then(res=>{
      return res.data
    }).catch(err => console.log(err))
  }
  //收藏店铺
  collectShop(param){
    return axios.post('collection/collection',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  }
  //获取logo类型
  getLogoType(param){
    return axios.post('demand/getalllogotype',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  }
  // 绑定银行卡
  bindCard(param) {
    return axios.post('userlogin/bindingcard', param).then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  //发布需求一对多
  addReward(param){
    return axios.post('postReward/addReward',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  }
  //支付宝支付接口
  hostbounty(param){
    return axios.post('postReward/hostbounty',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  }
  // 雇佣我的
  hireme() {
    return axios.post('hire/hierme').then(res => {
      return res.data
    }).catch(err => console.log(err))
  }
  // 我接受的所有需求 
  myList() {
    return axios.post('demand/mylist').then(res => res.data).catch(err => {
      console.log(err)
    })
  }
  // 获取所有用户发布的需求
  getAllDemand() {
    return axios.post('demand/getsel').then(res => res.data).catch(err => {
      console.log(err)
    })
  }
  //接受需求
  acceptDemand(param) {
    return axios.post('demand/acceptdemand', param).then(res => res.data).catch(err => {
      console.log(err)
    })
  }
  // 我参与的招标
  worked() {
    return axios.post('postReward/worked').then(res => res.data).catch(err => {
      console.log(err)
    })
  }
  // 获取店铺列表
  getShopList() {
    return axios.post('shop/getshoplist').then(res => res.data).catch(err => {
      console.log(err)
    })
  }
  // 获取所有竞标
  getReward() {
    return axios.post('postReward/getReward').then(res => res.data).catch(err => {
      console.log(err)
    })
  }
  //雇佣店铺
  hire(param){
    return axios.post('hire/hire',param).then(res=>{
      return res.data
    }).catch(err=>console.log(err))
  }
  
}