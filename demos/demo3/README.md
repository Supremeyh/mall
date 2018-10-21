# demo4 vue基础

> A Vue.js project

## 父子组件间通信
> 父组件通过 prop 给子组件下发数据，子组件通过$emit触发事件给父组件发送消息，即 prop 向下传递，事件向上传递。props down, events up.

## 路由
* SPA缺点：不利于SEO; 
* 浏览器前进后退会重新发送请求，没有合理利用缓存; 
* 无法记住之前滚动的位置;


## AMD、CMD、CommonJs和ES6对比
* AMD: Asynchronous Module Definition 异步模块定义。预先加载，依赖前置。 RequireJS 在推广过程中对模块定义的规范化产出。使用了异步加载和回调的方式，模块的加载不影响它后面语句的运行，优先照顾浏览器的模块加载场景。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行，即依赖前置。提供定义模块及异步加载该模块依赖的机制，通过define方法去定义模块 define(id?, dependencies?factory)，require方法去加载模块。
  
```
  define(['./a', './b'], function(a, b) { //依赖必须一开始就写好，a.js和b.js已经下载完成 a模块和b模块已经执行完，直接可用；
    a.doing()
    // blabla...
    b.doing()
})
```

* CMD: Common Module Definition 通用模块定义。按需加载，依赖就近。 SeaJS 在推广过程中对模块定义的规范化产出。提供模块定义及按需执行模块。 AMD和CMD最大的区别是对依赖模块的执行时机处理不同，注意不是加载的时机或者方式不同(都是异步加载模块)。 

```
define(function(require, exports, module) {
     var a = require("./a"); //等待a.js下载、执行完
     a.doing()
     // blabla...
     var b = require("./b"); //依赖就近书写
     b.doing()
})
```
* CommonJs 服务器端模块的规范，由Node推广使用。一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性； 输出模块变量的最好方法是使用module.exports对象； 加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象。

* ES6 export/import分别导出、引入模块。
  ES6模块与CommonJS模块的差异: CommonJS模块输出的是一个值的拷贝，一旦输出一个值，会被缓存，模块内部的变化就影响不到这个值，
  CommonJS模块是运行时加载，ES6模块是编译时输出接口;
  ES6 模块是动态引用，ES6模块输出的是值的引用，并且不会缓存值，模块里面的变量绑定其所在的模块。export通过接口，输出的是同一个值，不同的脚本加载这个接口，得到的都是同样的实例。这个变量是只读的，对它进行重新赋值会报错。
