<template>
  <div class="uInfo-body" id="uInfo-body">

    <div class="uInfo-main">
      <div class="uInfo-main-cdiv3" >
        <h2><i class="el-icon-user-solid"></i>管理用户</h2>
      </div>

      <div class="uInfo-main-cdiv1">
        <el-button type="primary" @click="add_user()"><i class="el-icon-circle-plus-outline"></i>    添加新的用户</el-button>
<!--        <el-button type="primary"><i class="el-icon-remove-outline"></i>    删除所有用户</el-button>-->
        <el-dialog title="" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="用户账号" :label-width="formLabelWidth">
              <el-input v-model="form.uid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" :label-width="formLabelWidth">
              <el-input v-model="form.upwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名称" :label-width="formLabelWidth">
              <el-input v-model="form.uname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" :label-width="formLabelWidth">
              <el-input v-model="form.utel" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所在单位" :label-width="formLabelWidth">
              <el-select v-model="form.ucompany" placeholder="请选择单位">
                <el-option label="计算机科学与技术学院" value="计算机科学与技术学院"></el-option>
                <el-option label="安全科学与工程学院" value="安全科学与工程学院"></el-option>
                <el-option label="化工学院" value="化工学院"></el-option>
                <el-option label="能源学院" value="能源学院"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位" :label-width="formLabelWidth">
              <el-input v-model="form.uposition" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="单位管理员" :label-width="formLabelWidth">
              <el-select v-model="form.uadministrators" placeholder="请选择">
                <el-option label="系统管理员" value="系统管理员"></el-option>
                <el-option label="学院管理员" value="学院管理员"></el-option>
                <el-option label="普通管理员" value="普通管理员"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="add_user_upload()" >确 定</el-button>
          </div>
        </el-dialog>

      </div>
      <br>

      <div class="uInfo-main-cdiv2">
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="550">
          <el-table-column
            fixed
            prop="uid"
            label="用户账号">
          </el-table-column>
          <el-table-column
              fixed
              prop="upwd"
              label="用户密码">
          </el-table-column>
          <el-table-column
            prop="uname"
            label="用户名称">
          </el-table-column>
          <el-table-column
            prop="utel"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="ucompany"
            label="所在单位">
          </el-table-column>
          <el-table-column
            prop="uposition"
            label="职位">
          </el-table-column>
          <el-table-column
            prop="uadministrators"
            label="管理员">
          </el-table-column>
          <el-table-column
             fixed="right"
             label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="deleteRow(scope.row)">移除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog title="编辑用户信息" :visible.sync="show" :close-on-click-modal="false">
          <UserEdit v-if="show"
                    :show.sync="show"
                    @getData="getData()"
                    :editid = "editid"
          ></UserEdit>
        </el-dialog>

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
        url: '/get_user',
        data: {},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            this.tableData=data;
          })
          .catch((error) => {
            console.log(error)
          })
    },
    handleEdit(id){
      this.editid = id
      this.show = true
    },
    async deleteRow(row) {
      const confirmResult = await this.$confirm('删除该用户, 是否继续?', '提示', {
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
        url: '/delete_user',
        data: {'uid':row.uid},
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
    async add_user(){
      this.dialogFormVisible=true
    },
    async add_user_upload(){
      this.axios({
        method:'post',
        url:'/add_user',
        data:{
          'uname':this.form.uname,
          'uid':this.form.uid,
          'upwd':this.form.upwd,
          'utel':this.form.utel,
          'ucompany':this.form.ucompany,
          'uposition':this.form.uposition,
          'uadministrators':this.form.uadministrators,
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
          this.$message.error('添加失败，您没有权限');
          this.search()
        }
        else {
          this.$message.error('添加失败，该用户已存在');
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
      gridData: [],
      dialogFormVisible: false,
      form: {
        uid:'',
        upwd:'',
        uname: '',
        utel: '',
        ucompany: '',
        uposition: '',
        uadministrators: '',
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
  .uInfo-body{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-size: auto;
    background-size: cover;
  }

  .uInfo-body .uInfo-top{
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

  .uInfo-body .uInfo-top img{
    width: 16%;
    height: 90%;
    margin: 5px 5px;
  }

  .uInfo-body .uInfo-top el-button{
    width: 22%;
    height: 50%;
  }

  .uInfo-top-cdiv1{
    width: 400px;
    height: 100px;
    position: absolute;
    left: 89.5%;
    top: 6%;
  }

  .uInfo-body .uInfo-main{
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

 .uInfo-main-cdiv1{
    text-align: right;
    margin: 8px 30px -10px;
 }
  .uInfo-main-cdiv3{
    position: absolute;
    text-align: left;
    margin: -10px 30px -10px;
    /*rgba(64,158,255,1);*/
  }
  .uInfo-main-cdiv3 h2{
    color: rgba(20,108,199,1);;
  }
</style>
