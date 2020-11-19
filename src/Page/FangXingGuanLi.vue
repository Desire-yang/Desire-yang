<template>
  <div>
<div class="daoh">
  <Daohang></Daohang>
</div>
<div class="wenbenss">
 <el-form :inline="true"  class="demo-form-inline">
  <el-form-item label="">
    <el-input  placeholder="房型名称"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="warning" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</div>
<div class="xzeeee">
  <el-row>
  <el-button>批量删除</el-button>
  <el-button type="primary">新增房型</el-button>
</el-row>
</div>
<div class="biaogee">
 <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="100">
    </el-table-column>
    <el-table-column
      label="房型名称"
      width="200">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="售价(元)"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="房间数量"
      width="200"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="caozuo"
      label="操作"
      width="200"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</div>

 <div>
    <div class="block">
    <span class="demonstration"></span>
    <p></p>
    <p></p>
    <p></p>
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
  </div>
</template>
<style scoped>
.biaogee{
  margin: -1000px 0px 0px 260px;
}
.daoh{
  margin: 30px 0px 0px 0px;
}
.wenbenss{
  margin: -200px 700px 0px 0px;
}
.xzeeee{
  margin: -50px -600px 0px 0px;
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
          date: '途选大床房',
          name: '¥330.00',
          address: '5',
          caozuo:'操作'
        }, {
          date: '途选大床房',
          name: '¥330.00',
          address: '5',
          caozuo:'操作'
        }, {
          date: '途选大床房',
          name: '¥330.00',
          address: '5',
          caozuo:'操作'
        }, {
          date: '途选大床房',
          name: '¥330.00',
          address: '5',
          caozuo:'操作'
        }, {
           date: '途选大床房',
          name: '¥330.00',
          address: '5',
          caozuo:'操作'
        },{
          date: '途选大床房',
          name: '¥330.00',
          address: '5',
          caozuo:'操作'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
       
      }
    },
   
  }
</script>