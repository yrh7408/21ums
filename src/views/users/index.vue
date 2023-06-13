<template>
  <div class="use_box">
    <!-- 头部搜索 -->
    <el-input
      @input="search"
      v-model="searchVal"
      placeholder="请输入会员名称"
    />
    <el-space style="margin: 10px 0px" :size="size" spacer="|">
      <el-button @click="add"> 新增会员 </el-button>
    </el-space>
    <el-table border :data="tableData" stripe style="width: 100%">
      <el-table-column align="center" prop="nickname" label="昵称" />
      <el-table-column align="center" prop="username" label="账号" />
      <el-table-column align="center" prop="password" label="密码" />
      <el-table-column align="center" prop="phone" label="手机号" />
      <el-table-column align="center" prop="phone" label="标签">
        <template #default="scoped">
          <el-button size="small" @click="selectNoe(scoped.row)" type="success"
            >查看标签</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" prop="status" label="启用状态">
        <template #default="scope">
          <el-switch
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.status"
            @change="statusChange(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间" />
      <el-table-column align="center" prop="phone" width="400px" label="操作">
        <template #default="scope">
          <el-button size="small" type="success" @click="update_user(scope.row)"
            >修改</el-button
          >
          <el-button size="small" @click="setTag(scope.row)" type="success"
            >设置标签</el-button
          >
          <el-button size="small" @click="addressGan(scope.row)" type="success"
            >地址管理</el-button
          >
          <el-popconfirm
            @confirm="delete_user(scope.row)"
            title="确定删除此会员吗?"
          >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增对话框 -->
    <el-dialog v-model="addOpen" v-if="addOpen" title="操作" width="30%">
      <add :flag="isFlag" :id="id" ref="childComponent" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addOpen = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>


      <!-- 地址管理 -->
    <el-dialog v-model="addressOpen" v-if="addressOpen" title="会员地址管理" width="30%">
      <address_us :id="user_id" ref="childComponent1" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addressOpen = false">取 消</el-button>
          <el-button type="primary" @click="onSubmitAddressOpen"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog
      v-model="tagOpen"
      v-if="tagOpen"
      title="设置会员标签"
      width="30%"
    >
      <el-select v-model="tag_id">
        <el-option
          v-for="i in tagTable"
          :key="i.id"
          :label="i.name"
          :value="i.id"
        >
        </el-option>
      </el-select>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="tagOpen = false">取 消</el-button>
          <el-button type="primary" @click="submitTag"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import add from "./add/index.vue";
import address_us from "./address/index.vue";
import api from "@/http/ums_member_controller.js";
import tagApi from "@/http/ums_member_tag.js";
import tagRelApi from "@/http/ums_member_tag-relation.js";
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  components: {
    add,
    address_us
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
      addOpen: false,
      addressOpen:false,
      isFlag: true, //新增/修改
      id: "",
      searchVal: "", //搜索条件
      tableDateCopy: [], //表格数据备份
      tagTable: [], //tag表格数据
      user_id: "", //要修改tag的会员id
      tag_id: "", //要绑定tag的id
      tagOpen: false, //是否显示挟制标签对话框
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //地址管理
    addressGan(row){
      this.user_id = row.id
      this.addressOpen = true
    },
    //新增方法
    add(){
      this.isFlag = true
      this.addOpen = true
    }, 
    //查看会员用户标签
    selectNoe(row) {
      let tags = [];
      tagRelApi.Page(this.json).then((res) => {
        res.data.data.page.records.forEach(async (x) => {
          if (x.memberId == row.id) {
            await tagRelApi.One(x.tagId).then((res1) => {
              console.log(res1.data.data.help.name);
              tags.push(res1.data.data.help.name);
            });
          }
        });

        setTimeout(() => {
          if (!tags.length) {
            ElMessage({
              message: "当前会员没有绑定标签",
              type: "warning",
            });
          } else {
            ElMessage({
              message: "当前绑定标签有 :" + tags.join("->"),
              type: "success",
            });
          }
        }, 300);
        // if (res.data.code === 2) {
        //   ElMessage({
        //     message: "当前会员没有绑定标签",
        //     type: "warning",
        //   });
        // } else {
        // }
      });
    },
    //绑定用户标签关系
    submitTag() {
      if (this.tag_id) {
        tagRelApi
          .Add({
            memberId: this.user_id,
            tagId: this.tag_id,
          })
          .then((res) => {
            if (res.data.code === 1) {
              ElMessage({
                message: res.data.msg,
                type: "success",
              });
            } else {
              ElMessage({
                message: res.data.msg,
                type: "error",
              });
            }
            this.tag_id = "";
            this.tagOpen = false;
          });
      } else {
        ElMessage({
          message: "请选择标签再提交!",
          type: "error",
        });
      }
    },
    //设置tag标签
    setTag(row) {
      this.user_id = row.id;
      tagApi.Page(this.json).then((res) => {
        this.tagTable = res.data.data.page.records;
      });
      this.tagOpen = true;
    },
    //修改会员状态
    statusChange(row) {
      api.Edit(row).then((res) => {
        ElMessage({
          message: "修改状态成功!",
          type: "success",
        });
        this.getList();
      });
    },
    //筛选
    search() {
      if (this.searchVal === "") {
        this.tableData = this.tableDateCopy;
        return;
      }
      let newDate = [];
      this.tableDateCopy.forEach((x) => {
        if (x.nickname.indexOf(this.searchVal) !== -1) {
          newDate.push(x);
        }
      });
      this.tableData = newDate;
    },
    //修改会员
    update_user(row) {
      this.id = row.id;
      this.isFlag = false;
      this.addOpen = true;
    },
    //删除会员
    delete_user(row) {
      api.Del(row.id).then((res) => {
        ElMessage({
          message: "删除成功!",
          type: "success",
        });
        this.getList();
      });
    },
    getList() {
      api.Page(this.json).then((res) => {
        this.tableData = res.data.data.page.records;
        this.tableDateCopy = res.data.data.page.records;
      });
    },
    onSubmit() {
      this.$refs.childComponent.submit();
      this.addOpen = false;
      setTimeout(() => {
        this.getList();
      }, 100);
    },
    //新增会员收货地址
    onSubmitAddressOpen(){
      this.$refs.childComponent1.submit();
      this.addressOpen = false;
      setTimeout(() => {
        this.getList();
      }, 100);
    }
  },
};
</script>

<style lang="less" scoped>
.use_box {
  width: 100%;
  height: 100%;
}
</style>