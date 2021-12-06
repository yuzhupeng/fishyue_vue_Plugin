<template>
    <Form ref="formDynamic" :model="formDynamic" :label-width="80">
        <Form-item
            v-for="(item, index) in formDynamic.items"
            :key="item"
            :label="'项目' + (index + 1)"
            :prop="'items.' + index + '.value'"
            :rules="{required: true, message: '项目' + (index + 1) +'不能为空', trigger: 'blur'}">
            <Row>
                <Col span="18">
                    <Input type="text" :disabled="item.disableLinkAddress" v-model="item.value" placeholder="请输入..."></Input>
                </Col>
                <Col span="4" offset="1">
                    <Button type="ghost" @click="handleRemove(index)">删除</Button>
                </Col>
            </Row>
        </Form-item>
        <Form-item>
            <Row>
                <Col span="12">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
                </Col>
            </Row>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
            <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formDynamic: {
                    items: [
                        {
                            value: '',
                            disableLinkAddress:true
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.formDynamic.items.push({
                    value: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            }
        }
    }
</script>
