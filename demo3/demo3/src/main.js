// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import Moment from 'moment'
console.log(Vue);
import '../static/css/global.css'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import VuePreview from'vue-preview'
Vue.use(VuePreview)
//导入全局组件
import Navbar from '@/components/Common/Navbar'
//注册全局组件
Vue.component(Navbar.name,Navbar);
import Comment from  '@/components/Common/Comment'
Vue.component(Comment.name,Comment)


// import MySwiper from '@/components/Common/MySwiper'
// Vue.component(MySwiper.name,MySwiper)
/* eslint-disable no-new */
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL='http://www.sinya.nline/api/'
//自定义全局过滤器
Vue.filter('converTime',function(data,formatStr){
  return Moment(data).format(formatStr);
})
//设置中文显示
Moment.locale('zh-cn');
//请求前
Axios.interceptors.request.use(function(config){
  //在发送请求之前做某事
  Mint.Indicator.open({
    text:"玩命加载中"
    }
  );
  return config;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});

//添加响应拦截器
Axios.interceptors.response.use(function(response){
  //对响应数据做些事
  Mint.Indicator.close();
  return response;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
