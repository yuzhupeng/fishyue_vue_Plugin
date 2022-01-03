<!--  -->
<template>
<div class="compb">
    <h4>this is B component</h4>
    <input name="compB" type="text" v-model="message" v-on="$listeners" />  <!--将A组件keyup的监听回调绑在该input上-->
    <p>收到来自A组件的消息：{{ $attrs.messageFromA }}</p>
    <CompC v-bind="$attrs" v-on="$listeners" /> <!--将A组件keyup的监听回调继续传递给C组件，将A组件传递的attrs继续传递给C组件-->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import CompC from './Ccomponent'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    CompC,},
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
