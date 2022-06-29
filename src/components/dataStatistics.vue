<template>
  <div class="dStat-body" id="dStat-body">
    <div class="dStat-main">
      <div class="dStat-main-cdiv3" >
        <h2><i class="el-icon-s-order"></i>数据统计</h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    dStatBackHome : function () {
      this.$router.push({path:'/index'});
    },
  }
}
</script>

<style scoped>
.dStat-body{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.dStat-body .dStat-top{
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

.dStat-body .dStat-top img{
  width: 16%;
  height: 90%;
  margin: 5px 5px;
}

.dStat-body .dStat-top el-button{
  width: 22%;
  height: 50%;
}

.dStat-top-cdiv1{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 89.5%;
  top: 6%;
}

.dStat-body .dStat-main{
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

.dStat-main-cdiv3{
  position: absolute;
  text-align: left;
  margin: -10px 30px -10px;
  /*rgba(64,158,255,1);*/
}

.dStat-main-cdiv3 h2{
  color: rgba(20,108,199,1);;
}
</style>

