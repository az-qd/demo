<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="position">
        <div class="left">
            <div class="top">
                <p style="text-align: center;font-size: 14px;">运营商</p>
                <el-tree style="background-color: #2b2b2b;color: #2ec7c9;" :data="data" :props="defaultProps"
                    default-expand-all></el-tree>
                <el-statistic title="在线" :value="outputValue"
                    style="color: #2ec7c9;text-align: center;margin: 60px 0;" />
                <el-statistic title="离线" :value="outputValues" style="color: #2ec7c9;text-align: center;" />
            </div>
            <div class="bottom">
                <div
                    style="display: flex;justify-content: space-between;font-size: 16px;width: 285px;margin: 5px auto;margin-top: 5px;">
                    <span>全部:{{ carlist.length }}</span>
                    <span>在线:{{ move }}</span>
                    <span>离线:{{ stop }}</span>
                </div>
                <el-scrollbar class="scrollbar" height="90%">
                    <div v-for="item in carlist" :key="item.id" class="scrollbar-item">
                        <div class="carcontent" :class="item.speed != 0 ? 'active' : ''" @click="address(item)">
                            <span>{{ item.number }}</span>
                            <span>{{ item.speed }}km/h</span>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
        <div class="right">
            <div id="map" style="width: 100%; height: 100%;">
                <div
                    style="position: absolute;z-index: 500;background-color:white ;top: 5px;left: 10px;border-radius: 20px;padding: 2px 5px;color: #2ec7c9;font-size: 16px;">
                    {{ mapsbid }} {{ addres }}
                </div>
                <div style="position:absolute;z-index: 500;top: 30px;left: 15px;color: #2ec7c9;">查看总览
                    <el-switch v-model="alldata" @change="allscreen">
                    </el-switch>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useRoute } from 'vue-router'
const route = useRoute()

import axios from "axios";
// 封装一个随机数工具函数
function randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const carlist = ref<any>([
    {
        "id": "875133",
        "name": "BM5661726418",
        "number": "613881726418",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974221",
        "lng": "114.555711",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723615727",
        "live": "1723795117",
        "theftState": "2",
        "iccid": "89860464192480005033",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "98",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.890",
        "blat": "36.979991",
        "blng": "114.5623"
    },
    {
        "id": "875047",
        "name": "BM5661726332",
        "number": "613881726332",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974194",
        "lng": "114.555742",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723615990",
        "live": "1723795095",
        "theftState": "2",
        "iccid": "89860442192480011491",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "100",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.950",
        "blat": "36.979965",
        "blng": "114.562331"
    },
    {
        "id": "874967",
        "name": "BM5661726252",
        "number": "613881726252",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974218",
        "lng": "114.555605",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723706390",
        "live": "1723795050",
        "theftState": "2",
        "iccid": "89860442192480011377",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "99",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.900",
        "blat": "36.979987",
        "blng": "114.562194"
    },
    {
        "id": "874940",
        "name": "BM5661726225",
        "number": "613881726225",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974233",
        "lng": "114.555659",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723616002",
        "live": "1723795085",
        "theftState": "2",
        "iccid": "89860464192480005111",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "100",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.950",
        "blat": "36.980002",
        "blng": "114.562247"
    },
    {
        "id": "874939",
        "name": "DYJ3",
        "number": "613881726224",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "37.011039",
        "lng": "114.564116",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723778122",
        "live": "1723795032",
        "theftState": "2",
        "iccid": "89860442192480011399",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "100",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.940",
        "blat": "37.016938",
        "blng": "114.570659"
    },
    {
        "id": "874932",
        "name": "BM5661726217",
        "number": "613881726217",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974225",
        "lng": "114.555651",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723616059",
        "live": "1723795122",
        "theftState": "2",
        "iccid": "89860442192480011368",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "97",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.770",
        "blat": "36.979994",
        "blng": "114.562239"
    },
    {
        "id": "874922",
        "name": "BM5661726207",
        "number": "613881726207",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974263",
        "lng": "114.555726",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723615850",
        "live": "1723795119",
        "theftState": "2",
        "iccid": "89860442192480011330",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "100",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.950",
        "blat": "36.980033",
        "blng": "114.562315"
    },
    {
        "id": "680964",
        "name": "BM5661551672",
        "number": "613881551672",
        "expire": "1756396799",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974342",
        "lng": "114.556009",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723616021",
        "live": "1723795084",
        "theftState": "2",
        "iccid": "898604E41923D0831855",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "100",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "52.930",
        "blat": "36.980116",
        "blng": "114.562596"
    },
    {
        "id": "680940",
        "name": "DYJ2",
        "number": "613881551648",
        "expire": "1750521599",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "37.023719",
        "lng": "115.179164",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723768445",
        "live": "1723795026",
        "theftState": "2",
        "iccid": "898604E41923D0964928",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "97",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "53.370",
        "blat": "37.029877",
        "blng": "115.185609"
    },
    {
        "id": "544644",
        "name": "BM5661416073",
        "number": "613881416073",
        "expire": "1735358400",
        "operator_id": "18917",
        "group_id": "0",
        "scrap_flag": "0",
        "repair_flag": "0",
        "lowbat_shutdown": "0",
        "active_shutdown": "0",
        "lat": "36.974141",
        "lng": "114.55546",
        "speed": `${randomNum(0, 40)}`,
        "locatetime": "1723616066",
        "live": "1723795076",
        "theftState": "2",
        "iccid": "898604E41923D0685867",
        "is_soft": "1",
        "oper_name": "骥川农业无人车",
        "soc": "100",
        "workState": "2",
        "chCur": "0.00",
        "dChCur": "0.00",
        "volt": "53.310",
        "blat": "36.979908",
        "blng": "114.56205"
    }
])
const move = ref(0)
const stop = ref(0)
const defaultProps = {
    children: 'children',
    label: 'label'
}
const data = [{
    label: `骥川农业无人车 (${carlist.value.length}/${carlist.value.length})`,
}]

