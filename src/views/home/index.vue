<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="header">
            <div class="left">
                <div class="status-title">智慧农业大数据平台</div>
                <img style="width: 60px;height: 60px;"
                    src="https://bms.mtxnyjs.com/front/clocation/static/img/earth.c8167e5.gif">
                <span id="tit">无人车作业</span>
                <div class="status">
                    <el-tooltip class="box-item" effect="dark" content="刷新网页" placement="bottom">
                        <el-icon style="color: white;font-size: 25px;cursor: pointer;margin-right: 20px;"
                            @click="refresh">
                            <Refresh />
                        </el-icon>
                    </el-tooltip>
                    <el-tooltip class="box-item" effect="dark" content="全屏" placement="bottom">
                        <el-icon style="color: white;font-size: 25px;cursor: pointer;" @click="screen">
                            <FullScreen />
                        </el-icon>
                    </el-tooltip>
                </div>
                <el-dropdown class="dropdown">
                    <div class="el-dropdown-link">
                        {{ username }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="header-bottom">
            <ul class="ullist">
                <router-link to="/index">
                    <li :class="route.path === '/index' ? 'active' : ''">首页</li>
                </router-link>
                <router-link to="/devicemanage">
                    <li :class="route.path === '/devicemanage' ? 'active' : ''">设备管理</li>
                </router-link>
                <router-link to="/position">
                    <li :class="route.path === '/position' ? 'active' : ''">定位监控</li>
                </router-link>
                <router-link to="/ibms">
                    <li :class="route.path === '/ibms' ? 'active' : ''">IBMS</li>
                </router-link>
                <router-link to="/statistics">
                    <li :class="route.path === '/statistics' ? 'active' : ''">统计分析</li>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>

    <!-- <div class="bjlist" draggable="true">
        <div class="top">
            报警列表<svg t="1723711641542" style="margin-left: 35px;cursor: pointer;" viewBox="0 0 1066 1024" version="1.1"
                @click="bjlist" xmlns="http://www.w3.org/2000/svg" p-id="4549" width="10" height="10">
                <path
                    d="M0 985.173333c0 27.733333 23.893333 38.826667 50.773333 38.826667h398.506667a42.666667 42.666667 0 0 0 42.666667-42.666667 45.226667 45.226667 0 0 0-42.666667-45.653333H139.52l341.333333-318.72a36.693333 36.693333 0 0 0 0-53.333333 40.106667 40.106667 0 0 0-55.466666 0l-336.64 330.24v-302.933334a42.666667 42.666667 0 0 0-46.08-38.4 42.666667 42.666667 0 0 0-42.666667 39.253334z m617.386667-896h310.186666l-341.333333 319.146667a37.12 37.12 0 0 0 0 53.76 40.106667 40.106667 0 0 0 55.466667 0l336.213333-331.52v302.933333a42.666667 42.666667 0 0 0 42.666667 39.68 42.666667 42.666667 0 0 0 42.666666-39.68V40.533333H1066.666667a36.266667 36.266667 0 0 0-11.52-27.733333 37.546667 37.546667 0 0 0-37.546667-10.24h-399.36a42.666667 42.666667 0 0 0-42.666667 42.666667 42.666667 42.666667 0 0 0 40.106667 45.653333z m0 0"
                    fill="#ffffff" p-id="4550"></path>
            </svg>
        </div>
        <div class="bottom" ref="bjdialog">
            <el-table :data="bjlb" border stripe
                :header-cell-style="{ backgroundColor: '#14585a', color: '#ffffff', fontSize: '14px' }">
                <el-table-column label="序号" type="index" width="180" align="center" />
                <el-table-column prop="device_number" label="设备号码" width="180" align="center" />
                <el-table-column prop="title" label="报警类型" width="180" align="center" />
                <el-table-column prop="count" label="报警次数" width="180" align="center" />
                <el-table-column prop="updatetime" label="最新报警时间" width="180" align="center" />
            </el-table>

        </div>
    </div> -->
</template>

<script setup lang="ts">
import { ArrowDown, FullScreen, Refresh } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
// 引入路由
import { useRoute } from 'vue-router'
const route = useRoute()
const username = sessionStorage.getItem('username');
const router = useRouter()
// 退出登录
const logout = async () => {
    sessionStorage.removeItem('islogin')
    router.push('/')
}
// 刷新网页
const refresh = () => {
    location.reload()
}

// 全屏
const screen = () => {
    //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
    let full = document.fullscreenElement;
    //切换为全屏模式
    if (!full) {
        //文档根节点的方法requestFullscreen,实现全屏模式
        document.documentElement.requestFullscreen();
    } else {
        //变为不是全屏模式->退出全屏模式
        document.exitFullscreen();
    }
}
// 报警
const bjdialog = ref(null)
// 报警列表
const bjlist = () => {
    if (bjdialog.value.style.display == 'none') {
        bjdialog.value.style.display = 'block'
    } else {
        bjdialog.value.style.display = 'none'
    }
}
// 报警列表
const bjlb = ref(
    [
        {
            "id": "3779898_202408",
            "type": "24",
            "device_id": "730979",
            "number": "BJ202408150715125816876984",
            "status": "0",
            "createtime": "2024-08-15 07:15:12",
            "content": "",
            "count": "2",
            "updatetime": "2024-08-15 07:20:29",
            "device_number": "613881581687",
            "company_id": "9814",
            "opera_name": "大车行锂电",
            "model_name": "BM576",
            "ttId": "empty",
            "batType": "1",
            "batNum": "8",
            "standCur": "200",
            "title": "充电过流保护"
        }
    ]
)

</script>


<style scoped lang="scss">
.header {
    width: 100%;
    height: 60px;
    background-color: #1c1c1c;

    .left {
        width: 520px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .status-title {
            width: 280px;
            font-size: 30px;
            //文字倾斜
            font-style: italic;
            font-weight: 700;
            color: white;
            margin-left: 20px;
        }

        #tit {
            font-size: 24px;
            color: white;
            border-left: 2px solid #D5D7D7;
            border-color: #20a6c4;
            padding-left: 20px;
        }

        .status {
            position: absolute;
            right: 100px;
            margin-top: 5px;
        }

        .dropdown {
            width: 100px;
            position: absolute;
            right: -30px;
            color: white;
        }
    }

}

