<script setup>
import Query from "./Query";
import Manipulate from "./Manipulate";
</script>
<template>
  <div id="main">
    <div class="d-flex flex-wrap align-items-center my-3 frontline">
      <el-avatar :size="60" src="">
        {{groupName.charAt(0).toUpperCase()}}
      </el-avatar>
      <div class="flex-1 group-name">
        <h1>{{groupName}}</h1>
      </div>
    </div>
    <div class="d-flex my-3 align-items-center justify-content-between">
      <h4 class="fw-normal flex-auto">团队项目</h4>
      <el-button type="success" @click="manipulate({operator: 'create'})">添加项目</el-button>
    </div>
    <query :list="list" @manipulate="manipulate" />
    <manipulate :type="type" :modify-name="modifyName" @cancel="type=''" @request="manipulate_request" />
  </div>
</template>

<script>
import web from "@/network";
export default {
	name: "Main",
	data() {
		return {
			list: [],
			type: "",
			modifyName: "",
			index: undefined,
		};
	},
	computed: {
		groupName() {
			return this.$route.query.groupName;
		},
	},
	async mounted() {
		// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E7%BB%99%E6%96%B0%E7%9A%84%E5%8F%98%E9%87%8F%E5%90%8D%E8%B5%8B%E5%80%BC
		let { data: list } = await web.get("projects", { params: { name: this.groupName } });
		this.list = list;
	},
	methods: {
		manipulate(e) {
			this.type = e.operator;
			this.modifyName = this.list[(this.index = e.index)]?.name;
		},
		async manipulate_request(e) {
			switch (this.type) {
				case "create":
					await web.post("projects", Object.assign(e, { groupName: this.groupName }));
					break;
				case "rename":
					await web.put("projects", Object.assign(e, { id: this.index, groupName: this.groupName }));
					break;
				case "delete":
					await web.delete("projects", { data: { id: this.index, groupName: this.groupName } });
					break;
			}
			location.href = location.href;
		},
	},
};
</script>

<style lang="scss" scoped>
#main {
	text-align: initial;
}
.frontline {
	.el-avatar {
		user-select: none;
		font-size: 2.5em;
	}
	.group-name {
		margin-left: 1.5rem;
	}
}
</style>