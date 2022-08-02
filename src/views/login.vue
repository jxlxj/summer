<template>
  <div class="login">
    <form class="form-box">
      <h1>这是登录界面</h1>
      <label><input v-model="username" type="text" placeholder="Username" class="username" /></label>
      <label><input v-model="password" type="password" placeholder="Password" class="password" /></label>
      <button type="submit" @click="click_login" class="login">Login</button>
      <router-link to="/signup">or Sign Up</router-link>
    </form>
  </div>

</template>



<style scoped>
@import "../style/login.css";
</style>