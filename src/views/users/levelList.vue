<template>
  <div class="use_box">
    <!-- 头部搜索 -->
    <el-input
      @input="search"
      v-model="searchVal"
      placeholder="请输入等级标题"
    />
    <el-space style="margin: 10px 0px" :size="size" spacer="|">
      <el-button @click="add"> 新增等级 </el-button>
    </el-space>
    <el-table border :data="tableData" stripe style="width: 100%">
      <el-table-column align="center" prop="name" label="等级标题" />
      <el-table-column
        align="center"
        prop="commentGrowthPoint"
        label="每次评价获取的成长值"
      />
      <el-table-column
        align="center"
        prop="defaultStatus"
        label="是否为默认等级"
      />
      <el-table-column
        align="center"
        prop="freeFreightPoint"
        label="免运费标准"
      />
      <el-table-column
        align="center"
        prop="priviledgeBirthday"
        label="是否有生日特权"
      />
      <el-table-column
        align="center"
        prop="priviledgeComment"
        label="是否有评论获奖励特权"
      />
      <el-table-column
        align="center"
        prop="priviledgeFreeFreight"
        label="是否有免邮特权"
      />
      <el-table-column
        align="center"
        prop="priviledgeMemberPrice"
        label="是否有会员价格特权"
      />
      <el-table-column
        align="center"
        prop="priviledgePromotion"
        label="是否有专享活动特权"
      />
      <el-table-column
        align="center"
        prop="priviledgeSignIn"
        label="是否有签到特权"
      />
      <el-table-column align="center" prop="phone" width="300px" label="操作">
        <template #default="scope">
          <el-button
            size="small"
            type="success"
            @click="update(scope.row)"
            >修改</el-button
          >
          <el-popconfirm
            @confirm="delete_levelList(scope.row)"
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
    <el-dialog v-model="addOpen" title="操作" width="50%">
      <el-form ref="form" :model="form" label-width="200px">
         <el-form-item label="等级标题">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="每次评价获取的成长值">
          <el-input v-model="form.commentGrowthPoint" />
        </el-form-item>
        <el-form-item label="是否为默认等级：0->不是；1->是">
          <el-input v-model="form.defaultStatus" />
        </el-form-item>
        <el-form-item label="免运费标准">
          <el-input v-model="form.freeFreightPoint" />
        </el-form-item>
        <el-form-item label="是否有生日特权">
          <el-input v-model="form.priviledgeBirthday" />
        </el-form-item>
        <el-form-item label="是否有评论获奖励特权">
          <el-input v-model="form.priviledgeComment" />
        </el-form-item>
        <el-form-item label="是否有免邮特权">
          <el-input v-model="form.priviledgeFreeFreight" />
        </el-form-item>
        <el-form-item label="是否有会员价格特权">
          <el-input v-model="form.priviledgeMemberPrice" />
        </el-form-item>
        <el-form-item label="是否有专享活动特权">
          <el-input v-model="form.priviledgePromotion" />
        </el-form-item>
        <el-form-item label="是否有签到特权">
          <el-input v-model="form.priviledgeSignIn" />
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
import api from "@/http/ums_member_level.js";
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
      addOpen: false,
      searchVal: "",
      tableDateCopy: [], //表格数据备份
      isUpdate: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    add() {
      this.isUpdate = false;
      this.addOpen = true;
    },
    update(row) {
      this.isUpdate = true;
      api.One(row.id).then(res=>{
          this.form = res.data.data.help
         this.addOpen = true;
      })
    },
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
      (this.isUpdate ? api.Edit(this.form) : api.Add(this.form)).then((res) => {
        ElMessage({
          message: res.data.msg,
          type: "success",
        });
        this.addOpen = false;
        this.form = {};
        this.getList();
      });
    },
    //获取列表数据
    getList() {
      api.Page(this.json).then((res) => {
        console.log(res.data.data.page.records);
        this.tableData = res.data.data.page.records;
        this.tableDateCopy = res.data.data.page.records;
      });
    },
    //删除会员地址
    delete_levelList(row) {
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