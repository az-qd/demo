<template>
    <div class="ibms">
        <div style="color: white;margin-bottom: 5px;">设备号: {{ route.query.number ? route.query.number : "613881726418"
            }}</div>
        <div class="top">
            <div class="dc">
                <div class="dianchi">
                    <div class="donghua"><span>SOC:{{ ibms.soc }}%</span></div>
                </div>
                <div class="dianchitou"></div>
            </div>
            <div class="zhuangtai">
                <div>电池状态: <span style="color: #2ec7be;font-size: 18px;">闲置</span>
                </div>
                <div>SOE: <span style="color: #2ec7be;font-size: 18px;">{{ ibms.surCap }}Ah</span></div>
                <div>循环次数: <span style="color: #2ec7be;font-size: 18px;">{{ ibms.loopNum }}次</span></div>
            </div>
            <div style="display: flex;margin-top: -40px;">
                <div class="dyb" ref="dyb" style="width: 200px;height: 300px;"></div>
                <div class="dlb" ref="dlb" style="width: 200px;height: 300px;"></div>
                <div class="glb" ref="glb" style="width: 200px;height: 300px;"></div>
            </div>
        </div>
        <div class="center">
            <div class="left">
                <p>当前状态</p>
                <div class="zt">
                    <div><span>电池类型</span><span>铁锂</span></div>
                    <div><span>充电开关</span><span>开启</span></div>
                    <div><span>短路保护</span><span>正常</span></div>
                    <div><span>电池串数</span><span>16串</span></div>
                    <div><span>放电开关</span><span>开启</span></div>
                    <div><span>保护板温度</span><span>{{ ibms.mosTmp }}℃</span></div>
                    <div><span>标称容量</span><span>135Ah</span></div>
                    <div><span>充电电流</span><span>0A</span></div>
                    <div><span>电池温度</span><span>{{ ibms.ext1Tmp }}℃</span></div>
                    <div><span>额定电流</span><span>200A</span></div>
                    <div><span>放电电流</span><span>0A</span></div>
                    <div><span>均衡开关</span><span>开启</span></div>
                    <div><span>充电保护</span><span>正常</span></div>
                    <div><span>均衡状态</span><span>未均衡</span></div>
                    <div><span>放电保护</span><span>正常</span></div>
                    <div><span>均衡类型</span><span>自动</span></div>
                    <div><span>出厂日期</span><span>2024-05-22</span></div>
                    <div><span>到期日期</span><span>2025-06-21</span></div>
                    <div><span>厂商编码</span><span>{{ ibms.fcInfo }}</span></div>
                </div>
            </div>
            <div class="right">
                <p>电池参数</p>
                <div class="cs">
                    <div><span>单充电保护电压</span><span>{{ ibms?.config.sChPtVolt }}mV</span></div>
                    <div><span>单充电恢复电压</span><span>{{ ibms?.config.sChReVolt }}mV</span></div>
                    <div><span>单放电保护电压</span><span>{{ ibms?.config.sDchPtVolt }}mV</span></div>
                    <div><span>单放电恢复电压</span><span>{{ ibms?.config.sDchReVolt }}mV</span></div>
                    <div><span>总充电保护电压</span><span>{{ ibms?.config.chPtVolt }}V</span></div>
                    <div><span>总充电恢复电压</span><span>{{ ibms?.config.chReVolt }}V</span></div>
                    <div><span>总放电保护电压</span><span>{{ ibms?.config.dChPtVolt }}V</span></div>
                    <div><span>总放电恢复电压</span><span>{{ ibms?.config.dChReVolt }}V</span></div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <p>电池单串电压: &emsp;最高电压: <span>{{ maxdy }}</span> V &emsp;最低电压: <span>{{ mindy }}</span> V &emsp;最大压差:
                    <span>{{ (maxdy - mindy).toFixed(3) }}</span> V
                </p>
                <div class="dandianya">
                    <div v-for=" (item, index) in dcdylist" :key="index">
                        <div><span>#{{ index + 1 }}</span><span>{{ item }}v</span></div>
                    </div>
                </div>
            </div>
            <div class="right">
                <p>报警状态</p>
                <div class="zt">
                    <svg t="1721799480062" class="icon" viewBox="0 0 1265 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1915" width="48" height="48">
                        <path
                            d="M149.085091 961.967603c8.361256 0 13.942479 5.568529 13.942479 13.934017 0 8.361256-5.560066 13.955174-13.942479 13.955173H13.942479C5.581223 989.852562 0 984.267107 0 975.90162s5.560066-13.934017 13.942479-13.934017h135.142612z m1038.073653-105.95438c8.361256 0 13.921322 5.564298 13.921322 13.929785 0 8.365488-5.560066 13.950942-13.921322 13.950942h-235.498843v36.254678c0 39.043174-30.643835 69.708165-69.653157 69.708165h-41.806281c0 8.361256-4.180628 16.726744-9.740694 23.695868-13.942479 13.929785-34.84562 13.929785-48.771174 0l-22.299504-23.695868H218.772099c-8.378182 0-13.942479-5.589686-13.942479-13.955173s5.560066-13.934017 13.921322-13.934017h61.313058a71.701157 71.701157 0 0 1-13.942479-41.818975V223.075438c0-39.047405 30.664992-69.729322 69.670082-69.729322h44.586314v-36.212364c0-39.043174 30.664992-69.708165 69.674314-69.708165h547.590348c39.026248 0 69.670083 30.664992 69.670082 69.708165V814.206942c0 15.334612-5.560066 30.664992-13.921322 41.823207h133.763173v-0.021157z m-220.16 0h29.268628c23.683174 0 41.806281-18.127339 41.806281-41.823206V117.116826c0-23.717025-18.123107-41.840132-41.806281-41.840132H448.672793c-23.700099 0-41.806281 18.123107-41.806281 41.840132v36.22929H883.390413c39.026248 0 69.674314 30.681917 69.674314 69.708165v632.954711h13.94248z m-327.430347-34.858314c47.379041-47.383273 47.379041-124.107107 0-171.494611a120.133818 120.133818 0 0 0-85.013157-34.832926c-32.031736 0-62.709421 12.537653-84.996232 34.832926-47.383273 47.387504-47.383273 124.107107 0 171.498842a120.133818 120.133818 0 0 0 84.996232 34.832926c30.66076 0 61.308826-12.537653 85.008925-34.837157z m-146.321984-128.253884c2.792727 1.375207 4.197554 5.568529 2.792727 9.761851-9.75762 16.726744-11.137058 39.026248-4.176396 57.149355 1.396364 4.172165 0 6.969124-4.180628 9.761852h-2.780033a7.671537 7.671537 0 0 1-6.981819-4.189091c-8.361256-22.299504-6.960661-48.809256 4.180629-69.708166a10.832397 10.832397 0 0 1 11.162446-2.775801h-0.021157z m431.94605 227.247603V223.075438c0-23.717025-18.10195-41.840132-41.806281-41.840132H334.416397c-23.704331 0-41.806281 18.123107-41.806281 41.818975v697.07319c0 23.717025 18.10195 41.840132 41.806281 41.840132h397.104661l-39.026248-39.043173a35.129124 35.129124 0 0 1-8.340099-36.250447l-34.84562-36.23352a147.070942 147.070942 0 0 1-94.741157 34.832925c-40.422612 0-76.647669-15.309223-105.895141-43.198413-58.249521-57.745983-58.566876-151.691636-0.706644-209.83114l0.706644-0.706645c27.868033-27.868033 65.472529-43.202645 105.882447-43.202645 40.405686 0 76.647669 15.317686 105.89514 43.223802 54.348165 54.356628 57.149355 142.209058 9.761851 200.754777l36.246215 36.233521c12.524959-4.172165 26.463207-2.775802 36.203901 8.382413l86.396827 86.434909h54.331239c22.299504-1.396364 41.806281-19.523702 41.806281-43.215339zM420.792066 324.840727c-8.361256 0-13.921322-5.585455-13.921322-13.955173 0-8.365488 5.560066-13.934017 13.921322-13.934017h243.838942c8.361256 0 13.942479 5.57276 13.94248 13.934017 0 8.365488-5.560066 13.955174-13.94248 13.955173H420.792066z m324.675703 61.342678c8.335868 0 13.921322 5.568529 13.921322 13.934016s-5.564298 13.950942-13.942479 13.950943h-320.456992c-8.378182 0-13.942479-5.585455-13.94248-13.950943s5.560066-13.934017 13.921323-13.934016H745.463537z m-156.071141 89.231868c8.361256 0 13.921322 5.547372 13.921322 13.934016 0 8.361256-5.560066 13.934017-13.921322 13.934017H418.012033c-8.361256 0-13.921322-5.57276-13.921322-13.934017 0-8.365488 5.560066-13.934017 13.921322-13.934016h171.384595zM57.128198 168.697653c15.343074 0 27.868033 12.537653 27.868033 27.868033-0.033851 15.36-12.478413 27.813025-27.868033 27.884959-15.385388-0.071934-27.82995-12.524959-27.863801-27.884959 0.042314-15.351537 12.482645-27.791868 27.863801-27.868033z m0 83.642182c30.783471-0.135405 55.676826-25.049917 55.727604-55.769918-0.05924-30.72-24.952595-55.621818-55.727604-55.757223C26.361653 140.948099 1.464066 165.854149 1.400595 196.565686c0.050777 30.72 24.944132 55.638744 55.727603 55.774149z m1166.259835 23.695867c-8.365488 0-13.946711-5.568529-13.946711-13.934016s5.564298-13.934017 13.94248-13.934017c8.361256 0 13.921322 5.551603 13.921322 13.934017 0 8.365488-5.560066 13.934017-13.921322 13.934016z m0-55.757223c-23.687405 0-41.810512 18.127339-41.810512 41.823207 0 23.695868 18.123107 41.818975 41.806281 41.818975s41.806281-18.123107 41.806281-41.818975c0-23.695868-18.123107-41.823207-41.806281-41.823207zM204.808463 75.276694c0 8.365488 5.564298 13.955174 13.921322 13.955174 8.365488 0 13.946711-5.589686 13.946711-13.955174v-16.726744h16.722512c8.357025 0 13.921322-5.57276 13.921323-13.934016 0-8.365488-5.560066-13.955174-13.921323-13.955174h-16.722512V13.934017C232.680727 5.568529 227.11643 0 218.738248 0c-8.361256 0-13.921322 5.568529-13.921322 13.934017v16.726743H188.08595c-8.357025 0-13.938248 5.589686-13.938248 13.955174 0 8.361256 5.560066 13.934017 13.938248 13.934016h16.722513v16.726744z m920.410975 403.379835c7.616529 0 12.668826 5.069223 12.668826 12.685752v15.233058h15.190744a12.702678 12.702678 0 0 1 12.656132 12.698446l-0.016925 0.808198c-0.346975 7.163769-5.310413 11.881785-12.634975 11.881786h-15.194976v15.233057c0 7.629223-5.073455 12.685752-12.668826 12.685753-7.599603 0-12.651901-5.073455-12.651901-12.689984v-15.233058h-15.199206c-7.595372 0-12.668826-5.064992-12.668827-12.68152 0-7.616529 5.073455-12.706909 12.668827-12.70691h15.199206v-15.233057c0-7.612298 5.052298-12.681521 12.651901-12.681521zM140.723835 434.98843c8.378182 0 13.942479 5.593917 13.942479 13.955173v16.730976h16.722512c8.361256 0 13.921322 5.568529 13.921323 13.929785 0 8.386645-5.560066 13.938248-13.921323 13.938248h-16.722512v16.743669c0 8.365488-5.585455 13.934017-13.942479 13.934017-8.361256 0-13.921322-5.568529-13.921323-13.934017v-16.743669h-16.722512c-8.361256 0-13.942479-5.57276-13.942479-13.938248 0-8.361256 5.581223-13.929785 13.942479-13.929785h16.722512v-16.730976c0-8.361256 5.560066-13.950942 13.921323-13.950942z"
                            fill="#D5D7D7" p-id="1916"></path>
                    </svg>
                    <p class="no">暂无数据</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入echarts
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import imbs from "../../utils/ibms"
// 引入页面路由
import { useRoute } from 'vue-router'
// 获取路由
const route = useRoute()
// 获取仪表盘
const dyb = ref()
const dlb = ref()
const glb = ref()

