// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('document-click', {
  bind(el, binding, vnode) {
    //el: 绑定的元素节点
    //binding：被绑定元素vue对象的一些信息binding.value是'document-click'绑定的函数
    document.addEventListener('click', binding.value, false);
    // console.log('-------bind');
  },
  inserted() {
    // console.log('-------inserted');
  },
  update() {
    // console.log('---------update');
  } 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
