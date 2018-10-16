<template>
    <div class="china">
        <p>i am China.vue</p>
        <router-link to="/china/beijing">Beijing</router-link>
        <!-- 命名路由用v-bind -->
        <router-link :to="{name: 'Shanghai'}">Shanghai</router-link> 
        <div>
            <button @click="jumpPageBeijing">jump to beijing</button>
            <button @click="jumpPageShanghai">jump to shanghai</button>
        </div>
        <router-view></router-view> 
    </div>
</template>

<script>
    export default{
        name: 'China',
        methods: {
            jumpPageBeijing(){
                // this.$router.push('beijing')
                this.$router.push({name: 'Beijing', params: {id: 123}}) //params是路由参数
            },
            jumpPageShanghai(){
                // query是页面地址跳转拼接参数
                // with query, name or whole path,  /china/shanghai?district=pudong
                // this.$router.push({path: '/china/shanghai?district=pudong', query: {district: 'pudong'}})
                this.$router.push({path: '/china/shanghai', query: {district: 'pudong'}})
            }
        }
    }
</script>