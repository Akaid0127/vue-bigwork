<template>
  <div class="cInfo-body" id="cInfo-body">
    <div class="cInfo-main">
      <div class="cInfo-main-cdiv3" >
        <h2><i class="el-icon-user-solid"></i>管理单位信息</h2>
      </div>

      <div class="cInfo-main-cdiv1">
        <el-button type="primary" @click="add_company()"><i class="el-icon-circle-plus-outline"></i>    添加新的单位</el-button>
<!--        <el-button type="primary"><i class="el-icon-remove-outline"></i>    删除所有单位</el-button>-->
      </div>
      <el-dialog title="" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="单位编号" :label-width="formLabelWidth">
            <el-input v-model="form.cid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位名称" :label-width="formLabelWidth">
            <el-input v-model="form.cname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位地址" :label-width="formLabelWidth">
            <el-input v-model="form.caddress" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.czip" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位负责人" :label-width="formLabelWidth">
            <el-input v-model="form.cadministrators" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add_company_upload()" >确 定</el-button>
        </div>
      </el-dialog>
      <br>

      <div class="cInfo-main-cdiv2">
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="550">
          <el-table-column
            fixed
            prop="cid"
            label="单位id">
          </el-table-column>
          <el-table-column
            prop="cname"
            label="单位名称">
          </el-table-column>
          <el-table-column
            prop="czip"
            label="单位住址">
          </el-table-column>
          <el-table-column
            prop="caddress"
            label="单位邮箱">
          </el-table-column>
          <el-table-column
            prop="cadministrators"
            label="负责人">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
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
        url: '/get_company',
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
    async deleteRow(row) {
      const confirmResult = await this.$confirm('删除该单位, 是否继续?', '提示', {
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
        url: '/delete_company',
        data: {'cid':row.cid},
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
    comBackHome : function () {
      this.$router.push({path:'/index'});
    },
    async add_company(){
      this.dialogFormVisible=true
    },
    async add_company_upload(){
      this.axios({
        method:'post',
        url:'/add_companyInfo',
        data:{
          'cid':this.form.cid,
          'cname':this.form.cname,
          'caddress':this.form.caddress,
          'czip':this.form.czip,
          'cadministrators':this.form.cadministrators,
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
          this.$message.error('添加失败，该单位已存在');
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
        cid: '',
        cname: '',
        caddress: '',
        czip: '',
        cadministrators:''
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
.cInfo-body{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.cInfo-body .cInfo-top{
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

.cInfo-body .cInfo-top img{
  width: 16%;
  height: 90%;
  margin: 5px 5px;
}

.cInfo-body .cInfo-top el-button{
  width: 22%;
  height: 50%;
}

.cInfo-top-cdiv1{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 89.5%;
  top: 6%;
}

.cInfo-body .cInfo-main{
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

.cInfo-main-cdiv1{
  text-align: right;
  margin: 8px 30px -10px;
}
.cInfo-main-cdiv3{
  position: absolute;
  text-align: left;
  margin: -10px 30px -10px;
  /*rgba(64,158,255,1);*/
}
.cInfo-main-cdiv3 h2{
  color: rgba(20,108,199,1);;
}
</style>

