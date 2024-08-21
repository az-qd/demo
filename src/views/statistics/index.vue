<template>
    <div class="statistics">
        <!-- <div class="left">
            <div class="top">
                <el-tree style="background-color: #2b2b2b;color: #2ec7c9;margin-top: 20px;border-radius: 20px;"
                    :data="data" :props="defaultProps" default-expand-all></el-tree>
            </div>
            <div class="bottom">
            </div>
        </div> -->
        <div class="right">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="报警列表" name="first">
                    <el-table :data="bjdata" border style="width: 95vw; height: 75vh;border-radius: 10px;"
                        :header-cell-style="{ backgroundColor: '#062627', color: '#ffffff', fontSize: '14px', textAlign: 'center', borderLeft: '0.5px #154480 solid', borderBottom: '1px #154480 solid' }">
                        <el-table-column label="序号" type="index" align="center" />
                        <el-table-column prop="device_number" label="设备号码" align="center" />
                        <el-table-column prop="title" label="报警类型" align="center" />
                        <el-table-column prop="count" label="报警次数" align="center" />
                        <el-table-column prop="model_name" label="主板型号" align="center" />
                        <el-table-column prop="batNum" label="串数" align="center" />
                        <el-table-column prop="standCur" label="额定电流(A)" align="center" />
                        <el-table-column prop="number" label="报警编号" align="center" />
                        <el-table-column label="操作" align="center">
                            <template #default="data">
                                <el-button style="background-color: #2ec7c9;" type="success" size="default"
                                    @click="exportExcel(data.row, data.$index)">导出Excel</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="日志查询" name="second">
                    <el-table :data="tableData" border style="width: 95vw; height: 75vh;border-radius: 10px;"
                        :header-cell-style="{ backgroundColor: '#062627', color: '#ffffff', fontSize: '14px', textAlign: 'center', borderLeft: '0.5px #154480 solid', borderBottom: '1px #154480 solid' }">
                        <el-table-column label="序号" type="index" align="center" />
                        <el-table-column prop="cz" label="操作" align="center" />
                        <el-table-column prop="nr" label="内容" align="center" />
                        <el-table-column prop="zh" label="账号" align="center" />
                        <el-table-column prop="lx" label="类型" align="center" />
                        <el-table-column prop="jg" label="结果" align="center" />
                        <el-table-column prop="ip" label="IP" align="center" />
                        <el-table-column prop="sj" label="操作时间" align="center" />
                        <el-table-column label="操作" align="center">
                            <template #default="data">
                                <el-button style="background-color: #2ec7c9;" n type="success" size="default"
                                    @click="exportExceltwo(data.row, data.$index)">导出Excel</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="运营统计" name="third">
                    <el-table :data="yunyingdata" border style="width: 95vw; height: 75vh;border-radius: 10px;"
                        :header-cell-style="{ backgroundColor: '#062627', color: '#ffffff', fontSize: '14px', textAlign: 'center', borderLeft: '0.5px #154480 solid', borderBottom: '1px #154480 solid' }">
                        <el-table-column label="序号" type="index" align="center" />
                        <el-table-column prop="number" label="设备号码" align="center" />
                        <el-table-column prop="name" label="设备名称" align="center" />
                        <el-table-column prop="sumTrade" label="里程(公里)" sortable align="center" />
                        <el-table-column prop="park" label="停留(次)" align="center" />
                        <el-table-column prop="overspeed" label="超速(次)" align="center" />
                        <el-table-column label="操作" align="center">
                            <template #default="data">
                                <el-button style="background-color: #2ec7c9;" type="success" size="default"
                                    @click="exportExcelthree(data.row, data.$index)">导出Excel</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as XLSX from 'xlsx';
import baojing from '@/utils/baojing';
import yunying from '@/utils/yunying';
import { ElMessage } from 'element-plus';
// element-plus tab默认选中项
const activeName = ref('first')
// 日志查询数据
const tableData = [
    {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    },
    {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    },
    {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    },
    {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }, {
        cz: "登录",
        nr: "管理员登录",
        zh: "admin",
        lx: "登录",
        jg: "成功",
        ip: "192.168.1.1",
        sj: "2023-11-16 16:00:00"
    }
]
// 报警数据
const bjdata = baojing
// 运营统计数据
const yunyingdata = yunying
// 导出报警列表数据为Excel
const exportExcel = (row: any, index: any) => {
    const data = bjdata.map(item => {
        return [
            "设备列表:" + item.number,
            "报警类型:" + item.title,
            "报警次数:" + item.count,
            "主板型号:" + item.model_name,
            "串数:" + item.batNum,
            "额定电流(A):" + item.standCur,
            "报警编号:" + item.number
        ]
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, '报警列表数据.xlsx');
    ElMessage({
        message: '导出成功,请查看浏览器下载中心',
        type: 'success',
    })
}
// 导出日志查询数据为Excel
const exportExceltwo = (row: any, index: any) => {
    const data = tableData.map(item => {
        return [
            "操作:" + item.cz,
            "内容:" + item.nr,
            "账号:" + item.zh,
            "类型:" + item.lx,
            "结果:" + item.jg,
            "IP地址:" + item.ip,
            "操作时间:" + item.sj,
        ]
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, '日志查询数据.xlsx');
    ElMessage({
        message: '导出成功,请查看浏览器下载中心',
        type: 'success',
    })
}
// 导出运营统计数据为Excel
const exportExcelthree = (row: any, index: any) => {
    const data = yunyingdata.map((item: any) => {
        return [
            "设备号码:" + item.number,
            "设备名称:" + item.name,
            "里程(公里):" + item.sumTrade,
            "停留(次):" + item.park,
            "超速(超速):" + item.overspeed
        ]
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, '运营统计数据.xlsx');
    ElMessage({
        message: '导出成功,请查看浏览器下载中心',
        type: 'success',
    })
}
</script>

<style scoped lang="scss">
.statistics {
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    padding: 20px;

    .left {
        width: 17%;
        height: 86%;
        border-radius: 15px;
        // background-color: #1c1c1c;
        margin-right: 20px;
        color: white;

        .top {
            height: 30%;
            border-radius: 15px;
            background-color: #2b2b2b;
            margin-bottom: 10px;
        }

        .bottom {
            height: 70%;
            border-radius: 15px;
            background-color: #2b2b2b;
            padding: 10px;
        }
    }

    .right {
        flex: 1;
        height: 81.5%;
        border-radius: 15px;
        margin-right: 29px;
        padding: 10px 20px;
        background-color: #1c1c1c;

        .demo-tabs {
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;

            ::v-deep(.el-tabs__item) {
                color: #49e0e2;
            }

            ::v-deep(.el-table__inner-wrapper) {
                color: #49e0e2 !important;
            }

            ::v-deep(.el-tabs__active-bar) {
                background-color: #49e0e2;
            }

            ::v-deep(.el-table__row) {
                background-color: #5f6666 !important;
            }

            ::v-deep(.el-table__header) {
                background-color: #09e0e0;
            }

            ::v-deep(.el-table__cell:hover) {
                font-weight: bold;
                font-size: 20px;
            }

            ::v-deep(.el-table__header) {
                background-color: #11e9e9 !important;
            }
        }
    }
}
</style>