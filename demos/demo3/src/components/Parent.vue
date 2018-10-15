<template>
  <div class="hello">
      <!--通过:msg将父组件的数据传递给子组件-->
      <!--父组件监听子组件触发的childsay方法，调用自己的parentGet方法-->
      <Child :msg="msgs" @childsay="parentGet"/>
      <p>父: {{msgs}}</p>
      <p>{{fromchild}}</p>
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
