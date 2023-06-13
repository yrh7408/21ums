<template>
  <div class="layout">
    <!-- 用户管理主页面 布局 -->
    <!-- 菜单栏栏 -->
    <div class="menu_">
      <div class="profile">
        <h3>用户管理系统</h3>
      </div>
      <el-menu router default-active="/" class="el-menu-vertical-demo">
        <el-menu-item index="/us_index">
          <el-icon><document /></el-icon>
          <span>会员管理</span>
        </el-menu-item>
        <el-menu-item index="/us_level">
          <el-icon><document /></el-icon>
          <span>会员等级</span>
        </el-menu-item>
        <el-menu-item index="/us_logs">
          <el-icon><setting /></el-icon>
          <span>会员登录日志</span>
        </el-menu-item>
        <el-menu-item index="/us_address">
          <el-icon><setting /></el-icon>
          <span>会员收货地址</span>
        </el-menu-item>
        <el-menu-item @click="exit">
          <el-icon><Close /></el-icon>
          <span>退出登录</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 主体区域 -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  methods: {
    exit() {
      localStorage.removeItem("status");
      this.$router.push({ name: "login" });
      ElMessage({
        message: "退出成功!",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less">
.layout {
  width: 100%;
  height: calc(100vh);
  background-color: rgba(160, 160, 160, 0.73);
  display: flex;
  .menu_ {
    width: 300px;
    height: 100%;
    background-color: rgb(160, 160, 160);
    .profile {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  .main {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
}
</style>