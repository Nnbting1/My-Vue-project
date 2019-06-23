<template>
  <el-card>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <div style="margin-top: 15px;">
      <el-row class="myrow">
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="query" @keyup.enter.native="seach" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="seach"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="success" plain>添加用户</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 表格 -->
    <!-- element表格会自动遍历 ：data拿到数据 得到相对的prop里面的属性 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="80"></el-table-column>
      <el-table-column prop="username" label="姓名" width="200"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="create_time" label="联系方式" width="200"></el-table-column>
      <el-table-column label="用户状态" width="120">
        <!-- 要在表格里面添加自己的东西要加上 template -->
        <!-- slot-scope - 指定数据源 -->
        <template slot-scope="scope">
          <!-- scope.row - 每一行的数据 -->
          <!-- {{scope.row}} -->
          <!-- element-ui 的 swicth 开关 -->
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="primary" icon="el-icon-edit" size="small" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" plain></el-button>
          <el-button type="success" icon="el-icon-check" size="small" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- current-change事件来处理页码大小和当前页变动时候触发的事件。 -->
    <el-pagination
      style="margin-top:20px"
      @size-change="handleSizeChange"
      @current-change="changePag"
      :page-sizes="pagesizes"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      // 查询数据
      query: "",
      // 获取列表数据
      tableData: [],
      // 当前页
      pagenum: 1,
      // 页容量
      pagesize: 3,
      // 页容量的选项集合
      pagesizes: [3,4,5,10,15],
      // 数据的总数
      total: 0
    };
  },
  methods: {
    getDatalist() {
      this.$http({
        method: "GET",
        url: `http://localhost:8888/api/private/v1/users`,
        headers: {
          Authorization: window.localStorage.getItem("token")
        },
        params: {
          query: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
      }).then(res => {
        let { data, meta } = res.data;
        if (meta.status === 200) {
          this.tableData = data.users;
          this.total = data.total;
        }
      });
    },
    changePag(val) {
      // 参数 val 得到当前页
      // console.log(val)
      // 赋值给当前页
      this.pagenum = val;
      // 重新访问
      this.getDatalist();
    },
    handleSizeChange(val) {
      // 参数 val 得到一页的条数
      // console.log(val)
      // 赋值给页容量
      this.pagesize = val
      // 重新访问
      this.getDatalist()

    },
    seach(){
      this.pagenum = 1
      this.getDatalist();
    }
  },
  mounted() {
    this.getDatalist();
  }
};
</script>

<style scoped>
</style>
