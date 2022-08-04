<script setup>
import { MoreFilled, RefreshRight, Close } from "@element-plus/icons-vue";
</script>
<template>
  <ul id="query" class="prj-list">
    <li v-for="(prj, index) in list">
      <div class="d-flex justify-content-between">
        <div class="mb-1 flex-auto fw-bold prj-name">
          <a :href="prj.href">{{prj.name}}</a>
        </div>
        <div>
          <el-dropdown placement="bottom-start" @command="dropdownCmd($event,index)">
            <el-icon>
              <more-filled />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="text-center">操作</div>
                <!-- https://blog.csdn.net/qq_40765784/article/details/125445183 -->
                <el-dropdown-item icon="el-icon-refresh-right" command="rename">重命名</el-dropdown-item>
                <el-dropdown-item icon="el-icon-close" class="prj-delete" command="delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="prj-detail">
        <span>由 {{prj.create}} 创建</span>
        <span>更新于 {{createTime(prj.time)}} </span>
      </div>
    </li>
  </ul>
</template>

<script>
const fmt = new Intl.DateTimeFormat("zh-CN", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
});
export default {
  name: "query",
  data() {
    return {};
  },
  props: ["list"],
  methods: {
    createTime(t) {
      return fmt.format(t);
    },
    dropdownCmd(operator, index) {
      this.$emit("manipulate", { operator, index });
    },
  },
};
</script>

<style scoped lang="scss">
.prj-list {
  box-shadow: rgb(139 139 139) 5px 5px 15px 5px;
  border: none {
    radius: 5px;
  }
  li {
    padding: 1rem;
    list-style-type: none;
    &:not(:first-child) {
      border-top: solid 1px;
    }
    .prj-name {
      a {
        color: $cyan;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
.prj-delete {
  color: $danger;
  &:hover {
    color: red;
  }
}
.prj-detail {
  span:not(:first-child) {
    padding-left: 1rem;
  }
}
</style>