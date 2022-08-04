<template>
  <el-form :model="form" class="rename" label-width="90px">
    <el-form-item label="修改项目名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('request', form)">重命名</el-button>
      <el-button @click="$emit('cancel')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Rename",
  props: ["modify-name"],
  data() {
    return {
      form: {
        name: this.modifyName,
      },
    };
  },
  methods: {},
};
</script>