<template> 
    <div class="counter">
        <button @click="increament">+</button>
        <button @click="decreament">-</button>
        <p>{{num}}</p>
    </div>
</template>

<script>
    export default{
        name: 'Counter',
        data(){
            return {
                num: 0,
            }
        },
        methods:{
            increament(){
                this.num++
            },
            decreament(){
                this.num--
            }
        }
    }
</script>