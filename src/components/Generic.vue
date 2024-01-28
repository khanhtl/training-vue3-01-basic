<script setup lang="ts" generic="T extends string | number, U extends Todo">
import type { Todo } from '@/composables/useTodoService';


defineProps<{
    id: T,
    items: U[]
}>();



</script>

<template>
<div>
    <h1>ID: {{ id }}</h1>
    <ul>
      <li v-for="item in items">
        {{ item.text }}
    </li>  
    </ul>
</div>
</template>

<style lang="scss">

</style>