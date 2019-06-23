<template>
  <el-row>
    <el-col :span="2">
      <img src="../../assets/logo.jpg" alt="logo">
    </el-col>
    <el-col :span="20">
      <h2>M.A.C 后台管理系统</h2>
    </el-col>
    <el-col :span="2">
      <a href="#" @click.prevent="out">
        <el-button type="warning" icon="el-icon-user myicon" circle></el-button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    out () {
      this.$confirm('确定退出后台系统??', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清除 token
        window.localStorage.removeItem('token')
        // 跳到登录界面
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>
</style>
