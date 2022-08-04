<template>
  <el-form :model="form_delete" class="delete">
    <el-form-item label="警告:">
      <div>此操作将无法恢复项目。是否继续</div>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="$emit('request', {})">删除</el-button>
      <el-button @click="$emit('cancel')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Delete",
};
</script>