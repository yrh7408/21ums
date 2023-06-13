<template>
  <div class="use_box">
    <!-- 头部搜索 -->
    <el-table border :data="tableData" stripe style="width: 100%">
      <el-table-column align="center" prop="name" label="登录ip" />
      <el-table-column align="center" prop="phoneNumber" label="登录时间" />
      <el-table-column align="center" prop="province" label="登录会员id" />
      <el-table-column align="center" prop="userAgent" label="登录类型" />
    </el-table>
  </div>
</template>

<script>
import add from "./add/index.vue";
import api from "@/http/ums_member_login_log ";
import { ElMessage,  } from "element-plus";
export default {
  components: {
    add,
  },
  data() {
    return {
      json: {
        current: 1,
        size: 99,
      },
      searchText: "",
      currentPage: 1, // 当前页码
      pageSize: 6, // 每页显示的数据条数
      total: 0,
      tableData: [],
      editDialogVisible: false,
      editItem: {},
      selectedRow: null,
      // 其他的 data 属性
      form: {},
      updateOpen: false,
      searchVal: "",
      tableDateCopy: [], //表格数据备份
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //获取列表数据
    getList() {
      api.Page(this.json).then((res) => {
        console.log(res.data.data.page.records);
        this.tableData = res.data.data.page.records;
        this.tableDateCopy = res.data.data.page.records;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.use_box {
  width: 100%;
  height: 100%;
}
</style>