const ibms = ref(route.query.number ? imbs.find(item => item.device_number == route.query.number) : imbs[0])
// 将字符串以 | 分割成数组
const arr = ibms.value.sVolt.split('|');
// 处理数组，给每个数字的 3 后添加小数点
const dcdylist = arr.map(num => {
    // 使用正则表达式在 '3' 后添加小数点
    return num.replace(/(3)(?=\d)/, '$1.');
});
// 去掉数组的最后一项
dcdylist.pop();

// 最高电压
const maxdy = ref(Math.max(...dcdylist))
// 最低电压
const mindy = ref(Math.min(...dcdylist))
const elementWidth = ref(ibms.value.soc)
onMounted(() => {
    const donghua = document.querySelector('.donghua')
    donghua.style.width = `${elementWidth.value}%`;
    // 电压仪表盘
    const myChart = echarts.init(dyb.value)
    myChart.setOption({
        series: [
            {
                type: 'gauge',
                center: ['50%', '60%'],
                // radius: '40%',
                min: 0,
                max: 65,
                // startAngle: 180,
                // endAngle: 0,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        color: [
                            [0.60, '#ef344b'],
                            [0.90, '#87d562'],
                            [1, '#ef344b'],
                        ],
                        width: 10,
                    },
                },
                splitLine: {
                    // 分隔线
                    show: true,
                    length: 15,
                    distance: 10,
                    lineStyle: {
                        width: 2,
                        color: 'inherit',
                    },
                },
                axisTick: {
                    // 刻度线样式（及短线样式）
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: '#2ec7c9',
                    },
                    length: 10,
                    distance: 10,
                },
                axisLabel: false,
                detail: {
                    fontSize: '30',
                    formatter: '{value}',
                    color: 'inherit',
                    offsetCenter: ['0', '0%'],
                },
                pointer: {
                    icon: 'triangle',
                    show: true,
                    offsetCenter: [0, '-50%'],
                    itemStyle: {
                        color: 'inherit',
                    },
                    length: '10%',
                    width: '7%',
                },
                title: {
                    fontSize: 2,
                },
                data: [
                    {
                        value: ibms.value.volt,
                        name: '电压(V)',
                        title: {
                            color: 'white',
                            offsetCenter: [0, '30%'],
                            fontSize: 12,
                        },
                    },
                ],
            },
        ]
    })
    // 电流表
    const myCharttwo = echarts.init(dlb.value)
    myCharttwo.setOption({
        series: [
            {
                type: 'gauge',
                center: ['50%', '60%'],
                // radius: '40%',
                min: 0,
                max: 65,
                // startAngle: 180,
                // endAngle: 0,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        color: [
                            [0.60, '#ef344b'],
                            [0.90, '#87d562'],
                            [1, '#ef344b'],
                        ],
                        width: 10,
                    },
                },
                splitLine: {
                    // 分隔线
                    show: true,
                    length: 15,
                    distance: 10,
                    lineStyle: {
                        width: 2,
                        color: 'inherit',
                    },
                },
                axisTick: {
                    // 刻度线样式（及短线样式）
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: '#2ec7c9',
                    },
                    length: 10,
                    distance: 10,
                },
                axisLabel: false,
                detail: {
                    fontSize: '30',
                    formatter: '{value}',
                    color: 'inherit',
                    offsetCenter: ['0', '0%'],
                },
                pointer: {
                    icon: 'triangle',
                    show: true,
                    offsetCenter: [0, '-50%'],
                    itemStyle: {
                        color: 'inherit',
                    },
                    length: '10%',
                    width: '7%',
                },
                title: {
                    fontSize: 2,
                },
                data: [
                    {
                        value: 0,
                        name: '电流(A)',
                        title: {
                            color: 'white',
                            offsetCenter: [0, '30%'],
                            fontSize: 12,
                        },
                    },
                ],
            },
        ]
    })
    // 功率表
    const myChartthree = echarts.init(glb.value)
    myChartthree.setOption({
        series: [
            {
                type: 'gauge',
                center: ['50%', '60%'],
                // radius: '40%',
                min: 0,
                max: 65,
                // startAngle: 180,
                // endAngle: 0,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        color: [
                            [0.60, '#ef344b'],
                            [0.90, '#87d562'],
                            [1, '#ef344b'],
                        ],
                        width: 10,
                    },
                },
                splitLine: {
                    // 分隔线
                    show: true,
                    length: 15,
                    distance: 10,
                    lineStyle: {
                        width: 2,
                        color: 'inherit',
                    },
                },
                axisTick: {
                    // 刻度线样式（及短线样式）
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: '#2ec7c9',
                    },
                    length: 10,
                    distance: 10,
                },
                axisLabel: false,
                detail: {
                    fontSize: '30',
                    formatter: '{value}',
                    color: 'inherit',
                    offsetCenter: ['0', '0%'],
                },
                pointer: {
                    icon: 'triangle',
                    show: true,
                    offsetCenter: [0, '-50%'],
                    itemStyle: {
                        color: 'inherit',
                    },
                    length: '10%',
                    width: '7%',
                },
                title: {
                    fontSize: 2,
                },
                data: [
                    {
                        value: ibms.value.ext1Tmp,
                        name: '温度(℃)',
                        title: {
                            color: 'white',
                            offsetCenter: [0, '30%'],
                            fontSize: 12,
                        },
                    },
                ],
            },
        ]
    })
})
</script>

