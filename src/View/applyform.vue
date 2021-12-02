<template>
  <div style="background: #eee; padding: 20px">
    <el-scrollbar style="height: 100%">
      <Row>
        <Col span="24">
        <i class="ivu-icon ivu-icon-md-checkbox-outline" style="font-size:20px"></i>
        <i class="ivu-icon ivu-icon-md-checkmark" style="font-size:20px"></i>

          <Card>
               <p slot="title">用车申请表管理</p>
            <Button type="info">打印出车指示单</Button>
            <Button type="success">发送短信</Button>
            <Button type="warning">保存</Button>
            <Button type="error">返回</Button>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span="24">
          <Card>

           <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span="24">
          <Card>
            <p slot="title">行程明细信息</p>
            <Timeline>
              <Timeline-item>
                <p class="time">8:00出发</p>
                <p class="content">东莞市石龙镇京瓷路八号</p>
              </Timeline-item>
              <Timeline-item>
                <p class="time">8:30到达</p>
                <p class="content">佳兆业中央豪门 广东省东莞市龙升路152号</p>
              </Timeline-item>
              <Timeline-item>
                <p class="time">8:30到达</p>
                <p class="content">广东省惠州市博罗县 石湾镇</p>
              </Timeline-item>
              <Timeline-item>
                <p class="time">11:30到达</p>
                <p class="content">
                  广州市花都区机场大道东888号 广州白云国际机场
                </p>
              </Timeline-item>
            </Timeline>
            <div>
              <span>
                路桥费：<Input
                  v-model="cqf"
                  placeholder="请输入..."
                  style="width: 100px"
                ></Input
              ></span>
              <span>
                总耗时：<Input
                  v-model="TotalUseTime"
                  placeholder="请输入..."
                  style="width: 100px"
                ></Input
              ></span>
              <span>
                总公里数:<Input
                  v-model="Kilometers"
                  placeholder="请输入..."
                  style="width: 100px"
                ></Input
              ></span>
            </div>
          </Card>
          <br />
          <Card>
            <p slot="title">目的信息管理</p>

          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span="24">
          <Card>
            <p slot="title">短信发送履历</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
          <br />

          <Card>
            <p slot="title">司机&乘客信息</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
      </Row>
      <br />
    </el-scrollbar>
  </div>
</template>


<style scoped>
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
.ivu-icon{
font-size: 10px;
}
</style>
<script>


export default {
  components: {  },
  data() {
    return {
      cqf: "50元",
      TotalUseTime: "450min",
      Kilometers: "450km",
      loadKey: true,
      formFields: {
        Variety: "申请单类型",
        DateRange: "2019-09-01",
        City: "北京市",
        AvgPrice: 8.88,
        Variety1: "",
        DateRange1: "2019-09-02",
        City1: "上海市",
        AvgPrice1: 7.72,
        DateRange2: "2019-09-03",
        City2: "广州市",
        AvgPrice2: 6.66,
        IsTop: "1",
      },
      formRules: [
        // 两列的表单，formRules数据格式为:[[{},{}]]
        [
          {
            title: "商品类型",
            dataKey: "age",
            // 如果这里绑定了data数据，后台不会加载此数据源
            data: [
              { key: "1", value: "1" },
              { key: "2", value: "2" },
            ],
            required: false,
            field: "Variety",
            disabled: true,
            type: "select",
          },
          {
            dataKey: "city",
            title: "所在城市",
            field: "City",
            disabled: true,
            type: "select",
            data: [],
          },
          {
            title: "成交均价",
            type: "number",
            field: "AvgPrice",
            disabled: true,
          },
        ],
        [
          {
            dataKey: "city",
            title: "所在地区",
            field: "City1",
            disabled: true,
            type: "select",
            data: [],
          },
          {
            title: "销售价格",
            field: "AvgPrice1",
            type: "number",
            disabled: true,
          },
          {
            title: "审核日期",
            // range: true, //设置为true可以选择开始与结束日期
            required: false,
            field: "DateRange",
            type: "date",
            disabled: true,
          },
        ],
        [
          {
            dataKey: "city",
            title: "详细地址",
            field: "City2",
            disabled: true,
            type: "select",
            data: [],
          },
          {
            title: "平均重量",
            field: "AvgPrice2",
            type: "number",
            disabled: true,
          },
          {
            type: "date",
            title: "生产日期",
            field: "DateRange2",
            disabled: true,
          },
        ],
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>
