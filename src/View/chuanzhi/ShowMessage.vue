<!--  -->
<template>
  <div>
        <h2>这是demo01组件</h2>
        <button @click="add"> 点击向dome02组件发送消息 </button>
        <demo2></demo2>
    </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Bus from '@/utils/bus'
import demo2 from '@/View/chuanzhi/UpdateMessage'
export default {
  components:{Bus,demo2},
    methods:{
        // 点击按钮发送Bus消息
        add(){

            // 发送 myMsg 主题 的Bus消息
             Bus.$emit('myMsg', "你好啊，我叫王佳伟");
            // 打印一下日志
            console.log("dome01组件发送完消息：bus事件触发了")

            Bus.$emit('random',Math.ceil(Math.random()*100000000))
        }
    }
    };
</script>
<style>


</style>
