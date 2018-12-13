<template>
    <div class="goodlist">
        <nav-header></nav-header>
        <nav-bread>
            <div class="goods" v-for="(item, idnex) in goodList">
              <div class="item">
                <span>名称:</span> {{item.productName}}  --  <span>价格:</span> {{item.salePrice}}
              </div>
            </div>
        </nav-bread>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import '../assets/css/base.css'
    import '../assets/css/product.css'
    import NavHeader from '../components/NavHeader.vue';
    import NavFooter from '../components/NavFooter.vue';
    import NavBread from '../components/NavBread.vue';

    export default{
        name: 'GoodsList',
        data(){
           return {
             goodList: []

           }
        },
        components: { 
            NavHeader,
            NavFooter,
            NavBread 
        },
        mounted(){
            this.$nextTick(function(){
              axios.get('/goods').then((res) => {
              console.log(res)
              let resData = res.data
              if(resData.status === '0'){
                this.goodList = resData.result.list
              } 
             })
          })
        }
    }
    
</script>