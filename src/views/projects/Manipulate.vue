<script setup>
import Create from "./Create";
import Rename from "./Rename";
import Delete from "./Delete";
</script>
<template>
  <div class="align-items-center justify-content-center vh-100 vw-100 manipulate" v-show="Boolean(type)">
    <div class="text-center d-flex align-items-center justify-content-center form">
      <!-- https://blog.csdn.net/qq_40738077/article/details/106765455 -->
			<!-- https://blog.csdn.net/weixin_41610178/article/details/114982074 -->
      <component :is="componentId" v-bind="$attrs"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Manipulate",
  props: {
    type: String,
  },
  data() {
    return {};
  },
  computed: {
    componentId() {
      return { Create, Rename, Delete }[
        this.type.replace(/^./, (s) => s.toUpperCase())
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.manipulate {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(40, 40, 40, 0.4);
}
.form {
  min-height: 200px;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  background-color: $light;
}
</style>