<template>
<div>User {{ $route.params.BwfQueryid }}</div>
</template>
<script>
export default {
  data()
  {
    return{

    }
  },methods:{
    querybwfform()
    {


    }

  }, props: {
    singleSearch: {
      type: Object,
      default: {},
    },
    searchFormFields: {
      type: Object,
      default: () => {
        return {};
      },
    },
    tiggerPress: {
      type: Function,
      default: () => { },
    },
  },
  


}
</script>
