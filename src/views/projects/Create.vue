<template>
  <el-form :model="form" class="create" label-width="90px">
    <el-form-item label="创建项目名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('request', form)">创建</el-button>
      <el-button @click="$emit('cancel')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {},
};
</script>