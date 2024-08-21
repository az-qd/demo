<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="pietwo">

    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pietwo'));
    myChart.setOption({
        title: {
            text: '设备平台到期概况',
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
            orient: 'vertical',
            bottom: '5%',
            left: '5%',
            textStyle: {
                color: "#fafafa"
            }
        },
        series: [
            {
                type: 'pie',
                radius: ['25%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                // emphasis: {
                //     label: {
                //         show: true,
                //         fontSize: 40,
                //         fontWeight: 'bold'
                //     }
                // },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 0, name: `已到期` },
                    { value: 0, name: `7天内到期` },
                    { value: 0, name: `30天内到期` },
                ]
            }
        ]
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})
</script>

<style scoped>
#pietwo {
    width: 100%;
    height: 100%;
}
</style>
