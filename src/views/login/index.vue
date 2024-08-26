<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <span class="bigtitle">智慧农业可视化平台</span>
        <!-- 登录的表单 -->
        <el-form class="login_form" label-width="50">
            <h1>系统登录</h1>
            <el-form-item label="账号:">
                <el-input style="width: 270px;" placeholder="请输入账号" :prefix-icon="User" v-model="user"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input style="width: 270px;" placeholder="请输入密码" type="password" :prefix-icon="Lock" v-model="pass"
                    show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-form-item>
                    <Vcode :show="isShow" @success="onSuccess" @close="onClose" />
                </el-form-item>
            </el-form-item>
            <div style="display: flex;">
                <el-button class=" login_btn" type="primary" size="default" @click="reset">重置</el-button>
                <el-button class="login_btn" type="success" size="default" @click="login">登录</el-button>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
// 引入路由器
import { useRouter } from "vue-router";
// 引入element-plus组件
import { ElInput, ElButton, ElMessage, ElNotification } from "element-plus";
import { Lock, User } from '@element-plus/icons-vue'
import { ref } from "vue";
// 引入验证码
import Vcode from "vue3-puzzle-vcode";
import { getTime } from "@/utils/time";
// 获取路由器
const router = useRouter();
// 获取账号密码
const user = ref<any>("admin");
const pass = ref<any>("111111");
// 重置密码
const reset = () => {
    user.value = "";
    pass.value = "";
};
// 控制验证码组件的显隐
const isShow = ref(false);
// 关闭验证框
const onClose = () => {
    isShow.value = false;
};
// 登录鉴权
const islogin = ref<any>(false);
// 验证成功的回调
const onSuccess = () => {
    onClose(); // 验证成功，手动关闭模态框
    if (user.value === "admin" && pass.value === "111111") {
        // 将用户名存储到sessionStorage中
        sessionStorage.setItem('username', user.value)
        // 将登录状态设置为true
        islogin.value = true;
        // 将登录状态存储到sessionStorage中
        sessionStorage.setItem('islogin', islogin.value)
        ElNotification({
            type: 'success',
            message: `欢迎回来${sessionStorage.getItem('username')}`,
            title: `HI,${getTime()}好`,
        });
        router.replace('/home')
    } else {
        ElMessage.error('账号或密码错误')
    }
}

// 登录按钮
const login = async () => {
    isShow.value = true;
};

</script>


<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/back.svg");
    background-repeat: no-repeat;
    background-size: cover;


    .bigtitle {
        text-shadow: 4px 4px 0px #409eff85, 7px 7px 0px rgba(0, 0, 0, 0.2);
        color: #9cf075;
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 50px;
    }

    .login_form {
        width: 360px;
        height: 260px;
        background-size: cover;
        padding: 40px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #e9e2e2;

        h1 {
            color: #63e763;
            font-size: 31px;
            font-weight: bold;
            margin-bottom: 50px;
            text-align: center;
        }

        .login_btn {
            width: 150px;
            height: 35px;
        }
    }
}

@keyframes scale-up {
    from {
        transform: scale(1.3);
    }

    to {
        transform: scale(1);
    }
}
</style>
