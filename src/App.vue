<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="160px">
        <AppMenu />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppMenu from "./components/appMenue.vue"
export default {
  name: "App",
  components: {
    AppMenu
  },
};
</script>

<style>
@import './style/common.css';
@import './style/font.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}

.el-aside {
  height: 100vh;
}
</style>
