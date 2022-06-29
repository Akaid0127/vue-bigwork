<template>
  <div class="dLoad-body" id="dLoad-body">
    <button>导出</button>
  </div>
</template>

<script>
export default {
  methods:{

  }
}
</script>

<style scoped>
.dLoad-body{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.dLoad-body .dLoad-main{
  width: 30%;
  height: 50%;
  position: absolute;
  left:33%;
  top:20%;
  text-align:center;
  background-color: rgba(236,238,242,0.9);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1% 2%;
}
.load{
  margin: 5% 5%;
}

</style>
