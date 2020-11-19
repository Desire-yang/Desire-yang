<template>
  <div>
        <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
      <el-dialog title="编辑房号" :visible.sync="dialogFormVisible" v-model="dialog" label="禁用">
       <el-form ref="form" :model="form" label-width="80px">
         
  <el-form-item  label="选择房型:">
    <el-select style="width:560px" v-model="form.region" placeholder="请选择房型">
      <el-option label="途选大床房" value="shanghai"></el-option>
      <el-option label="途享大床房" value="beijing"></el-option>
      <el-option label="情侣大床房" value="beijing"></el-option>
      <el-option label="双人大床房" value="beijing"></el-option>
    </el-select>
  </el-form-item>
     <el-form-item label="房号:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="备注:">
    <el-input v-model="form.qwe"></el-input>
  </el-form-item>
           </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
export default {

  data() {
    return {
     
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
       
      },
  
    };
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
  }
};
</script>
