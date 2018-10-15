<template>
  <div class="hello">
      <!--通过:msg将父组件的数据传递给子组件-->
      <!--父组件监听子组件触发的childsay方法，调用自己的parentGet方法-->
      <Child :msg="msgs" @childsay="parentGet"/>
      <p>父: {{msgs}}</p>
      <p>{{fromchild}}</p>
      <p>父组件通过 prop 给子组件下发数据，子组件通过$emit触发事件给父组件发送消息，即 prop 向下传递，事件向上传递。</p>
  </div>
</template>

<script>
import Child from './Child';
export default {
  name: 'Parent',
  data () {
    return {
      msgs: 'hello child',
      fromchild: ''
    }
  },
  components: {
    Child
  },
  methods: {
    parentGet(msg){
      this.fromchild = msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
