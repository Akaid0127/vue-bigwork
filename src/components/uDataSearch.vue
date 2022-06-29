<template>
  <div class="uData-body" id="uData-body">
    <div class="uData-main">
      <div class="uData-main-cdiv3" >
        <h2><i class="el-icon-search"></i>学生信息查询</h2>
      </div>
      <br>
      <br>
      <br>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学院">
          <el-select v-model="formInline.ucompany" clearable  placeholder="请选择学院">
            <el-option label="计算机科学与技术学院" value="计算机科学与技术学院"></el-option>
            <el-option label="安全科学与工程学院" value="安全科学与工程学院"></el-option>
            <el-option label="化工学院" value="化工学院"></el-option>
            <el-option label="能源学院" value="能源学院"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学号">
          <el-input
              placeholder="请输入学号"
              v-model="formInline.uid"
              clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search()">查询</el-button>
        </el-form-item>
      </el-form>
      <br>
      <br>
      <br>
      <div class="cUInfo-main-cdiv2">

        <el-table
            :data="tableData"
            style="width: 100%"
            max-height="470">
          <el-table-column
              fixed
              prop="uid"
              label="学号">
          </el-table-column>
          <el-table-column
              prop="uname"
              label="学生姓名">
          </el-table-column>
          <el-table-column
              prop="utel"
              label="手机号">
          </el-table-column>
          <el-table-column
              prop="uaddress"
              label="家庭地址">
          </el-table-column>
          <el-table-column
              prop="ucompany"
              label="所在单位">
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="params.page"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="params.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="params.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params:{
        pageSize:10,
        page:1,
        total:0
      },
      tableData:[],
      formInline: {
        ucompany:'',
        uid:''
      }
    }
  },
  mounted() {
    this.search()
  },
  methods:{
    uDataBackHome : function () {
      this.$router.push({path:'/index'});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.params.pageSize=val;
      this.search()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.page=val;
      this.search()
    },
    async search(){
      this.axios({
        method: 'post',
        url: '/get_student',
        data: {'page':this.params.page,'limit':this.params.pageSize,'ucompany':this.formInline.ucompany,'uid':this.formInline.uid},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            this.tableData=data['results'];
            this.params.total=data['total']
            this.params.page=data['page']
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
.uData-body{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.uData-body .uData-top{
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

.uData-body .uData-top img{
  width: 16%;
  height: 90%;
  margin: 5px 5px;
}

.uData-body .uData-top el-button{
  width: 22%;
  height: 50%;
}

.uData-top-cdiv1{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 89.5%;
  top: 6%;
}

.uData-body .uData-main{
  width: 96%;
  height: 95%;
  background-color: rgba(236,238,242,0.5);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1% 2%;
}

.uData-main-cdiv3{
  position: absolute;
  text-align: left;
  margin: -10px 30px -10px;
  /*rgba(64,158,255,1);*/
}

.uData-main-cdiv3 h2{
  color: rgba(20,108,199,1);;
}
.demo-form-inline{
  position: absolute;
  left: 5%;
}
</style>

