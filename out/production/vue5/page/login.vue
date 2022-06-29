<template>
  <div class="background" v-bind:style="{backgroundImage:'url(' + imgSrc + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
    <div class="login-box">
      <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
      <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
        <span class="login-title">Login</span>
        <div style="margin-top: 5px"></div>
        <el-form-item label="用户名" prop="loginName">
          <el-col :span="22">
            <el-input type="text" v-model="loginForm.loginName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="loginPassword">
          <el-col :span="22">
            <el-input type="password" v-model="loginForm.loginPassword"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        loginName: '',
        loginPassword: '',
      },
      imgSrc: require('../assets/vue-bg.jpg'),
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      loginFormRules: {
        loginName: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        loginPassword: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    loginSubmit() {
      this.axios({
        method: 'post',
        url: '/login',
        data: {'name':this.loginForm.loginName,'password':this.loginForm.loginPassword},
      })
          .then((response) => {
            if (response.data=="fail"){
              this.$message.error('账号或密码错误')
            }
            if (response.data=="pass"){
              window.sessionStorage.setItem("storeData",response.data)
              this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              });
                    this.$router.push('/index')
            }
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })

    }
    //   const url ="/login"
    //   this.axios.get(url,{params:{name:this.loginForm.loginName,password:this.loginForm.loginPassword}}).then(res=>{
    //     console.log(res.data);
    //     if (res.data==="fail"){
    //       this.$message.error('账号或密码错误')
    //     }
    //     else if (res.data==="pass"){
    //       window.sessionStorage.setItem("storeData",res.data)
    //       this.$router.push('/index')
    //     }
    //       }
    //   ).catch(this.$message.error('网络异常'))
    // }
  }
}
</script>
<style scoped>
.login-box {
  border: 1px solid #DCDFE6;
  width: 400px;
  height: 250px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px palegreen;
  background-color: #FFFAFA;
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #66CD00;
  font-size: 30px;
  font-weight: bold;
}
.background {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  position: absolute;
}
</style>
