<!--  -->
<template>
  <div>
    <Timeline-item v-for="(item, findex) in addressa" :key="findex">
      <div >
      <span class="bg-light-blue" >2017.03</span>
    </div>
      <Card style="width: 100%">
        <p slot="title" class="titles">
          <Icon type="ios-film-outline"></Icon>
          {{ item.title }}
        </p>
        <a href="#" slot="extra">
          <Icon type="ios-bookmarks-outline"></Icon>
          持续时间：{{ item.time }}
        </a>
        <p>aaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaa</p>
        <p>aaaa现</p>
        <p>aaaaaaaaaaaaaa</p>
      </Card>
      <BR />

      <Card style="width: 100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          项目描述：
        </p>
        <a href="#" slot="extra">
          <Icon type="ios-bookmarks-outline"></Icon>
          规模：6人
        </a>
        <p>aaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaa</p>
        <p>aaaa现</p>
        <p>aaaaaaaaaaaaaa</p>
      </Card>
      <BR />
      <Card style="width: 100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          效果预览：
        </p>
        <div>
          <div
            v-for="(items, indexs) in item.p"
            :key="indexs"
            style="width: 33.33333333%; display: inline; padding: 10px"
          >
            {{ items.sss }}
            <img
              style="cursor: pointer; height: 150px"
              src="https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg"
            />
            <img
              style="cursor: pointer; height: 150px"
              src="https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg"
            />
          </div>
        </div>
      </Card>
    </Timeline-item>

    <Slider v-model="value11" range :marks="marks"></Slider>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {


    //这里存放数据
    return {
 addressa:[{time:'12月',title:'quanzhisq',away:'1',address:'2',p:[{sss:'1'},{sss:'2'}],},
                        {time:'12月',title:'quanzhisq',away:'1',address:'2',p:[{sss:'1'},{sss:'2'}],a:'22' }],
                value11: [0, 65],
                marks: {
                    33: '了解',
                    66: '熟悉',
                    100: '精通',

                }


    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style >
 .ivu-card-head p {
    color: #337ab7;
    font-weight: 600;
}
  .bg-light-blue {
    background-color: #3c8dbc !important;
      color: #fff !important;
      font-weight: 600;
    padding: 5px;
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
  font-family: 'Source Sans Pro','Microsoft YaHei','Helvetica Neue', Helvetica, Arial, sans-serif;

    margin-right: 200%;
    margin-bottom: 15px;



  }

</style>
