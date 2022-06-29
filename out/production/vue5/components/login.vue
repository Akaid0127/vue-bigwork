<template>
  <div class="log-body">
    <div class="log-content" id="log-content">
      <br>
      <h2>欢 迎 登 录</h2>
      <br>
      <br>
      <el-form ref="form" :model="form" label-width="80px" class="log-form">
        <div class="login-in">
          <el-form-item prop="username">
            <el-input type="text" placeholder="username" v-model="form.name" >
              <el-button slot="prepend" icon="el-icon-user"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="form.password">
              <el-button slot="prepend" icon="el-icon-unlock"></el-button>
            </el-input>
          </el-form-item>
        </div>
        <div class="login-btn">
          <el-button type="primary"  style="width:100%" @click="login" >登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: 'hgf',
          password:'123456'
        }
      }
    },
    methods : {
      login : function () {
        this.$router.push({path:'/index'});
      }
    }
  }
</script>

<style scoped>
.log-body{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}
.log-content{
  position: absolute;
  left:50%;
  top:50%;
  width:350px;
  margin:-190px 0 0 -175px;
  background-color: rgba(236,238,242,0.9);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  text-align: center;
}
.log-body .log-content h2{
  margin: 0 auto;
  text-align: center;
  color: gray;
  font-size: 35px;
}
.log-form{
  padding: 30px 30px;
}
.login-in{
  margin: -30px 10px 0 -70px;
  text-align: center;
}
.login-btn{
  text-align: center;
}
.login-btn button{
  width:70%;
  height:36px;
  margin-bottom: 10px;
}
</style>
