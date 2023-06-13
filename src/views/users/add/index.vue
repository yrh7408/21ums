<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="昵称">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="启用状态">
      <el-switch :active-value="1" :inactive-value="0" v-model="form.status" />
    </el-form-item>
  </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
import api from "@/http/ums_member_controller.js";
export default {
  props: ["flag", "id"],
  created() {
    if (!this.flag) {
      // 修改操作 拿到 id 获取单条数据
      api.One(this.id).then((res) => {
        this.form = res.data.data.help;
      });
    } else {
      // 不管是不是修改 都重置一下表单
      this.form = {
        nickname: "", //昵称
        username: "", //账号
        password: "", //密码
        phone: "", //手机号码
        status: "1", //启用状态 默认启用
      };
    }
  },
  data() {
    return {
       json: {
        current: 1,
        size: 99,
      },
      form: {
        nickname: "", //昵称
        username: "", //账号
        password: "", //密码
        phone: "", //手机号码
        status: "1", //启用状态 默认启用
      },
    };
  },
  methods: {
    submit() {
      this.id === "" || this.id === undefined
        ? api.Add(this.form)
        : api
            .Edit(this.form)
            .then((res) => {
              ElMessage({
                message: res.data.msg,
                type: "success",
              });
              this.form = {
                nickname: "", //昵称
                username: "", //账号
                password: "", //密码
                phone: "", //手机号码
                status: "1", //启用状态 默认启用
              };
            })
            .catch((err) => {
              ElMessage({
                message: "提交数据不能为空,或者数据重复",
                type: "error",
              });
            });
    },
  },
};
</script>

<style>
</style>