<style scoped lang="scss">
.ibms {
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    .top {
        width: 95vw;
        height: 20%;
        background-color: #1c1c1c;
        border-radius: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .dc {
            display: flex;
            align-items: center;
            margin-right: 120px;

            .dianchi {
                width: 180px;
                height: 90px;
                border-radius: 10px;
                border: 3px solid #2ec7c9;
                display: flex;
                // justify-content: center;
                align-items: center;
                padding: 5px;
                position: relative;

                div {
                    height: 100%;
                    background-color: #4aacad;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: donghua 1s;

                    @keyframes donghua {
                        0% {
                            width: 0%;
                        }

                        100% {
                            width: 100%;
                        }
                    }

                    span {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 24px;
                        color: white;
                    }
                }


            }

            .dianchitou {
                width: 15px;
                border: 3px solid #2ec7c9;
                height: 40px;
                border-radius: 0px 10px 10px 0px;
                transform: translateX(-2px);
            }
        }

        .zhuangtai {
            width: 130px;
            height: 90px;
            color: white;
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 100px;
        }
    }

    .center {
        width: 95vw;
        height: 37%;
        border-radius: 10px;
        margin-bottom: 30px;
        display: flex;

        .left {
            width: 60%;
            height: 100%;
            background-color: #1c1c1c;
            border-radius: 10px;
            margin-right: 10px;
            padding: 10px;

            p {
                color: white;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .zt {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                div {
                    width: 300px;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 10px;
                    align-items: center;
                    background-color: #2d2d2d;
                    border-radius: 7px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    height: 30px;

                    span {
                        color: white;
                    }

                    span:nth-child(2) {
                        color: #2ec7c9;
                    }
                }

            }
        }

        .right {
            width: 40%;
            height: 100%;
            background-color: #1c1c1c;
            border-radius: 10px;
            padding: 10px;

            p {
                color: white;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .cs {
                display: flex;
                flex-direction: column;
                align-items: center;

                div {
                    width: 600px;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 10px;
                    align-items: center;
                    background-color: #2d2d2d;
                    border-radius: 7px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    height: 30px;

                    span {
                        color: white;
                    }

                    span:nth-child(2) {
                        color: #2ec7c9;
                    }
                }
            }

        }
    }

    .bottom {
        width: 95vw;
        height: 20%;
        border-radius: 10px;
        display: flex;

        .left {
            width: 60%;
            height: 100%;
            background-color: #1c1c1c;
            border-radius: 10px;
            margin-right: 10px;
            padding: 10px;

            p {
                color: white;
                font-weight: bold;
                margin-bottom: 10px;

                span {
                    color: #18c94d;
                }
            }

            .dandianya {
                width: 70%;
                height: 75%;
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;

                div {
                    width: 90px;
                    height: 33px;
                    border: 2px solid #18c94d;
                    margin-right: 20px;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    margin: 0 auto;

                    div {
                        width: 85px;
                        height: 25px;
                        margin: 3px;
                        background-color: #18c94d;
                        display: flex;
                        justify-content: space-between;

                        span {
                            color: white;
                        }

                        span:nth-child(1) {
                            font-size: 12px;
                        }

                    }
                }
            }
        }

        .right {
            width: 40%;
            height: 100%;
            border-radius: 10px;
            background-color: #1c1c1c;
            padding: 10px;

            p {
                color: white;
                font-weight: bold;
            }

            .zt {
                display: flex;
                flex-direction: column;
                align-items: center;

                svg {
                    margin: 30px 0;
                }
            }
        }
    }
}
</style>