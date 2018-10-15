<template>
    <div class="china">
        <p>i am China.vue</p>
        <router-link to="/china/beijing">Beijing</router-link>
        <router-link to="/china/shanghai">Shanghai</router-link>
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
                this.$router.push({name: 'Beijing', params: {id: 123}})
            },
            jumpPageShanghai(){
                // with query, name or whole path,  /china/shanghai?district=pudong
                // this.$router.push({path: '/china/shanghai?district=pudong', query: {district: 'pudong'}})
                this.$router.push({path: 'Shanghai', query: {district: 'pudong'}})
            }
        }
    }
</script>