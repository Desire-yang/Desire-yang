<template>
    <div>

        <div class="fangxing">
            <div style="margin-top: 15px; width:300px">
    <el-select v-model="select" slot="prepend" placeholder="请选择房型">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
</div>
        </div>

        <div class="yue">
            <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="选择月">
    </el-date-picker>
  </div>

        </div>
        <div class="bgg">
            <el-table
      :data="tableData"
      style="width: 800px">
      <el-table-column
        prop="zr"
        label="周日"
        >
      </el-table-column>
      <el-table-column
        prop="zy"
        label="周一"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="周二">
      </el-table-column>
      <el-table-column
        prop="date"
        label="周三"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="周四"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="周五"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="周六"
        >
      </el-table-column>
     
    </el-table>
        </div>
<div class="dhl">
    <Daohang></Daohang>
</div>
    </div>
</template>
<style scoped>
.bgg{
    margin: 20px 0px 0px 235px;
}
.dhl{
margin: -290px 0px 0px -8px;
}
.fangxing{
    margin: 0px 0px 0px 200px;
}
.yue{
    margin: -40px 0px 0px -150px;
}
</style>

<script>
import Daohang from './Daohang'
    export default {
          components:{
 Daohang,
  },
      data() {
        return {
          tableData: [{
            zr: '30',
          }, {
            zy: '31',
          }, {
            name: '王小虎',
          }, {
            name: '王小虎',
          }
          , {
            name: '王小虎',
          }
          , {
            name: '王小虎',
          }
          , {
            name: '王小虎',
          }]
        }
      }
    }
  </script>