<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="bar"></div>
</template>

<script setup lang="ts">
// 引入路由器
import { useRouter } from 'vue-router';
const router = useRouter();
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('bar'));
    myChart.setOption({
        backgroundColor: '#1c1c1c',
        title: {
            text: '客户设备统计',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff'
            }
        },
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
            data: ['骥川农业无人车'],
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
                data: [10],
                barWidth: 20,
                label: {
                    show: true, // 显示文字
                    position: 'right', // 文字位置
                    color: "#2dc1c3"
                }
            }
        ]
    })
    myChart.on("click", function (params: any) {
        //逻辑控制
        router.push({
            path: "/devicemanage"
        })
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})
</script>

<style scoped>
#bar {
    width: 100%;
    height: 100%;
}
</style>