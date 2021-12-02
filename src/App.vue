<template>
  <div id="app">
    <router-view />
    <Button type="info">打印出车指示单</Button>
    <Button type="success">发送短信</Button>
    <Button type="warning">保存</Button>
    <Button type="error" @click='goBack()'>返回</Button>

 <!-- <ul>
    <li v-for="item in linklist" :key="item.name">
     	<router-link :to="item.link">{{item.name}}</router-link></li>
</ul> -->


  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      my_value: "默认值",
      linklist:[
        {name:'HelloWorld',link:'/HelloWorld'},
           {name:'TEST',link:'/TEST'},
              {name:'vuex',link:'/vuex'},
                 {name:'event',link:'/event'},
                    {name:'fors',link:'/fors'},
                       {name:'blog',link:'/blog'},

      ]
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
