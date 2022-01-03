<!--  -->
<template>
  <div>
    <h2>这是dome02组件</h2>
    <h3>这个地方展示dome01组件的命令</h3>
    <!-- 把 dome01 发过来的消息渲染到下面 -->
    <span>{{msg}}</span>
    <span>{{randoms}}</span>
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bus from '@/utils/bus'


export default {
    components:{Bus},
  data() {
    return {
      msg: "wjw",
      randoms:100
    };
  },
  // 在mounted钩子里面就开始定阅myMsg主题的消息
  mounted() {
      Bus.$on('myMsg', myMsg => {
            console.log("dome02组件收到bus消息：",myMsg);
            this.msg = myMsg
        });
        Bus.$on('random',random=>{
this.randoms = random
        });
  }
};
</script>
<style>


</style>
