<template>
    <el-table :data="Data" stripe style="width: 100%">
        <el-table-column prop="name" label="昵称" width="380" />
        <el-table-column prop="email" label="电子邮箱" width="380" />
        <el-table-column prop="realname" label="真实姓名" />
        <el-table-column label="操作" width="200" v-if="Status === 'admin'">
            <template #default v-if="myClass === 'parti'">
                <el-button link type="primary" size="small" @click="remove">移出</el-button>
                <el-button link type="primary" size="small" @click="dialogIdenVisible = true"
                    v-if="Status === 'creator'">
                    身份设置
                </el-button>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="200" v-else-if="Status === 'creator'">
            <template #default>
                <el-button link type="primary" size="small">移出</el-button>
                <el-button link type="primary" size="small" @click="dialogIdenVisible = true"
                    v-if="Status === 'creator'">
                    身份设置
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    props: ['Data', 'Status', 'myClass'],
    methods: {
    },
    data() {
        return {
            dialogIdenVisible: false
        }
    }
}
</script>