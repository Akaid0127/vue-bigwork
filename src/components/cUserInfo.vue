<template>
  <div class="cUInfo-body" id="cUInfo-body">
    <div class="cUInfo-main">
      <div class="cUInfo-main-cdiv3" >
        <h2><i class="el-icon-user-solid"></i>管理单位数据</h2>
      </div>

      <div class="cUInfo-main-cdiv1">
        <el-button type="primary" @click="add_cUser()"><i class="el-icon-circle-plus-outline"></i>    添加学生信息</el-button>
<!--        <el-button type="primary"><i class="el-icon-remove-outline"></i>    删除所有人员</el-button>-->
        <el-dialog title="" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="学号" :label-width="formLabelWidth">
              <el-input v-model="form.uid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.uname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" :label-width="formLabelWidth">
              <el-input v-model="form.utel" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址" :label-width="formLabelWidth">
              <el-input v-model="form.uaddress" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所在单位" :label-width="formLabelWidth">
              <el-select v-model="form.ucompany" placeholder="请选择单位">
                <el-option label="计算机科学与技术学院" value="计算机科学与技术学院"></el-option>
                <el-option label="安全科学与工程学院" value="安全科学与工程学院"></el-option>
                <el-option label="化工学院" value="化工学院"></el-option>
                <el-option label="能源学院" value="能源学院"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="add_cUser_upload()" >确 定</el-button>
          </div>
        </el-dialog>

      </div>
      <br>

      <div class="cUInfo-main-cdiv2">
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="550">
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
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.row)"
                type="text"
                size="small">
                移除
              </el-button>
<!--              <el-button type="text" size="small">编辑</el-button>-->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async search(){
      this.axios({
        method: 'post',
        url: '/get_student',
        data: {'page':'','limit':'','ucompany':'','uid':''},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data['results']
            this.tableData=data;
          })
          .catch((error) => {
            console.log(error)
          })
    },
    async deleteRow(row) {
      const confirmResult = await this.$confirm('删除该学生信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })

      // 如果用户确认删除，则返回值为字符串 confirm
      // 如果用户取消删除，则返回值为字符串 cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      this.axios({
        method: 'post',
        url: '/delete_student',
        data: {'uid':row.uid,'ucompany':row.ucompany},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            if (data=="success"){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.search()
            }
            else if (data=="fail"){
              this.$message.error('删除失败，您没有权限');
              this.search()
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    cUserBackHome : function () {
      this.$router.push({path:'/index'});
    },
    async add_cUser(){
      this.dialogFormVisible=true
    },
    async add_cUser_upload(){
      this.axios({
        method:'post',
        url:'/add_student',
        data:{
          'uid':this.form.uid,
          'uname':this.form.uname,
          'utel':this.form.utel,
          'uaddress':this.form.uaddress,
          'ucompany':this.form.ucompany,
          'uposition':this.form.uposition,
        }
      }).then((res) => {
        console.log(res.data);
        var data = res.data
        if (data=="success"){
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.search()
          this.dialogFormVisible=false
        }
        else if (data=="fail"){
          this.$message.error('添加失败，您没有该单位的权限');
          this.search()
        }
        else {
          this.$message.error('添加失败，该学生信息已存在');
          this.search()
        }
      })
          .catch((error) => {
            console.log(error)
          })
    },


  },
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        uid:'',
        uname: '',
        utel: '',
        uzip: '',
        uaddress: '',
        ucompany: '',
        uposition: '',
      },
      formLabelWidth: '120px'
    }
  },
  mounted() {
    this.search()
  }
}
</script>

<style scoped>
.cUInfo-body{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  /*background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;*/
  /*background-size: auto;*/
  /*background-size: cover;*/
}

.cUInfo-body .cUInfo-top{
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

.cUInfo-body .cUInfo-top img{
  width: 16%;
  height: 90%;
  margin: 5px 5px;
}

.cUInfo-body .cUInfo-top el-button{
  width: 22%;
  height: 50%;
}

.cUInfo-top-cdiv1{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 89.5%;
  top: 6%;
}

.cUInfo-body .cUInfo-main{
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

.cUInfo-main-cdiv1{
  text-align: right;
  margin: 8px 30px -10px;
}
.cUInfo-main-cdiv3{
  position: absolute;
  text-align: left;
  margin: -10px 30px -10px;
  /*rgba(64,158,255,1);*/
}
.cUInfo-main-cdiv3 h2{
  color: rgba(20,108,199,1);;
}
</style>
