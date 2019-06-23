// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'

// 引入 ElementUI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入页面的css
import './assets/css/index.css'

Vue.config.productionTip = false

// 挂载到 vue
Vue.prototype.$http = axios

// 使用ElementUI
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
