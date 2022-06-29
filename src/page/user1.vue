<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
    <el-table-column
        prop="id"
        label="编号">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名">
    </el-table-column>
    <el-table-column
        prop="permissions"
        label="权限">
    </el-table-column>
    <el-table-column
        prop="phone"
        label="联系方式">
    </el-table-column>
  </el-table>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName({row}) {
      if (row.permissions === "高级管理员") {
        return 'warning-row';
      } else if (row.permissions === "超级管理员") {
        return 'success-row';
      }
      return '';
    },
    async search() {
      this.axios({
        method: 'post',
        url: '/user',
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
    }
  },

  data() {
    return {
      tableData:[]
    }
  },mounted() {
    this.search()
  }
}
</script>