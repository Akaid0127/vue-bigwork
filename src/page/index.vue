<template>
  <el-container style="position: absolute;height: 100%;width: 100%; border: 1px solid #eee">
    <el-aside width="220px" style="background-color: #909399">
      <el-menu :default-openeds="['1', '2','3','4','5']" router="true" background-color="#545c64"
               text-color="#fff">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-office-building"></i>竞品</template>
          <el-menu-item-group>
            <el-menu-item index="/jingpin">竞品信息收集</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-office-building"></i>单位管理</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
            <el-menu-item>选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-data-line"></i>单位数据管理</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
            <el-menu-item>选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-data-analysis"></i>数据统计与分析</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
            <el-menu-item>选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-search"></i>数据浏览与查询</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
            <el-menu-item>选项2</el-menu-item>
            <el-menu-item>选项3</el-menu-item>
            <el-menu-item>选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-search"></i>数据浏览与查询</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title"><i class="el-icon-search"></i>数据浏览与查询</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title"><i class="el-icon-search"></i>数据浏览与查询</template>
          <el-menu-item-group>
            <el-menu-item>选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
<!--      <el-header style="text-align: center; font-size: 25px">-->
<!--        <span>@易至出行</span>-->
<!--      </el-header>-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #303133;
  color: #303133;
}
</style>

<script>
export default {
  data() {
  }
};
</script>