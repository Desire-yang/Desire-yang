<template>
  <div class="app">
    <div>
      <div class="tjfl">
        <el-button type="text" @click="dialogFormVisible = true">添加分类</el-button>
      </div>
      <el-dialog title="编辑分类" :visible.sync="dialogFormVisible" v-model="dialog" label="禁用">
        <el-form :model="form">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <div class="bianjifenlei">
            <el-form-item label="上级分类" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择分类"></el-select>
            </el-form-item>
          </div>
          <el-form-item label="排序" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>是否显示：
          <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
          <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="fla">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="分类名称" width="400">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="商品数量" width="300"></el-table-column>
        <el-table-column prop="address" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">增加子分类</el-button>

            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Daohang class="daohanga"></Daohang>
  </div>
</template>
<style scoped>
.daohanga {
  margin: -605px 0px 0px -365px;
}
.tjfl {
  margin: 0px 0px 0px -1100px;
}
.fla {
  width: 900px;
  margin: 50px 0px 0px 0px;
}
.app {
  position: absolute;
  width: 1200px;
  margin: 0px 360px;
}

.zj {
  width: 100px;
  height: 30px;
}
.bianjifenlei {
  width: 300px;
}
</style>
<script>
import Daohang from "./Daohang";
export default {
  components: {
    Daohang
  },
  data() {
    return {
      radio: "选中且禁用",
      tableData: [
        {
          date: "服装",
          name: "150",
          address: "增加子分类    编辑    删除"
        },
        {
          date: "毛衣",
          name: "50",
          address: "增加子分类    编辑    删除"
        },
        {
          date: "T恤",
          name: "20",
          address: "编辑    删除"
        },
        {
          date: "西装",
          name: "30",
          address: "编辑    删除"
        },
        {
          date: "配饰",
          name: "50",
          address: "编辑    删除"
        },
        {
          date: "配饰",
          name: "33",
          address: "增加子分类    编辑    删除"
        },
        {
          date: "裙子",
          name: "20",
          address: "编辑    删除"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "110px",
      multipleSelection: []
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