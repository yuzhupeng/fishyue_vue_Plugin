<template>
  <div>
    <!-- 如果有多个插槽,可以通过name命名 -->
    <div style="background-color: yellowgreen">
      <slot name="header"></slot>
    </div>
    <!-- 父组件传递过来的值会展示在slot标签中 -->
    <slot></slot>
    <ul v-if="todo">
      <li>姓名: {{todo.name}}</li>
      <li>年龄: {{todo.age}}</li>
      <li>爱好: {{todo.hobby}}</li>
    </ul>
    <div style="color: gold">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    todo: Object
  },

  data () {
    return {
    }
  },

  created () {
    console.log(1239999)
    console.log(this.todo, 'todo')
  }
}

</script>
