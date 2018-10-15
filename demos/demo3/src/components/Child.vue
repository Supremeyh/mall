<template> 
    <div class="counter">
        <p>子自: {{messenge}}</p>
        <p>子: {{msg}}</p>
        <button @click="say">change</button>
    </div>
</template>

<script>
    export default{
        name: 'Child',
        props: {
            msg: {
                type: String,
                default: 'hi'
            }
        },
        data(){
            return {
                messenge: 'child\'s own messenge'
            }
        },
        methods:{
            say(){
                this.$emit('childsay', 'hello parent')
            }
        }
    }
</script>