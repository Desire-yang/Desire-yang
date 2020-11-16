<template>
    <div>

            <div class="dingbuys">
               
            </div>
            
            <div class="ShoY">
                <span class="el-icon-s-home"><a href="#"> 首页</a></span>
            </div>

                <div class="mnue">
                    <div class="yid">
            <div class="mnue-tit">
			        <a href="#"><span><img style="width:25px" src="../image/touxiang.png"></span><span>用户昵称</span></a>
			        <em></em>
			        <div class="mnue-son">
				<ul>
					<li>
						<a href="#">修改密码</a>
					</li>
					<li>
						<a href="#">退出</a>
					</li>
				</ul>
			</div>
		</div>	
       </div>
	</div>
    <div class="wenbena">
        <p>会员管理>会员列表</p>
    </div>
    <div class="wenben">
        <div style="margin-top: 15px;">
  <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="姓名" value="1"></el-option>
      <el-option label="昵称" value="2"></el-option>
      <el-option label="手机号" value="3"></el-option>
      <el-option label="会员卡号" value="4"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
    </div>
    
    <Daohang></Daohang>
    <div class="wenbena">
        <p>会员管理>会员列表</p>
    </div>
    <div class="biaodan">
         <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="用户信息"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="手机号码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="可用余额"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="jifen"
      label="可用积分"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="caozuo"
      label="操作"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
 
    </div>
    <div class="fenye">
        <div class="block">
    <span class="demonstration"></span>
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
<script>
import Daohang from './Daohang'
export default {
  components:{
 Daohang,
  },
     data() {
      return {
        input1: '',
      input2: '',
      input3: '',
      select: '',
        tableData: [{
          date: '用户昵称-张三',
          name: '12312312311',
          address: '1000.00',
          jifen:'789'
        }, {
          date: '用户昵称-张三',
          name: '23456543211',
          address: '900.00',
          jifen:'789'
        }, {
          date: '用户昵称-张三',
          name: '88765434567',
          address: '5000.00',
          jifen:'789'
        }, {
         date: '用户昵称-张三',
          name: '33567832156',
          address: '3000.00',
          jifen:'789'
        }, {
         date: '用户昵称-张三',
          name: '08778643211',
          address: '200.00',
          jifen:'789'
        }, {
         date: '用户昵称-张三',
          name: '11245678789',
          address: '100.00',
          jifen:'789'
        }, {
         date: '用户昵称-张三',
          name: '14532456678',
          address: '1200.00',
          jifen:'789'
        }],
        multipleSelection: []
      }
    },

   
  }

</script>
<style scoped>
.fenye{
    margin: 20px 350px 0px 0px;
}
.biaodan{
    margin: -160px 0px 0px 230px;
}

 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

.wenben{
    margin: 20px 0px 0px 240px;
    width: 300px;
}



.yid{
    margin: -20px 0px 0px 1100px;
}
* {
			margin: 0;
			padding: 0;
		}
		ul {
			list-style: none; 
		}
		a {
			text-decoration: none; 
			color: #666;
		}
	
		.mnue-tit {
			margin: 0;
			width: 150px;
			height: 29px;
			margin: 0 auto;
		
		}
		.mnue-tit a span {
			margin-left: 0px;
		}
		.mnue-son {
			display: none;  /*隐藏下拉内容*/
			width: 150px;
			height: 65px;
			padding-top: 5px;
			background-color: #ddd;
		}
		.mnue-tit:hover .mnue-son {
			display: block;
		}
		.mnue-son li {
			text-align: center; /*显示下拉内容*/
			padding-top: 10px;
		}
		.mnue-son li:hover a {
			color: #e62310;
		}
.wenbena{
    margin: 25px 0px 0px -700px;
}
.dingbuys{
    margin-top: -70px;
    width:100%;
    height: 50px;
    background: #ecebeb
}
.ShoY{
    margin-left: -1200px;
    margin-top: -35px;
}
a:link,a:visited{
 text-decoration:none;
}
.nicheng{
    margin: 0px -1100px 0px 0px; 
}




</style>