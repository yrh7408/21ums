<template>
  <el-form ref="form" :model="form" label-width="120px">
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
  </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
import api from "@/http/ums_member_receive_address.js";
export default {
  props: ["id"],
  created() {
    api.Page(this.json).then((res) => {
      res.data.data.page.records.forEach((x) => {
        if (x.memberId == this.id) {
          this.isFlag = true;
          this.form = x;
          return;
        }
      });
    });
  },
  data() {
    return {
      form: {},
      json: {
        current: 1,
        size: 99,
      },
      isFlag: false, //true 代表有地址了
    };
  },
  methods: {
    submit() {
      this.form.memberId = this.id;
      (this.isFlag ? api.Edit(this.form) : api.Add(this.form)).then((res) => {
        ElMessage({
          message: "操作成功",
          type: "success",
        });
        this.form = {};
      });
    },
  },
};
</script>

<style>
</style>