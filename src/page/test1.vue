<template>
  <div>
    <!-- Form -->
    <el-button type="primary" round @click="dialogFormVisible = true">添加竞品信息</el-button>

    <el-dialog title="竞品信息" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px">
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
        <el-form-item label="奖励金额">
          <el-input
              placeholder="请输入内容"
              v-model="form.money"
              clearable>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      formLabelWidth: '120px',
    };
  },
  methods:{
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
    }
  }
};
</script>