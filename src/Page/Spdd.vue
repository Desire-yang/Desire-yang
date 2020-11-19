<template>
    <div>
      <div>

      </div>
        <div class="bk">
            <p class="xx">全部订单(1000)</p>
            <p class="qw">待付款<span class="ybai">100</span></p>
            <p class="q1">待发货<span class="ybai">10000</span></p>
            <p class="q2">已发货<span class="ybai">10000</span></p>
            <p class="q3">已完成<span class="ybai">10000</span></p>
            <p class="q4">已关闭<span class="ybai">10000</span></p>
        </div>
        <div class="blck">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
 <div class="wenbenqw">
      <div style="margin-top: 15px; width:300px">
  <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="" value="订单编号"></el-option>
      <el-option label="收货人姓名" value="2"></el-option>
      <el-option label="收货人电话" value="3"></el-option>
      <el-option label="商品货号" value="3"></el-option>
    </el-select>
  </el-input>
</div>
  </div>
  <div class="annn">
    <el-row>
  <el-button type="warning">查询</el-button>
</el-row>
  </div>
  <div class="dhll">
<Daohang></Daohang>

  </div>

    <div class="biaog">
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="用户信息"
      width="280">
    </el-table-column>
    <el-table-column
      prop="name"
      label="手机号码"
      width="280">
    </el-table-column>
    <el-table-column
      prop="province"
      label="可用于额"
      width="280">
    </el-table-column>
    <el-table-column
      prop="city"
      label="可用积分"
      width="280">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="280">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        <el-button type="text" size="small">修改积分</el-button>
        <el-button type="text" size="small">充值</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>



<div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
    </div>
</template>
<style scoped>
.dhll{
  margin: -185px 0px 0px 0px;
}
.annn{
  margin: -40px 0px 0px 750px;
}
.wenbenqw{
  margin: -55px 0px 0px 680px;
}
.bk{
    width: 150px;
    height: 30px;
    background-color: rgb(44, 167, 99);
    color: white;
    margin: 0px 0px 0px 256px;
}
.biaog{
  margin: -80px 0px 0px 250px;
  width: 1200px;
}
.qw{
    width: 150px;
    height: 30px;
    background-color: rgb(201, 191, 191);
    margin-left: 160px;
    margin-top: -35px;
    color: rgb(0, 0, 0);
}
.q1{
    width: 150px;
    height: 30px;
    background-color: rgb(201, 191, 191);
    margin-left: 320px;
    margin-top: -45px;
    color: rgb(0, 0, 0);
}

.q2{
    width: 150px;
    height: 30px;
    background-color: rgb(201, 191, 191);
    margin-left: 480px;
    margin-top: -47px;
    color: rgb(0, 0, 0);
}
.q3{
    width: 150px;
    height: 30px;
    background-color: rgb(201, 191, 191);
    margin-left: 640px;
    margin-top: -46px;
    color: rgb(0, 0, 0);
}
.q4{
    width: 150px;
    height: 30px;
    background-color: rgb(201, 191, 191);
    margin-left: 800px;
    margin-top: -45px;
    color: rgb(0, 0, 0);
}
.blck{
    margin-left: -430px;
    margin-top: 30px;
}
.ybai{
  color: red
}
</style>

<style scoped>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.top {
  margin-left: -1400px;
}
.pb {
  margin-left: -1050px;
  margin-top: -30px;
}
.cx {
  margin-left: -840px;
  margin-top: -20px;
}
</style>

<script>
import Daohang from './Daohang'
  export default {
         components:{
 Daohang,
  },
    methods: {
      handleClick(row) {
        console.log(row);
      },
            handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '15212345678',
          province: '1000.00',
          city: '876',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '15212345234',
          province: '0.00',
          city: '89',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '13712653746',
          province: '200.00',
          city: '2000',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '19987760987',
          province: '1280.82',
          city: '3298',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
        , {
          date: '2016-05-03',
          name: '19987760987',
          province: '1280.82',
          city: '3298',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
         currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    }
  }
</script>