<script setup lang="tsx">
import type { JSX } from 'vue/jsx-runtime';


const {
  dynamicId = "Hello",
  userName = "tlkhanh",
  items = [1, 2, 3, 4, 5],
} = defineProps<{
  dynamicId?: string;
  userName?: string;
  items?: number[];
  customElement?: JSX.Element;
}>();
const vnode = (
  <div id={dynamicId}>
    hello, {userName}
    {items.map((item) => (
      <h1>{item}</h1>
    ))}
  </div>
);
</script>
<template>
  <vnode></vnode>
  <div>
    <p>Jsx component from props</p>
    <component v-if="customElement" :is="customElement"></component>
  </div>
</template>
