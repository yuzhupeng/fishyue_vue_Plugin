
<template>
  <div>
  <!-- 引入子组件 -->
    <child :todo="list">
      <!-- 这里的内容会渲染到子组件name为header的标签中 -->
      <template slot="header">
        <p>放在头部的内容</p>
      </template>
      <!-- 子组件双标签中的内容会被渲染到子组件的slot标签里 -->
      <h3>插槽标题</h3>
      <!-- 这里的内容会渲染到子组件name为footer的标签中 -->
      <template slot="footer">
        <p>放在底部的内容</p>
      </template>
    </child>
  </div>
</template>

<script>
import child from './childslot'
export default {
  name: 'parent',
  components: {child},

  data () {
    return {
      list: {
        name: '灵梦',
        age: 18,
        text: '热爱学习',
        hobby: '踢足球'
      }
    }
  }

}
</script>
