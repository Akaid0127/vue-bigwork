<template>
  <div class="dLoad-body" id="dLoad-body">
    <div class="dLoad-main" id="dLoad-main">
      <div class="load">
        <el-upload
          class="upload-demo"
          drag
          action="http://localhost:5000/uploader"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传Excel文件</div>
        </el-upload>
        <el-button type="primary" @click="load()">导入</el-button>
      </div>
      <a href="http://127.0.0.1:5000/download__xls">点我下载当前学生信息</a>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    dLoadBackHome : function () {
      this.$router.push({path: '/index'});
    },
    async load(){
      this.axios({
        method:'post',
        url:'/uploader_submit',
        data:{}
      }).then((res) => {
        console.log(res.data);
        var data = res.data
        if (data=="success"){
          this.$message({
            message: '导入成功',
            type: 'success'
          });
          this.search()
          this.dialogFormVisible=false
        }
        else if (data=="fail"){
          this.$message.error('添加失败，您没有导入权限');
          this.search()
        }
        else {
          this.$message.error('添加失败，文件格式错误');
          this.search()
        }
      })
          .catch((error) => {
            console.log(error)
          })
    },
    async down(){
      this.axios({
        method:'get',
        url:'/uploader_submit',
        data:{}
      }).then(() => {

      })
          .catch((error) => {
            console.log(error)
          })
    }
  },
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
    width: 50%;
    height: 55%;
    position: absolute;
    left:27%;
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
