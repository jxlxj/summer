<template>
    <div class="common-layout">

        <el-tabs class="teamTab" tab-position="left" style="height: 92vh">
            <el-tab-pane label="team1">
                <div class="headBox">
                    <img src="../assets/用户量.svg" class="team" />
                    <h3 class="nameOfteam">team1</h3>
                    <el-popover placement="bottom" title="" :width="50" trigger="hover" content="退出该团队">
                        <template #reference>
                            <img class="quit" src="./../assets/关闭1.svg" />
                        </template>
                    </el-popover>
                    <el-popover placement="bottom" title="" :width="50" trigger="hover" content="邀请新成员">
                        <template #reference>
                            <img class="quit" src="./../assets/添加.svg" @click="dialogInviteVisible = true" />

                        </template>
                    </el-popover>
                    <div class="clear"></div>
                </div>
                <el-dialog v-model="dialogInviteVisible" title="邀请新成员！" center>
                    <div class="qrcode">
                        <qrcode-vue :value="qrData.payUrl" :size="qrData.size" level="H" class="code" />
                    </div>
                    <p style="text-align:center; margin-top:20px ;">{{ qrData.payUrl }}</p>
                </el-dialog>
                <el-divider />
                <h1 class="classify">创建者</h1>
                <el-table :data="creatorData" stripe style="width: 100%">
                    <el-table-column prop="name" label="昵称" width="380" />
                    <el-table-column prop="email" label="电子邮箱" width="380" />
                    <el-table-column prop="realname" label="真实姓名" />
                </el-table>
                <h1 class="classify">管理员</h1>
                <el-table :data="adminData" stripe style="width: 100%">
                    <el-table-column prop="name" label="昵称" width="380" />
                    <el-table-column prop="email" label="电子邮箱" width="380" />
                    <el-table-column prop="realname" label="真实姓名" />
                    <el-table-column label="操作" width="200" v-if="this.Status === 'creator'">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="deladmin(scope.$index)">
                                移出
                            </el-button>
                            <el-button link type="primary" size="small" @click="changeIden(1, scope.$index)">
                                设为参与者
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <h1 class="classify">参与者</h1>
                <el-table :data="partiData" stripe style="width: 100%">
                    <el-table-column prop="name" label="昵称" width="380" />
                    <el-table-column prop="email" label="电子邮箱" width="380" />
                    <el-table-column prop="realname" label="真实姓名" />
                    <el-table-column label="操作" width="200" v-if="this.Status != 'parti'">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="delparti(scope.$index)">移出</el-button>
                            <el-button link type="primary" size="small" @click="changeIden(0, scope.$index)">
                                设为管理员
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="team2">Config</el-tab-pane>
            <el-tab-pane label="team3">Role</el-tab-pane>
            <el-tab-pane label="team4">Task</el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
import myTable from "./../components/teamTable.vue"
import QrcodeVue from 'qrcode.vue'
import { decode } from "punycode"
export default {
    mounted: function () {
        this.encode(0);
        this.decode();
    },
    /*
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        if (sessionStorage.getItem("token")) {
            next();
        } else {
            alert("请先登录");
            next("/login");
        }
    },*/
    components: {
        myTable, QrcodeVue
    },
    data() {
        return {
            creatorData: [
                {
                    email: 'zhehe532@gmail.com',
                    name: 'JKM',
                    realname: '贾晓霖',
                },
            ],
            adminData: [
                {
                    email: 'zhehe532@gmail.com',
                    name: '123',
                    realname: '贾晓霖',
                },
                {
                    email: 'zhehe532@gmail.com',
                    name: '123',
                    realname: '贾晓霖',
                },
            ],
            partiData: [
                {
                    email: 'zhehe532@gmail.com',
                    name: 'JKM',
                    realname: '贾晓霖',
                },
            ],
            dialogInviteVisible: false,
            qrData: {
                size: 200,
                payUrl: 'http://localhost:8080/teamManagement?'
            },
            Status: 'creator',
            teamId: 0,
            invited: '',
        }
    },
    methods: {
        encode(teamId) {
            let test = window.btoa("teamId=" + teamId);
            this.qrData.payUrl += test;
        },
        decode() {
            let test;
            test = window.location.search;
            test = test.substring(1);
            test = window.atob(test);
        },
        deladmin(index) {
            this.adminData.splice(index, 1);
        },
        delparti(index) {
            this.partiData.splice(index, 1);
        },
        addadmin(index) {
            this.adminData.push(this.partiData[index]);
        },
        addparti(index) {
            this.partiData.push(this.adminData[index]);
        },
        changeIden(num, index) {
            if (num == 0) {
                this.addadmin(index);
                this.delparti(index);
            }
            else {
                this.addparti(index);
                this.deladmin(index);
            }
        }
    }
}
</script>

<style scoped>
.quit {
    float: right;
    height: 30px;
    margin-top: 20px;
    margin-left: 5px;
}

.nameOfteam {
    float: left;
    font-size: 40px;
    font-family: "zheng";
    margin-top: 10px;
}

.team {
    float: left;
    height: 35px;
    margin-top: 20px;
    margin-right: 5px;
}

.el-main {
    background-color: aquamarine;
}

.clear {
    clear: both;
}

.teamTab {
    margin-left: -20px;
}

.classify {
    font-size: 20px;
    font-family: "zheng";
    color: #777777
}

.qrcode {
    position: relative;
    height: 200px;
}

.code {
    width: 50%;

    height: 50%;

    overflow: auto;

    margin: auto;

    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.headBox {}
</style>