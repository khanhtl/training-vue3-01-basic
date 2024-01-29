<script setup lang="ts">
import NewFeature from '@/components/NewFeature.vue';
import { ref } from 'vue';

const name=ref('tlkhanh');
const items=[1, 2, 3, 4, 5]

const src = ref('https://avatars.githubusercontent.com/u/79636784?v=4')
</script>

<template>
    <input type="text" v-model="name">
    <NewFeature :src v-model:items="items" v-model="name" />
</template>

<style lang="scss">

</style>