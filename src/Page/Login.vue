<template>
<div>
    <div id="tupian1">
      
    </div>
   <div class="logo">
       <img style="width:250px" src="../image/logo.png">
   </div>
   <div class="shurukuang">
  <el-input style="width:300px"
placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
<p></p>
<el-input style="width:300px" placeholder="请输入密码" v-model="input1" show-password></el-input>
<br/>
<p></p>
  <router-link tag="p" to="../Page/Index.vue"><el-button style="width:300px" type="success">登录</el-button></router-link>
   </div>
 
</div>

</template>
<script>
export default {
    data() {
      return {
        input: '',
         input1: ''
      }
      
    }
    
}
</script>
<style scoped>

#tupian1{
    height: 700px;
    margin: -110px 0px 0px 0px;
	background-image: url(../image/beijing.jpg);
}
.logo{
    margin: -540px 0px 0px 30px
}
.shurukuang{
    margin: 20px 0px 0px 40px;
}
    

</style>