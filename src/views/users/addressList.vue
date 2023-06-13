<template>
  <div class="use_box">
    <!-- 头部搜索 -->
    <el-input
      @input="search"
      v-model="searchVal"
      placeholder="请输入会员名称"
    />
    <el-table border :data="tableData" stripe style="width: 100%">
      <el-table-column align="center" prop="name" label="收货人名称" />
      <el-table-column align="center" prop="phoneNumber" label="收货人手机" />
      <el-table-column align="center" prop="province" label="省" />
      <el-table-column align="center" prop="city" label="市" />
      <el-table-column align="center" prop="region" label="区" />
      <el-table-column align="center" prop="detailAddress" label="详细地址" />
      <el-table-column align="center" prop="memberId" label="绑定会员的id" />
      <el-table-column align="center" prop="phone" width="300px" label="操作">
        <template #default="scope">
          <el-button
            size="small"
            type="success"
            @click="update_address(scope.row)"
            >修改</el-button
          >
          <el-popconfirm
            @confirm="delete_address(scope.row)"
            title="确定删除此记录吗?"
          >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改对话框 -->
    <el-dialog v-model="updateOpen" title="操作" width="30%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="收货人名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="收货人手机">
          <el-input v-model="form.phoneNumber" />
        </el-form-item>
        <el-form-item label="省">
          <el-input v-model="form.province" />
        </el-form-item>
        <el-form-item label="市">
          <el-input v-model="form.city" />
        </el-form-item>
        <el-form-item label="区">
          <el-input v-model="form.region" />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.detailAddress" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addOpen = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import add from "./add/index.vue";
import api from "@/http/ums_member_receive_address.js";
import { ElMessage } from "element-plus";
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
    //筛选
    search() {
      if (this.searchVal === "") {
        this.tableData = this.tableDateCopy;
        return;
      }
      let newDate = [];
      this.tableDateCopy.forEach((x) => {
        if (x.name.indexOf(this.searchVal) !== -1) {
          newDate.push(x);
        }
      });
      this.tableData = newDate;
    },
    //修改会员地址
    onSubmit() {
      api.Edit(this.form).then((res) => {
        ElMessage({
          message: res.data.msg,
          type: "success",
        });
        this.updateOpen = false;
        this.form = {};
        this.getList();
      });
    },
    //修改会员地址
    update_address(row) {
      this.form = row;
      this.updateOpen = true;
    },
    //获取列表数据
    getList() {
      api.Page(this.json).then((res) => {
        this.tableData = res.data.data.page.records;
        this.tableDateCopy = res.data.data.page.records;
      });
    },
    //删除会员地址
    delete_address(row) {
      api.Del(row.id).then((res) => {
        ElMessage({
          message: res.data.msg,
          type: "success",
        });
        this.getList();
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