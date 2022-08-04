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
                <myTable :Data="creatorData" Status="" />
                <h1 class="classify">管理员</h1>
                <myTable :Data="creatorData" :Status="Status" myClass="admin" />
                <h1 class="classify">参与者</h1>
                <myTable :Data="creatorData" :Status="Status" myClass="parti" />
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
export default {
    mounted: function () {
        this.testatob();
    },
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
            dialogInviteVisible: false,
            qrData: {
                size: 200,
                payUrl: 'http://localhost:8080/teamManagement'
            },
            Status: 'admin',
        }
    },
    methods: {
        testatob() {
            let test = window.btoa("123");
            alert(test);
            test = window.atob(test);
            alert(test)
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