.header-bottom {
    width: 100%;
    height: 40px;
    background-color: #1c1c1c;

    .ullist li {
        width: 100px;
        height: 38px;
        float: left;
        color: white;
        font-size: 18px;
        font-weight: 700;
        margin: 0 10px;
        text-align: center;
        list-style: none;
    }

    .ullist li:hover {
        color: #2ec7c9;
        border-bottom: 2px solid #2ec7c9;
    }

    .active {
        color: #2ec7c9 !important;
        border-bottom: 2px solid #2ec7c9;
    }
}

// .main {
//     width: 100vw;
//     height: 100vh;
//     background-color: #000000;


//     .container {
//         display: flex;
//         height: 100vh;
//         margin-top: -120px;

//         .left {
//             flex: 1;
//             padding: 10px;
//             display: flex;
//             flex-direction: column;

//             .top {
//                 height: 450px;
//                 background-color: #1c1c1c;
//                 margin-bottom: 15px;
//                 border-radius: 15px;
//                 margin-top: 200px;
//             }

//             .bottom {
//                 border-radius: 15px;
//                 height: 450px;
//                 background-color: #1c1c1c;
//             }
//         }

//         .center {
//             flex: 3;
//             // padding: 20px;

//             .Map {
//                 width: 100%;
//                 height: 80%;
//                 background-color: #1c1c1c;
//                 margin-top: 187px;
//                 border-radius: 20px;
//             }
//         }

//         .right {
//             flex: 1;
//             // background-color: #d0d0d0;
//             padding: 20px;

//             .top {
//                 height: 240px;
//                 background-color: #1c1c1c;
//                 margin-bottom: 10px;
//                 border-radius: 15px;
//                 margin-top: 185px;

//                 .title {
//                     color: white;
//                     font-size: 20px;
//                     margin-top: 5px;
//                     width: 100%;
//                     text-align: center;
//                 }

//                 .big {
//                     display: flex;
//                     justify-content: space-around;
//                     margin-top: 20px;

//                     div {
//                         display: flex;
//                         flex-direction: column;
//                         text-align: center;

//                         span:nth-child(1) {
//                             margin-top: 10px;
//                             color: #ffffff;
//                         }

//                         span:nth-child(2) {
//                             margin-top: 10px;
//                             color: #20a6c4;
//                             font-size: 22px;
//                         }
//                     }
//                 }

//                 .small {
//                     display: flex;
//                     justify-content: space-around;
//                     margin-top: 20px;

//                     div {
//                         display: flex;
//                         flex-direction: column;
//                         text-align: center;
//                         justify-content: center;

//                         span:nth-child(1) {
//                             margin-top: 10px;
//                             color: #ffffff;
//                         }

//                         span:nth-child(2) {
//                             margin-top: 10px;
//                             color: #20a6c4;
//                             font-size: 22px;
//                         }
//                     }
//                 }
//             }

//             .middle {
//                 border-radius: 15px;
//                 height: 240px;
//                 background-color: #1c1c1c;
//                 margin-bottom: 10px;
//             }

//             .bottom {
//                 border-radius: 15px;
//                 height: 240px;
//                 background-color: #1c1c1c;
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;

//                 .title {
//                     color: white;
//                     font-size: 20px;
//                     padding-top: 5px;
//                 }

//                 .icon {
//                     margin-top: 70px;
//                 }

//                 .no {
//                     color: white;
//                     margin-top: 10px;
//                 }
//             }
//         }
//     }
// }

.bjlist {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: end;

    .top {
        width: 100px;
        height: 20px;
        border-radius: 2px;
        border: 2px solid white;
        background-color: #2ec7c9;
        color: white;
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        padding-left: 5px;
    }

    .bottom {
        width: 900px;
        height: 168px;
        background-color: #ffffff;
        display: none;
        border-radius: 5px;
        padding: 20px;
        background-color: #888383;

        ::v-deep(.el-table__inner-wrapper) {
            color: #49e0e2 !important;
        }

        ::v-deep(.el-table__row) {
            background-color: #5f6666 !important;
        }

    }
}
</style>