
<template>
    <div class="dynamic">
        <p>i am dynamic, testing on dynamic component.</p>
        <p>{{$route.params.dynamicId}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Dynamic'
    }
</script>