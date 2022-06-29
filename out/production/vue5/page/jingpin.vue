<template>
  <div style="height: 100%">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><a href="/#/jingpin">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/#/jingpin">竞品信息收集</a></el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-top:10px;background-color: #FFFAFA">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-left: 20px;">
        <el-form-item label="司机类型">
          <el-select v-model="formInline.driver_score_type" placeholder="请输入司机类型">
            <el-option label="拉新" value="拉新"></el-option>
            <el-option label="H＜90" value="H＜90"></el-option>
            <el-option label="90≤H＜100" value="90≤H＜100"></el-option>
            <el-option label="100≤H＜130" value="100≤H＜130"></el-option>
            <el-option label="130≤H≤150" value="130≤H≤150"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌">
          <el-select v-model="formInline.brand" placeholder="请输入品牌">
            <el-option label="高德" value="高德"></el-option>
            <el-option label="哈喽" value="哈喽"></el-option>
            <el-option label="妥妥" value="妥妥"></el-option>
            <el-option label="携华" value="携华"></el-option>
            <el-option label="阳光" value="阳光"></el-option>
            <el-option label="易至" value="易至"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动类型">
          <el-select v-model="formInline.type" placeholder="请输入活动类型">
            <el-option label="新手" value="新手"></el-option>
            <el-option label="时段" value="时段"></el-option>
            <el-option label="冲单" value="冲单"></el-option>
            <el-option label="累计冲单" value="累计冲单"></el-option>
            <el-option label="时长任务" value="时长任务"></el-option>
            <el-option label="流水保底" value="流水保底"></el-option>
            <el-option label="流水返佣" value="流水返佣"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" circle @click="condition_search()"></el-button>
          <el-button type="info" round @click="clear()">清除</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" round @click="dialogFormVisible = true">添加竞品信息</el-button>

    </div>
    <div>
      <!-- Form -->

      <el-dialog title="竞品信息" :visible.sync="dialogFormVisible">

        <el-form ref="form" :model="form" label-width="120px">
          <el-row>
            <el-col span="10">
              <el-form-item label="司机类型">
                <el-select v-model="form.driver_score_type" placeholder="请选择" @change="changeSelect2">
                  <el-option
                      v-for="(item,index) in scoreTypeOptions"
                      :key="index"
                      :label="item"
                      :value="item"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col span="10">
              <el-form-item label="品牌">
                <el-select v-model="form.brand" placeholder="请选择">
                  <el-option
                      v-for="(item,index) in brandOptions"
                      :key="index"
                      :label="item"
                      :value="item"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="10">
              <el-form-item label="活动类型">
                <el-select v-model="form.type" placeholder="请选择" @change="changeSelect">
                  <el-option
                      v-for="(item,index) in typeOptions"
                      :key="index"
                      :label="item"
                      :value="item"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="活动时段/名称">
                <el-select v-model="form.name" placeholder="请选择">
                  <el-option
                      v-for="(item,index) in activityOptions"
                      :key="index"
                      :label="item"
                      :value="item"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="12">
              <el-form-item label="奖励金额">
                <el-input
                    placeholder="请输入奖励"
                    v-model="form.money"
                    clearable>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addInfo()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table :data="tableData" v-loading="loading">
      <el-table-column prop="driver_score_type" label="司机类型">
      </el-table-column>
      <el-table-column prop="brand" label="品牌" width="120">
      </el-table-column>
      <el-table-column prop="type" label="活动时段/名称">
      </el-table-column>
      <el-table-column prop="name" label="活动名称">
      </el-table-column>
      <el-table-column prop="money" label="金额">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 删除按钮 -->
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div align="center">
      <el-button type="success" plain style="margin-top: 20px;" @click="update_jingpin2()" :disabled="button_sbumit">提交竞品信息</el-button>
      <el-button type="danger" plain style="margin-top: 20px;" @click="delete_all()" :disabled="button_delete_all">清空竞品信息</el-button>
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
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      loading: true,
      params:{
        pageSize:10,
        page:1,
        total:0
      },
      button_sbumit:false,
      button_delete_all:false,
      dialogFormVisible: false,
      scoreTypeOptions:['拉新','H＜90','90≤H＜100','100≤H＜130','130≤H≤150'],
      scoreTypeObj:{'拉新':['高德','妥妥','携华','阳光','易至'],'H＜90':['妥妥','阳光','易至'],'90≤H＜100':['高德','携华','阳光','易至'],
        '100≤H＜130':['高德','哈喽','妥妥','携华','阳光','易至'],'130≤H≤150':['高德','哈喽','妥妥','携华','阳光','易至']},
      brandOptions:[],
      typeOptions: ['新手', '时段', '冲单','累计冲单','时长任务','流水保底','流水返佣'],
      typeObj: { '新手': ['【司机邀请】注册完成首单司机奖励', '新司机首单奖', '新司机7天完100单奖','新司机30天完500单奖','上传网约车驾驶证','上传网约车运输证'],
        '时段': ['【8-10点完3单奖】', '【8-10点完4单奖】', '【8-10点完5单奖】','【8-10点完6单奖】','【11-14点完8单奖】','【11-15点完2单奖】','【11-15点完3单奖】','【11-15点完5单奖】','【11-15点完7单奖】','【17-19点完3单奖】','【17-19点完4单奖】','【17-19点完5单奖】','【17-19点完6单奖】','【20-23点完8单奖】','【17-21点完2单奖】','【17-21点完3单奖】','【17-21点完5单奖】','【17-21点完8单奖】','【17-21点完10单奖】'],
        '冲单': ['【日冲11单奖】（高德）N', '【日冲16单奖】（高德）N','【日冲21单奖】（高德）N','【日冲26单奖】（高德）N','【日冲7单奖】','【日冲10单奖】','【日冲12单奖】','【日冲13单奖】','【日冲16单奖】','【日冲17单奖】','【日冲22单奖】','【日冲28单奖】'],
        '累计冲单':['【10.25—10.31完95单】','【10.25—10.31完125单】','【10.25—10.31完150单】','【10.25—10.31完170单】','【10.25—10.31完190单】','【10.28—10.30完26单】','【10.28—10.30完48单】','【10.28—10.30完68单】'],
        '时长任务':['【7—9点】时长冲单奖，要求至少在线1.5H，完单4单，（高德）N','【在线10H完8单奖励】'],
        '流水保底':['【保底流水在线10H完28单奖励】'],
        '流水返佣':['【日完6单以上流水反补】','【日完8单以上流水反补】','【日完10单以上流水反补】']},
      activityOptions: [],
      form: {
        driver_score_type: '',
        brand: '',
        type: '',
        name: '',
        money:''
      },
      formInline: {
        driver_score_type: '',
        brand: '',
        type:''
      },
      form2:{
        money:''
      }
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    changeSelect() {
      this.form.name = ''
      for (const k in this.typeOptions) {
        if (this.form.type === this.typeOptions[k]) {
          this.activityOptions = this.typeObj[this.form.type]
        }
      }
    },
    changeSelect2() {
      this.form.brand = ''
      for (const k in this.scoreTypeOptions) {
        if (this.form.driver_score_type === this.scoreTypeOptions[k]) {
          this.brandOptions = this.scoreTypeObj[this.form.driver_score_type]
        }
      }
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
    async search() {
      this.axios({
        method: 'post',
        url: '/user_data',
        data: {'page':this.params.page,'limit':this.params.pageSize,'driver_score_type':this.formInline.driver_score_type,'brand':this.formInline.brand,'type':this.formInline.type},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            this.tableData=data['results'];
            this.params.total=data['total']
            this.params.page=data['page']
            this.loading=false
          })
          .catch((error) => {
            console.log(error)
          })
    },
    async removeUserById (row) {

      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm('删除该竞品信息, 是否继续?', '提示', {
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
        url: '/delete_data',
        data: {'driver_score_type':row.driver_score_type,'brand':row.brand,'type':row.type,'name':row.name},
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
              this.$message.error('删除失败');
              this.search()
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    async addInfo(){
      if (this.form.driver_score_type==''){
        this.$message.error('请选择司机类型');
        return
      }
      if (this.form.brand==''){
        this.$message.error('请选择品牌');
        return
      }
      if (this.form.type==''){
        this.$message.error('请选择活动类型');
        return
      }
      if (this.form.name==''){
        this.$message.error('请选择活动时段/名称');
        return
      }
      if (this.form.money==''){
        this.$message.error('请输入奖励金额');
        return
      }
      this.axios({
        method: 'post',
        url: '/add_info',
        data: {'driver_score_type':this.form.driver_score_type,'brand':this.form.brand,'type':this.form.type,'name':this.form.name,'money':this.form.money},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            if (data=="success"){
              this.$message({
                message: '添加成功',
                type: 'success'
              });
              this.search()
            }
            else if (data=="fail"){
              this.$message.error('竞品信息已存在，添加失败');
              this.search()
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    async update_jingpin2(){
      this.button_sbumit=true
      this.axios({
        method: 'post',
        url: '/update_jingpin2',
        data: {},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            if (data=="success"){
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.search()
              this.button_sbumit=false
            }
            else if (data=="fail"){
              this.$message.error('提交失败');
              this.search()
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    async condition_search(){
      this.search()
    },
    async clear(){
      this.formInline.driver_score_type='';
      this.formInline.brand='';
      this.formInline.type='';
      this.search();
    },
    async delete_all(){
      this.button_delete_all=true
      const confirmResult = await this.$confirm('删除所有竞品信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      if (confirmResult !== 'confirm') {
        this.button_delete_all=false
        return this.$message.info('已取消删除')
      }
      this.axios({
        method: 'post',
        url: '/delete_all',
        data: {},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            if (data=="success"){
              this.$message({
                message: '清除成功',
                type: 'success'
              });
              this.search()
              this.button_delete_all=false
            }
            else if (data=="fail"){
              this.$message.error('清除失败');
              this.search()
              this.button_delete_all=false
            }
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
};
</script>

<style scoped>

</style>