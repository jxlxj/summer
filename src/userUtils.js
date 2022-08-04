import api from "@/axiosConfig";
export default{
    name: "user",
    methods:
    {
        async updateInfo() {
            let succ = false;
            //alert("post");
            await api.post(
                "/api/getUserInfo",
                {
                    id: null,
                }
            )
                .then(async (res) => {
                    /* res 是 response 的缩写 */
                    //alert("postok");
                    succ = true;
                    console.log(res.data.data);
                    // 登陆成功，更新token、用户名、密码
                    const resdata = res.data.data;
                    if (res.data.errno === 0) {
                        await sessionStorage.setItem("userName", resdata.name);
                        await sessionStorage.setItem("userAvatar", "http://localhost:8095" + resdata.avatar);
                        await sessionStorage.setItem("email", resdata.email);
                        await sessionStorage.setItem("identity", resdata.identity);
                        await sessionStorage.setItem("gender", resdata.gender);
                        await sessionStorage.setItem("organization", resdata.organization);
                        await sessionStorage.setItem("position", resdata.position);
                        await sessionStorage.setItem("birthday", resdata.birthday);
                        await sessionStorage.setItem("createTime", resdata.createTime);
                        await sessionStorage.setItem("intro", resdata.intro);
                        await sessionStorage.setItem("followingsNum", resdata.followingsNum);
                        await sessionStorage.setItem("followersNum", resdata.followersNum);
                    }
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
            return succ;
        }
    }
}