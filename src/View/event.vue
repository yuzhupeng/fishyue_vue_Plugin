
   <template>
  <div>
   <input type='button' @click="show_my_value()" value=button/>
    <button @click ="fun($event)">点击查看事件</button>
   <form7 ref="tableList"></form7>
  </div>

</template>
<script>

import form7 from '@/View/Blog.vue'
export default {
   components: {
         form7
        },
  data () {
    return {
      my_value: '默认值',
    }
  },
  methods: {
     show_my_value: function(){
      // 注意下面的　this.my_value, 要用到this这个关键字．
      alert('my_value: ' + this.my_value);
    },
   fun(e) {
    // e.target 是你当前点击的元素
    // e.currentTarget 是你绑定事件的元素
   // #获得点击元素的前一个元素
    e.currentTarget.previousElementSibling.innerHTML
   // #获得点击元素的第一个子元素
    e.currentTarget.firstElementChild
   // # 获得点击元素的下一个元素
    e.currentTarget.nextElementSibling
   // # 获得点击元素中id为string的元素
    e.currentTarget.getElementById("string")
   // # 获得点击元素的string属性
    e.currentTarget.getAttributeNode('string')
  //  # 获得点击元素的父级元素
    e.currentTarget.parentElement
   // # 获得点击元素的前一个元素的第一个子元素的HTML值
    e.currentTarget.previousElementSibling.firstElementChild.innerHTML

    }
  }
}
</script>


