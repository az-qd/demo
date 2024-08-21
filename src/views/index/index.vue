<template>
    <div class="main">
        <div class="left">
            <div class="top">
                <pie></pie>
            </div>
            <div class="bottom">
                <work></work>
            </div>
        </div>
        <div class="center">
            <div style="width: 1120px;height: 700px;padding: 20px;display: flex;justify-content: center;align-items: center"
                id="map"></div>
        </div>
        <div class="right">
            <div class="top">
                <p class="title">设备概况</p>
                <div class="big">
                    <div>
                        <span>设备总数:</span>
                        <span>10个</span>
                    </div>
                    <div>
                        <span>离线>7天:</span>
                        <span>0个</span>
                    </div>
                </div>

                <div class="small">
                    <div>
                        <span>未处理报警:</span>
                        <span>0个</span>
                    </div>
                    <div>
                        <span>今日报警:</span>
                        <span>0个</span>
                    </div>
                </div>
            </div>
            <div class="middle">
                <bar></bar>
            </div>
            <div class="bottom">
                <p class="title">系统信息</p>
                <img src="../../assets/暂无数据.svg" class="icon">
                <p class="no">暂无数据</p>
            </div>
        </div>
    </div>

    <!-- 各个省份的dialog -->
    <el-dialog v-model="dialogTableVisible" title="设备占比" width="800" align-center
        style="border-radius: 10px;background-color: #f3fdfd;">
        <el-table :data="outdata" style="border-radius: 10px;"
            :header-cell-style="{ backgroundColor: '#2bbfc1', color: '#ffffff', fontSize: '14px', textAlign: 'center' }">
            <el-table-column label="序号" type="index" width="100" align="center" />
            <el-table-column prop="name" label="地区" align="center" />
            <el-table-column prop="value" label="设备数量(个)" align="center" />
            <el-table-column prop="proportion" label="占比" align="center" />
        </el-table>
    </el-dialog>
</template>

<script setup lang="ts">
import pie from '../../components/pie.vue'
import bar from '../../components/bar.vue'
import work from "../../components/work.vue"
import * as echarts from 'echarts';
import china from "../../utils/china.json"
import { onMounted, ref } from 'vue';
// 引入路由器
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus';
// 引入路由器
const router = useRouter()
// 控制dialog的显隐
const dialogTableVisible = ref(false)
const allnumber = ref(0)
const outdata = ref()
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.querySelector("#map"));
    echarts.registerMap('china', china);
    // 绘制图表
    let outname = [
        "南海诸岛",
        "北京",
        "天津",
        "上海",
        "重庆",
        "河北",
        "河南",
        "云南",
        "辽宁",
        "黑龙江",
        "湖南",
        "安徽",
        "山东",
        "新疆",
        "江苏",
        "浙江",
        "江西",
        "湖北",
        "广西",
        "甘肃",
        "山西",
        "内蒙古",
        "陕西",
        "吉林",
        "福建",
        "贵州",
        "广东",
        "青海",
        "西藏",
        "四川",
        "宁夏",
        "海南",
        "台湾",
        "香港",
        "澳门",
    ];
    let outvalue = [
        // 80, 524, 113, 140, 75, 600, 83, 11, 19, 15, 69, 260, 39, 94, 31, 104, 36,
        // 105, 33, 34, 9, 157, 22, 4, 18, 5, 398, 41, 210, 48, 40, 22, 43, 25,
        // 225,
        0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
    ];
    let value = [
        {
            name: "南海诸岛",
            value: 0
        },
        {
            name: "台湾",
            value: 0
        },
        {
            name: "香港",
            value: 0
        },
        {
            name: "澳门",
            value: 0
        },];
    outdata.value = outname.map((item, index) => {
        return {
            name: item,
            value: outvalue[index],
            proportion: (outvalue[index] / allnumber.value) * 100 + "%"
        }
    })

    allnumber.value = outvalue.reduce((prve, item) => {
        return prve + item
    }, 0)
    let maxValue = Math.max(...(outdata.value.map((item: any) => { return item.value })));
    myChart.setOption({
        title: {
            text: "设备分布",
            textStyle: {
                color: "#fff",
                fontSize: 23,
            },
            left: "center"
        },
        tooltip: {
            show: true,
            formatter: function (params: any) {
                return (
                    "&nbsp;&nbsp;" +
                    params.name +
                    "&nbsp;&nbsp;&nbsp;" +
                    params.value
                );
            },
        },

        visualMap: {
            type: "continuous",
            text: ["设备分布情况"],
            textStyle: {
                color: "#fff",
            },
            showLabel: true,
            left: "130",
            bottom: "30",
            min: 0,
            max: maxValue,
            itemWidth: 15, //图形的宽度，即长条的宽度
            itemHeight: 80, //图形的高度，即长条的高度。
            seriesIndex: [0],
            inRange: {
                color: ["#cedbfc", "#adc4fd", "#8dadfe", "#6c95fe", "#4b7eff"],
            },

            outOfRange: {
                color: ["#999999"],
            },
            splitNumber: 0,
        },
        geo: {
            map: "china",
            show: true,
            aspectScale: 0.75,
            zoom: 1,
            roam: false,
            label: {
                emphasis: {
                    show: false,
                },
            },
        },
        series: [
            {
                type: "map",
                map: "china",
                // roam: true,
                // aspectScale: 0.75,
                // zoom: 1,
                label: {
                    show: true,
                    color: "#1f1f1f",
                    fontWeight: 600,
                    emphasis: {
                        show: true,
                        areaColor: "red"
                    },
                },
                // itemStyle: {
                //     normal: {
                //         borderColor: "#20a6c4",
                //         borderWidth: 2,
                //     },
                //     emphasis: {
                //         areaColor: "#d2b206",
                //     },
                // },
                emphasis: {
                    itemStyle: {
                        areaColor: null,
                        borderWidth: 2,
                        shadowColor: "rgba(0,0,0,.2)",
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                    },
                },
                animation: false,
                data: outdata.value,
            },
        ],
    })
    myChart.on("click", function (params: any) {
        // ElMessage({
        //     message: `所选省份:${params.data.name}----设备数量:${params.data.value}辆`,
        //     type: 'success',
        // })
        dialogTableVisible.value = true
        outdata.value = outname.map((item, index) => {
            return {
                name: item,
                value: outvalue[index],
                proportion: (outvalue[index] / allnumber.value) * 100 + "%"
            }
        })
        outdata.value = outdata.value.filter((item: any) => item.name == params.data.name)

    });
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})
</script>

