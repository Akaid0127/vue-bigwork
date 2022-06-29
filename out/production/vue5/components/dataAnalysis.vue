<template>
  <div class="dAnal-body" id="dAnal-body">
    <div class="dAnal-main">
      <div class="Echarts">
        <div id="main" style="width: 800px;height:400px;"></div>
        <div align="center">
          <div id="main2" style="width: 400px;height: 250px;"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  methods:{
    async search(){
      this.axios({
        method: 'post',
        url: '/draw_table1',
        data: {},
      })
          .then((res) => {
            console.log(res.data);
            var data = res.data
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
              title: {
                text: '各学院人员数量分布'
              },
              tooltip: {},
              legend: {
                data:['人数']
              },
              xAxis: {
                data: data['ucompany']
              },
              yAxis: {},
              series: [{
                name: '人数',
                type: 'bar',
                data: data['cnts']
              }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          })
          .catch((error) => {
            console.log(error)
          })
    },
    drawPie(id){
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: ''
        },
        tooltip: {
        },
        legend: {
          data:this.opinion
        },
        series: [
          {
            name:'人数',
            type:'pie',
            radius:['50%','70%','90%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:this.opinionData
          }
        ]
      })
    }
  },
  data () {
    return {
      charts: '',
      opinion:['系统管理员','学院管理员','普通管理员'],
      opinionData:[
        {value:2, name:'系统管理员'},
        {value:5, name:'学院管理员'},
        {value:1, name:'普通管理员'},
      ]
    }
  },
  mounted() {
    this.search();
    this.$nextTick(function() {
      this.drawPie('main2')
    })
  }
}
</script>

<style scoped>
.dAnal-body{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.dAnal-body .dAnal-top{
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

.dAnal-body .dAnal-top img{
  width: 16%;
  height: 90%;
  margin: 5px 5px;
}

.dAnal-body .dAnal-top el-button{
  width: 22%;
  height: 50%;
}

.dAnal-top-cdiv1{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 89.5%;
  top: 6%;
}

.dAnal-body .dAnal-main{
  width: 100%;
  height: 100%;
  background-color: rgba(236,238,242,0.5);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1% 2%;
}

.dAnal-main-cdiv3{
  position: absolute;
  text-align: left;
  margin: -10px 30px -10px;
  /*rgba(64,158,255,1);*/
}

.dAnal-main-cdiv3 h2{
  color: rgba(20,108,199,1);;
}
</style>

