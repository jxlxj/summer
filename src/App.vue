<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AppMenu />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppMenu from "./components/appMenue.vue"
export default {
  name: "App",
  components: {
    HelloWorld, AppMenu
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
  text-align: center;
  color: #2c3e50;

}

.el-aside {

  height: 100vh;
}
</style>
