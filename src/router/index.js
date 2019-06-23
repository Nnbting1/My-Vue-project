import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Login from '../components/login/login.vue'
// 引入首页组件
import Home from '../components/home/home.vue'
// 引入用户列表组件
import Users from '../components/users/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    {path: '/', redirect: '/home'},
    // 登录路由
    {path: '/login', name: 'Login', component: Login},
    // 首页路由
    {path: '/home',
      name: 'home',
      component: Home,
      children: [ // 给 home 首页路由添加子路由
        {path: '/users', name: 'users', component: Users}
      ]}
  ]
})
