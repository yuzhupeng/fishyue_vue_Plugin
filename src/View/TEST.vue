<template>
  <div>
     <loading v-show="true"></loading>
     <Icon type="airplane-outline"></Icon>
    <ion-icon name="airplane-outline"></ion-icon>
    <input type='button' @click="show_my_value()" value=button/>
    <input type='button' @click="say_hi('Jim')" value=直接传参数/>
    <input type='button' v-on:click="say_hi('v-on')" value='v-on'/>
    <input type='button' @click='show_blog("2")' value=跳转blog/>
    <router-link tag="li" to="/blog">
  <a>About</a>
</router-link>
 <router-link :to="{name: 'Blog', query: {id: '2'}}">

  </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      my_value: '默认值',
    }
  },
  methods: {
     show_blog: function(blog_id) {
      this.$router.push({name: 'Blog', query: {id: blog_id}})
    },
    show_my_value: function(){
      // 注意下面的　this.my_value, 要用到this这个关键字．
      alert('my_value: ' + this.my_value);
    },
    say_hi:function(name)
    {
      alert("name"+name);
    }
  }
}
</script>
