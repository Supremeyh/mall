<template>
    <div class="china">
        <p>i am China.vue</p>
        <router-link to="/china/beijing">Beijing</router-link>
        <router-link to="/china/shanghai">Shanghai</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name: 'China'
    }
</script>