carlist.value.map((item: any) => {
    return item.is_soft == 1 ? move.value++ : stop.value++
})

// 统计组件
import { useTransition } from '@vueuse/core'
const source = ref(0)
const outputValue = useTransition(source, {
    duration: 600,
})
source.value = move.value
const sources = ref(0)
const outputValues = useTransition(sources, {
    duration: 1500,
})
sources.value = stop.value

// 天地图数据
const lng = ref("114.513372")
const lat = ref("37.061725")
const map = ref(null)
const zoom = ref(1)
const addres = ref("中国")
const alldata = ref(false)
const mapsbid = ref("")
const address = (data: any) => {
    lng.value = data.lng
    lat.value = data.lat
    mapsbid.value = data.number
    axios({
        method: "get",
        url: "http://api.tianditu.gov.cn/geocoder",
        params: {
            tk: "b55f9d9d930489d8234dfcf996e4c120",
            type: "geocode",
            postStr:
                "{'lon':" +
                lng.value +
                ",'lat':" +
                lat.value +
                ",'ver':1}",
        },
    }).then((res) => {
        addres.value = res.data.result.addressComponent.city
            + res.data.result.addressComponent.county
            + res.data.result.addressComponent.town
            + res.data.result.addressComponent.poi
    });
    zoom.value = 18
    ininMap(zoom.value)
}
onMounted(() => {
    lng.value = route.query.lng || "114.513372"
    lat.value = route.query.lat || "37.061725"
    zoom.value = route.query.zoom || 8
    ininMap(zoom.value)
})
const count = ref(0)
const ininMap = (zoom: any) => {
    ++count.value
    if (count.value <= 1) {
        // 创建地图对象
        map.value = new window.T.Map("map", { minZoom: 4 });
        // 添加比例尺控件
        map.value.addControl(new T.Control.Scale());
        // 添加地图类型控件
        map.value.addControl(new T.Control.MapType());
    }
    map.value.width = "50%";
    map.value.height = "50%";
    // 设置显示地图的中心点和级别
    map.value.centerAndZoom(new window.T.LngLat(lng.value, lat.value), zoom);

    // 设置地图的视野范围，限制地图的上下左右边界
    var bound = new T.LngLatBounds(new T.LngLat(7.001294, -25.048607), new T.LngLat(246.166153, 61.988497));
    map.value.setMaxBounds(bound);
    // 创建图片对象
    const icon = new T.Icon({
        iconUrl: "data:image/png;base64,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",
        iconSize: new T.Point(19, 27),
        iconAnchor: new T.Point(10, 25)
    });
    // 批量标注对象
    carlist.value.forEach((item) => {
        //创建标注对象
        let marker = new T.Marker(new T.LngLat(item.lng, item.lat), { icon: icon });
        //向地图上添加标注
        map.value.addOverLay(marker);
        const markerinfo = new T.InfoWindow(`<div style="font-size:16px;">${item.name}<br>设备号: ${item.number}<br>设备状态: ${item.speed != 0 ? "运动" : "静止"}${item.speed ? item.speed : 0}km/h<br>GPS卫星颗数： ${Math.floor(Math.random() * 10)}<br>SOC电量： ${item.soc}%<br>
        电池电压： ${item.volt}V<br>当前时间： ${new Date().toLocaleString()}</div>`);
        marker.addEventListener("mouseover", () => {
            marker.openInfoWindow(markerinfo);
        });
        // marker.addEventListener("mouseout", () => {
        //     marker.closeInfoWindow();
        // });
    })
}

const allscreen = () => {
    if (alldata.value == true) {
        ininMap(4)
    } else {
        ininMap(zoom.value)
    }
}
</script>

<style scoped lang="scss">
#position {
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 10px;
    background-color: #000000;

    .left {
        width: 17%;
        height: 83%;
        border-radius: 15px;
        margin-right: 20px;
        color: white;

        .top {
            height: 50%;
            border-radius: 15px;
            background-color: #2b2b2b;
            margin-bottom: 10px;

            ::v-deep(.el-statistic__head) {
                color: white;
                font-size: 18px;
                font-weight: 700;
            }

            ::v-deep(.el-statistic__number) {
                color: #2ec7c9;
                font-size: 38px;
            }
        }

        .bottom {
            height: 50%;
            border-radius: 15px;
            background-color: #2b2b2b;
            padding: 10px;

            .scrollbar {
                margin-top: 20px;

                .scrollbar-item {
                    width: 300px;
                    margin-bottom: 5px;
                    font-size: 12px
                }

                .carcontent {
                    display: flex;
                    justify-content: space-between;
                    padding: 5px 5px;
                    border-radius: 20px;
                }
            }

            .carcontent:hover {
                background-color: #2ec7c9;
                color: white;
            }

            .active {
                color: #2ec7c9;
            }
        }
    }

    .right {
        flex: 1;
        height: 85.9%;
        border-radius: 16px;
        background-color: #1c1c1c;
        margin-right: 29px;

        #map {
            border-radius: 20px;
        }
    }

}
</style>
