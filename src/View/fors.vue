<template>
<div>

  <table>
   <tr v-for="item in items" :key="item.message">
  <td >{{item.title }}</td>
</tr>
  </table>


<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      my_value: '默认值',
       items: [
      { title: 'Foo' },
      { title: 'Bar' },
    ],
    type:'C'
    }
  },
  methods: {
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
