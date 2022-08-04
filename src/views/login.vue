<template>
  <div class="login">
    <form class="form-box">
      <h1>欢迎来到墨书</h1>
      <label><input v-model="username" type="text" placeholder="Username" class="username" /></label>
      <label><input v-model="password" type="password" placeholder="Password" class="password" /></label>
      <button type="submit" @click="click_login" class="login">Login</button>
      <router-link to="/signup">or Sign Up</router-link>
    </form>
  </div>

</template>

<script>
import api from "@/axiosConfig";
import user from "@/userUtils";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async click_login() {
      if (this.password === "" || this.username === "") {
        this.$message.warning("请输入用户名和密码！");
        return;
      }
      await api
        .post("/api/login", {
          name: this.username,
          password: this.password,
        })
        .then(async (res) => {
          this.$message.success(res.data.msg);
          if (res.data.errno === 0) {
            await sessionStorage.setItem("token", res.data.token);
            await user.methods.updateInfo();

            await sessionStorage.setItem("login", "true");
            await sessionStorage.setItem("retFromLogin", "true");
            window.location.href = "/";
          }
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
@import "../style/login.css";
</style>