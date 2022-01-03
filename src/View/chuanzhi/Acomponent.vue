<!--  -->
<template>
 <div class="compa">
    <h3>this is A component</h3>
    <input type="text" v-model="message" />
    <p>收到来自{{ comp }}的消息：{{ messageFromComp }}</p>
    <CompB :messageFromA="message" @keyup="receive" />  <!--监听子孙组件的keyup事件，将message传递给子孙组件-->

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CompC from './Ccomponent'
import CompB from './Bcomponent'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    CompB,CompC},
data() {
//这里存放数据
return {
 message: '',
      messageFromComp: '',
      comp: '',
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 receive(e) { // 监听子孙组件keyup事件的回调，并将keyup所在input输入框的值赋值给messageFromComp
      this.comp = e.target.name
      this.messageFromComp = e.target.value
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
<style >


</style>
