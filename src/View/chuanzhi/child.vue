<!--  -->
<template>
<div class="child">
    <h4>this is child component</h4>
    <input type="text" v-model="message" @keyup="send" />
    <p>收到来自父组件的消息：{{ messageFromParent }}</p>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: ['messageFromParent'],  // 通过props接收父组件传过来的消息
data() {
//这里存放数据
return {
  message: '',

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  send() {
      this.$emit('on-receive', this.message)  // 通过$emit触发on-receive事件，调用父组件中receive回调，并将this.message作为参数
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
