<template>
  <div class="main-content" id="main-content">
    <div class="main-top">
      <el-image fit="contain" :src="require('@/assets/image/logo1.png')"></el-image>
      <div class="tdiv1">
<!--        <el-button type="primary"  icon="el-icon-caret-right" @click="relogin">登录</el-button>-->
<!--        <el-button type="primary"  icon="el-icon-caret-right" @click="reRegister">注册</el-button>-->
      </div>
      <div class="tdiv2">
        <el-button-group>
          <el-button type="primary" @click="logout" icon="el-icon-s-platform" >退出</el-button>
          <el-button type="primary" @click="open2" icon="el-icon-phone-outline">咨询联系</el-button>
          <el-button type="primary" @click="open3" icon="el-icon-s-platform" >系统介绍</el-button>
        </el-button-group>
      </div>
      <div class="tdiv3">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 router="true"
                 @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">用户管理</template>
            <el-menu-item index="1-1" @click="goUserInfo">管理用户</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">单位管理</template>
            <el-menu-item index="2-1" @click="goCompanyInfo">管理单位信息</el-menu-item>
            <el-menu-item index="2-2" @click="goCUserInfo">管理单位数据</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">数据管理</template>
            <el-menu-item index="3-2" @click="goDataLoad">单位数据导入与导出</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">数据统计与分析</template>
            <el-menu-item index="4-1" @click="goDataAnalysis">数据统计与分析</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">数据浏览与查询</template>
            <el-menu-item index="5-1" @click="uDataSearch">数据浏览查询</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main-left">
      <div class="leftcdiv1">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <br>
      <div class="ldiv2">
        <h2><i class="el-icon-search"></i>权限查询</h2>
      </div>
      <div class="ldiv1">
        <el-button @click="drawer1 = true" type="primary" style="margin-left: 16px;">
          <i class="el-icon-setting"></i>
          系统权限
        </el-button>
        <el-drawer
          title="我是标题"
          :visible.sync="drawer1"
          :with-header="false">
          <h2>系统管理员权限</h2>
          <hr>
          <ul >
            <li>可增删改查用户数据、单位数据</li>
            <li>可下载和上传数据</li>
            <li>可查看或修改数据报表</li>
            <li>可浏览和查询数据</li>
          </ul>
        </el-drawer>
        <el-button @click="drawer2 = true" type="primary" style="margin-left: 16px;">
          <i class="el-icon-user"></i>
          用户权限
        </el-button>
        <el-drawer
          title="我是标题"
          :visible.sync="drawer2"
          :with-header="false">
          <h2>用户权限</h2>
          <hr>
          <ul >
            <li>可查看用户数据、单位数据</li>
            <li>可下载数据</li>
            <li>可查看数据报表</li>
            <li>可浏览的查询数据</li>
          </ul>
        </el-drawer>
        <el-button @click="drawer3 = true" type="primary" style="margin-left: 16px;">
          <i class="el-icon-goods"></i>
          单位权限
        </el-button>
        <el-drawer
          title="我是标题"
          :visible.sync="drawer3"
          :with-header="false">
          <h2>单位管理员权限</h2>
          <hr>
          <ul >
            <li>可修改单位用户数据</li>
            <li>可查看单位数据</li>
            <li>可下载数据</li>
            <li>可查看数据报表</li>
            <li>可浏览的查询数据</li>
          </ul>
        </el-drawer>
        <br><br>
      </div>
    </div>
    <div class="main-right">
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      drawer1: false,
      drawer2: false,
      drawer3: false,
      msg: '请开始你的表演',
      tableData: []
    }
  },
  methods: {

    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },

    goUserInfo : function () {
      this.$router.push({path:'/index/userInfo'});
    },
    goCompanyInfo : function () {
      this.$router.push({path:'/index/companyInfo'});
    },
    goCUserInfo : function () {
      this.$router.push({path:'/index/cUserInfo'});
    },
    goDataLoad : function () {
      this.$router.push({path:'/index/dataLoad'});
    },
    goDataDown : function () {
      this.$router.push({path:'/index/dataDown'});
    },
    goDataStatistics : function () {
      this.$router.push({path:'/index/dataStatistics'});
    },
    goDataAnalysis : function () {
      this.$router.push({path:'/index/dataAnalysis'});
    },
    uDataSearch : function () {
      this.$router.push({path:'/index/uDataSearch'});
    },
    cDataSearch : function () {
      this.$router.push({path:'/index/cDataSearch'});
    },

    relogin : function () {
      this.$router.push({path:'/index/login'});
    },
    reRegister : function () {
      this.$router.push({path:'/index/Register'});
    },
    open1() {
      this.$alert('系统维护中', '帮助信息', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    open2() {
      this.$alert('系统维护中', '咨询联系', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    open3() {
      this.$alert('包含用户管理、单位管理、单位数据管理、数据统计与分析、数据浏览与查询等模块功能。\n' +
        '用户管理包括添加用户角色和权限、管理系统管理员、各单位管理员、各单位不同级别人员。\n' +
        '单位管理可以管理一个单位、单位相关的人员和数据信息。\n' +
        '单位数据管理可以添加一个数据表格，数据可以从excel表格导入，也可以导出为excel表格。\n' +
        '数据统计与分析可以做一些简单的分析、报表。数据浏览与查询模块可以查询系统相关数据信息。\n', '系统介绍', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    logout() {
      sessionStorage.clear();
      this.$router.push({path:'/login'});
    }
  }
}
</script>

<style>
.main-content{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(../assets/image/background2.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.main-content .main-top{
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

.main-content .main-left{
  width: 30%;
  height: 80%;
  position: absolute;
  left: 2%;
  top: 17.5%;

  background-color: rgba(236,238,242,0.5);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.main-content .main-right{
  width: 64.5%;
  height: 80%;
  position: absolute;
  left: 33.5%;
  top: 17.5%;

  background-color: rgba(236,238,242,0.5);
  /*边框设置圆角*/
  border: 4px solid rgba(236,238,242,0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.main-content .main-top img{
  width: 37%;
  height: 100%;
  margin: 5px 5px;
}

.main-content .main-top el-button{
  width: 22%;
  height: 50%;
}

.tdiv1{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 82%;
  top: 6%;
}

.tdiv2{
  width: 400px;
  height: 100px;
  position: absolute;
  left: 34%;
  top: 6%;
}
.tdiv3{
  position: absolute;
  left: 55.4%;
  top: 5%;
}

.main-content .main-right span{
  height: 100px;
}

.leftcdiv1{
  margin: 20px 20px;

}

.el-carousel__item h3 {
  color: transparent;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 10px 10px;
}


.el-carousel__item:nth-child(3) {
  background: rgba(0, 0, 0, 0) url(../assets/image/01.jpg) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}
.el-carousel__item:nth-child(4) {
  background: rgba(0, 0, 0, 0) url(../assets/image/carousel2.png) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}
.el-carousel__item:nth-child(5) {
  background: rgba(0, 0, 0, 0) url(../assets/image/carousel3.png) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}
.el-carousel__item:nth-child(6) {
  background: rgba(0, 0, 0, 0) url(../assets/image/carousel4.png) no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
}

.ldiv1 button{
  margin: 25px -1px 0;
}

.ldiv2 h2{
  color: whitesmoke;
  font-size: 24px;
  margin: 50px auto 0;
  text-align: center;
}
.ldiv1 h2{
  color: black;
  font-size: 24px;
  margin: 50px auto 0;
  text-align: center;
}

.ldiv ul{

  list-style-type: circle;
  list-style-position: inside;
}
</style>
