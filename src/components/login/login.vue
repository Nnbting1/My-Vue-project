<template>
  <div class="login">
    <div class="mybox">
      <el-form
        :model="userObj"
        :rules="rules"
        status-icon
        ref="ruleForm"
        label-width="100px"
        label-position="top"
        class="demo-ruleForm"
      >
        <h3>用户登录</h3>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="userObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userObj.password" autocomplete="off" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click.prevent="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userObj: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          // required:true 必须的 message 提示信息 trigger 触发时机 blur 失去焦点时
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$http({
            method: 'POST',
            url: 'http://localhost:8888/api/private/v1/login',
            data: this.userObj
          }).then(res => {
            // 解构
            let { data, meta } = res.data
            if (meta.status === 200) {
              // 保存登录令牌 token 到我们的浏览器中
              window.localStorage.setItem('token', data.token)
              // 跳转到首页
              this.$router.push('/')
              // 登录成功提示框
              this.$message({
                message: '登录成功',
                type: 'success'
              })
            } else {
              // 登录失败提示框
              this.$message.error('用户名或密码错误')
            }
          })
        } else {
          console.log('不合法')
        }
      })
    }
  }
}
</script>

<style>
.login {
  background: url('../../assets/img/login.jpg');
  background-size: 100%;
  width: 100%;
  height: 100%;
  position: relative;
}
.mybox {
  width: 580px;
  height: 440px;
  background-color:rgba(221, 208, 208, 0.5);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  box-sizing: border-box;
}
.btn {
  width: 100%;
}
</style>
