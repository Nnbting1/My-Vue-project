<template>
  <!-- 使用布局容器 Container 完成整体结构 -->
  <el-container class="myhome">
    <el-header class="mytopB">
      <!-- 头部组件 -->
      <Topbar></Topbar>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏组件 -->
        <SideBar></SideBar>
      </el-aside>
      <el-main>
        <!-- 路由显示区域 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入头部组件
import Topbar from '../layout/topbar'
// 引入侧边栏组件
import SideBar from '../layout/sidebar'

export default {
  components: {
    // 注册头部子组件
    Topbar,
    // 注册侧边栏子组件
    SideBar
  },
  mounted () {
    // 获取首页的登录令牌
    let token = window.localStorage.getItem('token')
    // 如果没有登录令牌 , 那么就跳转到登录页面
    if (!token) {
      // 跳转到登录界面
      this.$router.push('/login')
      // 警告框
      this.$message.error('您还没有登录')
    }
  }
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 16px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}

.mytopB img {
  width: 120px;
}

.mytopB h2 {
  color: rgb(83, 61, 61);
}

.mytopB a {
  line-height: 60px;
  text-decoration: none;
  float: left;
  color: #333;
}

.mytopB a:hover {
  color: rgb(175, 111, 15);
}

.mymenu {
  height: 100%;
}

.myicon {
  font-size: 20px;
}
</style>
