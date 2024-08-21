<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="work"></div>
    <div id="worktwo"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
// 生成50-100的随机数
function randomNum(minNum: any, maxNum: any) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

let number = 50;

function increaseNumber() {
    number += 10;
    console.log(number);
}

// 每小时（3600000毫秒）调用一次 increaseNumber 函数
setInterval(increaseNumber, 3600000);
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('work'));
    var myCharttwo = echarts.init(document.getElementById('worktwo'));
    myChart.setOption({
        backgroundColor: '#1c1c1c',
        title: {
            text: '设备工作统计',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
        },               //详情提示
        legend: {
            show: false
        },
        grid: {
            top: 80,
            left: 100
        },
        xAxis: {//配置x轴，x轴和y轴互换
            type: "value",       //值轴
            show: false,
        },
        yAxis: {//配置y轴
            type: "category",   //类目轴
            data: ['总工作时长'],
            // show: false,
        },
        series: [//配置数据系列，一个图表可以配置多个数据系列
            {
                name: "",
                type: "bar",//数据系统的类型，即图表的类型。bar代表柱状状图
                itemStyle: {
                    color: '#2db0b3',
                    borderRadius: [50, 50, 50, 50]
                },
                data: [randomNum(50, 100)],
                barWidth: 20,
                label: {
                    show: true, // 显示文字
                    position: 'top', // 文字位置
                    color: "#2dc1c3",
                    formatter: '{c} 小时' // 文字显示内容，这里c代表data数据中的value
                }
            }
        ]
    })
    myCharttwo.setOption({
        backgroundColor: '#1c1c1c',
        tooltip: {},               //详情提示
        legend: {
            show: false
        },
        grid: {
            top: 80,
            left: 100
        },
        xAxis: {//配置x轴，x轴和y轴互换
            type: "value",       //值轴
            show: false,
        },
        yAxis: {//配置y轴
            type: "category",   //类目轴
            data: ["总工作公里数"]
            // show: false,
        },
        series: [//配置数据系列，一个图表可以配置多个数据系列
            {
                name: "",
                type: "bar",//数据系统的类型，即图表的类型。bar代表柱状状图
                itemStyle: {
                    color: '#2db0b3',
                    borderRadius: [50, 50, 50, 50]
                },
                data: [randomNum(200, 400)],
                barWidth: 20,
                label: {
                    show: true, // 显示文字
                    position: 'top', // 文字位置
                    color: "#2dc1c3",
                    formatter: '{c} km' // 文字显示内容，这里c代表data数据中的value
                }
            }
        ]
    })
})
</script>

<style scoped>
#work {
    width: 100%;
    height: 50%;
    border-radius: 20px;
    margin-top: 20px;
}

#worktwo {
    width: 100%;
    height: 30%;
    border-radius: 20px;
}
</style>