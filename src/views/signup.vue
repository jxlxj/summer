<template>
  <div class="signup">
    <form class="signup-box">
      <h1>这是注册界面</h1>
      <label
        ><input
          v-model="username"
          type="text"
          placeholder="Username"
          class="username"
      /></label>
      <label
        ><input
          v-model="password"
          type="password"
          placeholder="Password"
          class="password"
      /></label>
      <label
        ><input
          v-model="password2"
          type="text"
          placeholder="Password again"
          class="password"
      /></label>
      <label
        ><input v-model="email" type="text" placeholder="email" class="email"
      /></label>
      <button type="submit" @click="click_login" class="signup">
        sign up now!
      </button>
      <router-link to="/login">or Login</router-link>
    </form>
  </div>
  <particles></particles>
</template>
<script>
import Particles from "@/components/particles/index.vue";
export default {
  components: {
    particles: Particles,
  },
};
</script>
<style scoped>
@import "../styles/signup.css";
</style>