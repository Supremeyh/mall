<template>
    <div class="es6" id="es6">
        <button @click="print">print sum and minus</button>
    </div>
</template>

<script>
    // import * as util from '../../utils/util.js'
    import {sum, minus} from '../../utils/util.js'
    export default({
        name: 'ES6',
        methods: {
            print(){  
                // console.log(`sum: ${utils.sum(2, 3)}, minus:${utils.minus(5, 7)}`)
                console.log(`sum: ${sum(2, 3)}, minus:${minus(5, 7)}`)
            }
        }
    })
</script>   