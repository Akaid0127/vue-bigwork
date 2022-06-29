<template>
<div class="reg-body">
  <div class="reg-content" id="reg-content">
    <br>
    <h2>欢 迎 注 册</h2>
    <br>
    <br>
    <div class="reg-box">
      <input type="text" name='userName' id='userName' required="required"/>
      <label for="name" >用户名</label>
    </div>
    <div class="reg-box">
      <input type="password" name='userPwd' id='userPwd' required="required">
      <label for="pwd">密码</label>
    </div>
    <div class="reg-box">
      <input type="tel" name='userTel' id='userTel' required="required">
      <label for="tel">手机号码</label>
    </div>
    <div class="reg-box">
      <input type="mail" name='userTel' id='userMail' required="required">
      <label for="mail">邮箱</label>
    </div>
    <div class="reg-box">
      <input type="text" name='userCom' id='userCom' required="required">
      <label for="com">单位</label>
    </div>
    <div class="reg-box">
      <input type="text" name='userPost' id='userPost' required="required">
      <label for="post">职位</label>
    </div>
    <div class="reg-box">
      <el-button type="success" plain>重填</el-button>
      <el-button type="success" plain @click="regBackHome" >提交</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods : {
    regBackHome : function () {
      this.$router.push({path:'/index'});
    }
  }
}
</script>


<style scoped>
.reg-body{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.reg-body .reg-content{
  width: 33%;
  height: 92%;
  background-color: rgba(236,238,242,0.9);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 2% 33%;
}

.reg-content h2{
  margin: 0 auto;
  text-align: center;
  color: gray;
  font-size: 35px;
}

.reg-content .reg-box {
  margin: 0 auto;
  text-align: center;
  position: relative;
  width: 60%;
}

.reg-content .reg-box input{
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 30px;
  color: #fff;
  font-size: 16px;
  border-bottom: 1px solid #fff;
  background-color: transparent;
}

.reg-content .reg-box label{
  position:absolute;
  top: 0 ;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: all 0.5s;
}

.reg-content .reg-box input:focus + label,
.reg-content .reg-box input:valid + label{
  top: -20px;
  color: dimgray;
  font-size: 12px;
}

</style>
