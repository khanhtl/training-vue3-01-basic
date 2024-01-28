<script setup lang="ts">
import Generic from '@/components/Generic.vue';
const todos=[
    {
        id: 1,
        text: 'Working',
        completed: false
    }
]
</script>

<template>
<Generic :id="100" :items="todos"></Generic>
</template>

<style lang="scss">

</style>