<style scoped lang="scss">
.main {
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;

    .left {
        flex: 1;
        height: 85vh;
        border-radius: 20px;
        margin: 20px 20px 20px 20px;
        display: flex;
        flex-direction: column;

        .top {
            flex: 1;
            background-color: #1c1c1c;
            margin-bottom: 15px;
            border-radius: 15px;
        }

        .bottom {
            flex: 1;
            background-color: #1c1c1c;
            border-radius: 15px;
        }
    }

    .center {
        flex: 1;
        height: 85vh;
        background-color: #1c1c1c;
        border-radius: 20px;
        margin: 20px 20px 20px 0px;
    }

    .right {
        flex: 1;
        height: 85vh;
        margin: 20px 20px 20px 0px;
        display: flex;
        flex-direction: column;

        .top {
            flex: 1;
            border-radius: 15px;
            background-color: #1c1c1c;

            .title {
                color: white;
                font-size: 20px;
                margin-top: 5px;
                width: 100%;
                text-align: center;
            }

            .big {
                display: flex;
                justify-content: space-around;
                margin-top: 20px;

                div {
                    display: flex;
                    flex-direction: column;
                    text-align: center;

                    span:nth-child(1) {
                        margin-top: 10px;
                        color: #ffffff;
                    }

                    span:nth-child(2) {
                        margin-top: 10px;
                        color: #20a6c4;
                        font-size: 22px;
                    }
                }
            }

            .small {
                display: flex;
                justify-content: space-around;
                margin-top: 20px;

                div {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;

                    span:nth-child(1) {
                        margin-top: 10px;
                        color: #ffffff;
                    }

                    span:nth-child(2) {
                        margin-top: 10px;
                        color: #20a6c4;
                        font-size: 22px;
                    }
                }
            }
        }

        .middle {
            flex: 1;
            background-color: #1c1c1c;
            border-radius: 15px;
            margin: 15px 0px;
            overflow: hidden;

            #bar {
                width: 100%;
                height: 100%;
            }
        }

        .bottom {
            flex: 1;
            border-radius: 15px;
            background-color: #1c1c1c;
            display: flex;
            flex-direction: column;
            align-items: center;

            .title {
                color: white;
                font-size: 20px;
                padding-top: 15px;
            }

            .icon {
                margin: 50px 0 30px 0;
            }

            .no {
                color: white;
                margin-top: 10px;
            }
        }
    }
}

::v-deep(.el-table__row) {
    background-color: #5f6666 !important;
    color: #31c1c4;
}
</style>