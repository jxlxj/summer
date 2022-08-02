<template>
    <div class="logo">
        <h1>墨书</h1>
    </div>
    <el-menu class="menu" default-active="1" background-color="#ffffff" text-color="#606266" active-text-color="#2F74FF"
        router>
        <el-menu-item index="1"><img src="../assets/文件夹.svg" class="pic">
            <span class="text">设计原型</span>
        </el-menu-item>
        <el-menu-item index="2"><img src="../assets/订单.svg" class="pic"><span class="text">文档</span>
        </el-menu-item>
        <el-menu-item index="about"><img src="../assets/相册.svg" class="pic"><span class="text">图绘制</span></el-menu-item>
        <el-menu-item index="3"><img src="../assets/我的.svg" class="pic"><span class="text">团队管理</span></el-menu-item>
    </el-menu>
    <div class="avatar">
        <el-popover placement="right" title="" :width="200" trigger="hover">
            <template #reference>
                <el-avatar :src="this.imageUrl" class="avaPic"></el-avatar>
            </template>
            <template #default>
                <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
                    <el-avatar :size="60" :src="this.imageUrl" style="margin-bottom: 8px" />
                    <div>
                        <p class="demo-rich-content__name" style="margin: 0; font-weight: 500">
                            {{ this.name }}
                        </p>
                        <p class="demo-rich-content__mention"
                            style="margin: 0; font-size: 14px; color: var(--el-color-info)">
                            {{ this.email }}
                        </p>
                    </div>

                    <p class="demo-rich-content__desc" style="margin: 0">
                        我是傻逼
                    </p>
                    <el-button type="danger" round size="small">退出登录</el-button>
                </div>
            </template>
        </el-popover>
    </div>
</template>
<script>
export default {

    data() {
        return {
            name: "JKM",
            imageUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            email: "zhehe532@gmail.com"
        };
    }
}
</script>
<style>
.logo {
    height: 80px;

    width: 150px;

}

.logo h1 {
    font-family: "xie";
    text-align: center;
    line-height: 80px;
    font-size: 35px;
    cursor: default
}

.pic {
    height: 30px;
    margin-bottom: 3px;
}

.text {
    margin-left: 5px;
}

.menu {
    width: 150px;
    min-height: calc(100vh - 160px);
    font-family: "zheng";

}

.avatar {
    height: 80px;
    text-align: center;
    width: 150px;
}

.avatar .avaPic {
    height: 45px;
    width: auto;
    box-shadow: 0 0 5px #000;
    margin-top: 5px;
}
</style>