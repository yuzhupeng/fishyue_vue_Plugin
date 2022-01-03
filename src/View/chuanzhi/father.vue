<!--  -->
<template>
<div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <p>收到来自子组件的消息：{{ messageFromChild }}</p>
    <Child :messageFromParent="message" @on-receive="receive" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Child from './child'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Child,},
data() {
//这里存放数据
return {
 message: '', // 传递给子组件的消息
 messageFromChild: '',
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 receive(msg) { // 接受子组件的信息，并将其赋值给messageFromChild
      this.messageFromChild = msg
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
<style>

</style>
