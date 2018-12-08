<template>
    <div class="goodlist">
        <nav-header></nav-header>
        <nav-bread>
            <span>Goods</span>
            <span>phone</span>
        </nav-bread>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import '../assets/css/base.css'
    import '../assets/css/product.css'
    import NavHeader from '../components/NavHeader.vue';
    import NavFooter from '../components/NavFooter.vue';
    import NavBread from '../components/NavBread.vue';

    export default{
        name: 'GoodsList',
        data(){
           return {

           }
        },
        components: { 
            NavHeader,
            NavFooter,
            NavBread 
        }
    }
    
</script>