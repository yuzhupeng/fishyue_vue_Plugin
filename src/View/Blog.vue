<template>
  <div >
    <div>
      <p> 标题： {{ blog.title }}  </p>
      <p> 发布于： {{blog.created_at }}</p>
      <div>
       {{ blog.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title:'1',
        created_at:'2',
        body:'3'
      }
    }
  },
  mounted() {
     if(this.$route.query.id)
     {
       console.log('2');
this.blog.title='wenzhang';
this.blog.created_at='fishyue';
this.blog.body='zhengwen';
     }
     else
     {
       console.log('2');
     }
  }
}
</script>

<style>
</style>
