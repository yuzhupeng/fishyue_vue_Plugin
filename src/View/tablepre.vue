<template>
  <div class="vueWrap">
    <el-table
      style="width: 900px"
      :data="tableBody"
      border
      :header-cell-style="{
        background: '#FAFAFA',
        color: '#333333',
        fontWeight: 'bold',
        fontSize: '14px',
      }"
    >
      <el-table-column
        type="index"
        label="序号"
        width="58"
        align="center"
      ></el-table-column>

      <!-- 表头换行方式一，使用头部插槽方式，将表头文字拆分在两个div中，因为div盒子是块元素
           所以两个div会换行，所以表头就换行了，此方式适用于固定数据的表头换行 -->
      <el-table-column prop="toolName" width="180" align="center">
        <template slot="header">
          <div>工具箱</div>
          <div>零件名称</div>
        </template>
        <template slot-scope="scope">
          <span>{{ scope.row.toolName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="供应商" prop="supplier" width="120" align="center">
      </el-table-column>

      <!-- 表头换行方式二，较之于方式一，这种方式是/n换行符，加css的white-space空白样式控制-->
      <el-table-column
        :label="labelFn()"
        prop="supplierCountry"
        width="180"
        align="center"
      >
      </el-table-column>

      <!-- 表头换行方式三，动态方式 -->
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :label="item.labelName"
        :prop="item.propName"
        width="180"
        align="center"
        :render-header="renderheader"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
    return {
      // 动态数据表头就需要让后端返回来了，让其在需要换行的地方用逗号分隔开
      tableHeader: [
        {
          labelName: "型号001,价格（元）",
          propName: "typeOne",
        },
        {
          labelName: "型号002,价格（元）",
          propName: "typeTwo",
        },
      ],
      // 表体数据
      tableBody: [
        {
          id: "2021111101",
          toolName: "5G服务",
          supplier: "华为",
          supplierCountry: "中国",
          typeOne: "8888888",
          typeTwo: "9999999",
        },
        {
          id: "2021111101",
          toolName: "6G-SERVER",
          supplier: "中华有为",
          supplierCountry: "CHINA",
          typeOne: "678678678",
          typeTwo: "789789789",
        },
      ],
    };
  },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   labelFn() {
      // 在需要换行的地方加入换行符 \n  ，在搭配最底下的white-space样式设置
      return `供应商\n所属国家`;
    },

    // 饿了么UI的表头函数渲染方式，这种方式和表头插槽方式有点类似
    // 也是把表头的数据文字分割成两块，然后将内容渲染到两个div中（div自动换行）
    renderheader(h, { column, $index }) {
      return h("div", {}, [
        h("div", {}, column.label.split(",")[0]),
        h("div", {}, column.label.split(",")[1]),
      ]);
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  >
  .el-table th.el-table__cell > .cell {
  white-space: pre;
  white-space: pre-wrap;
}

</style>
