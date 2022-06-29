<template>
  <div class="cData-body" id="cData-body">

    <div class="cData-main">
      <div class="cData-main-cdiv3" >
        <h2><i class="el-icon-search"></i>用户信息查询</h2>
      </div>
      <br>
      <br>
      <br>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.user" placeholder="请输入用户姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        uid: '',
        uname: '',
        utel: '',
        uzip: '',
        uaddress: '',
        ucompany: '',
        uposition: '',
        uadministrators: '',
      }
    }
  },
  methods:{
    cDataBackHome : function () {
      this.$router.push({path:'/index'});
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
  .cData-body{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
    background-size: auto;
    background-size: cover;
  }

  .cData-body .cData-top{
    width: 96%;
    height: 12%;
    background-color: rgba(236,238,242,0.9);
    /*边框设置圆角*/
    border: 4px solid rgba(236,238,242,0.1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: 1% 2%;
  }

  .cData-body .cData-top img{
    width: 16%;
    height: 90%;
    margin: 5px 5px;
  }

  .cData-body .cData-top el-button{
    width: 22%;
    height: 50%;
  }

  .cData-top-cdiv1{
    width: 400px;
    height: 100px;
    position: absolute;
    left: 89.5%;
    top: 6%;
  }

  .cData-body .cData-main{
    width: 96%;
    height: 79%;
    background-color: rgba(236,238,242,0.5);
    /*边框设置圆角*/
    border: 4px solid rgba(236,238,242,0.1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: 1% 2%;
  }

  .cData-main-cdiv3{
    position: absolute;
    text-align: left;
    margin: -10px 30px -10px;
    /*rgba(64,158,255,1);*/
  }

  .cData-main-cdiv3 h2{
    color: rgba(20,108,199,1);;
  }

  .demo-form-inline{
    position: absolute;
    left: 5%;
  }
</style>
