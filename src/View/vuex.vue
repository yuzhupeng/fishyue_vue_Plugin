<template>
  <div class="hello">
    <h3>{{$store.state.count}}</h3>
      <div class="hello">
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
    </div>
   <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
    <button @click="handleActionsReduce(10)">异步减少</button>
   </div>

    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>


  </div>
  </div>

</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       loading: false,
                loading2: false
    }
  },methods:{
   handleAddClick(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount',n);
    },
handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    },
     toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
  }
}
</script>
