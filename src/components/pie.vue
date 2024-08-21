<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="pie">

    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

// 1到50随机数
function randomNum(minNum: number, maxNum: number): number {
    switch (arguments.length) {
        case 1:
            return parseInt((Math.random() * minNum + 1).toString(), 10);
        case 2:
            return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10);
        default:
            return 0;
    }
}
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie'));
    myChart.setOption({
        title: {
            text: '当日报警设备',
            left: 'center',
            top: 10,
            textStyle: {
                color: "#fafafa"
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '2',
            textStyle: {
                color: "#fafafa"
            }
        },
        series: [
            {
                type: 'pie',
                radius: '45%',
                color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'],
                data: [
                    { value: 0, name: '电池恒温' },
                    { value: 0, name: 'MOS超温' },
                    { value: 0, name: 'MOS失效' },
                    { value: 0, name: '短路保护' },
                    { value: 0, name: '放电过流' },
                    { value: 0, name: 'B-P-接反' },
                    { value: 0, name: '低电关机' },
                    { value: 0, name: '其他报警' }
                ],
            }
        ]
    })

    window.addEventListener('resize', function () {
        myChart.resize();
    });
})
</script>

<style scoped>
#pie {
    width: 100%;
    height: 100%;
}
</style>