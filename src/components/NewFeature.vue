<script setup lang="ts">
const $value = defineModel<string>();
const items=defineModel<number[]>("items");

defineProps<{
    src: string
}>();
</script>

<template>
  <div>
    <img :src>
    <p>Hello {{ $value }}</p>
    <button @click="$value = 'Tạ Long Khánh'">Change name</button>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
