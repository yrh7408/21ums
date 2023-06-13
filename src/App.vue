<template>
  <div id="app">
   <layout/>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import  layout  from "@/views/index.vue"

export default defineComponent({
  name: "App",
  components: {
    layout
  }
});
</script>

<style lang="scss" scoped>
/* 在这里添加样式规则 */
</style>
