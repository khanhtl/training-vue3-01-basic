<script setup lang="ts">
import { ref } from "vue";

const count = ref(1);
const todos = [
  {
    id: 1,
    text: "Learn javascript",
    completed: true,
  },
  {
    id: 2,
    text: "Learn Vue.js",
    completed: false,
  },
];
</script>

<template>
  <h3>Count: {{ count }}</h3>
  <button @click="count--">Decrement</button>
  <button @click="count++">Increment</button>
  <p v-if="count>2">Count is more than 2</p>
  <p v-else="count>2">Count is less than 2</p>
  <ul>
    <li v-for="todo in todos">
      <input
        type="checkbox"
        :checked="todo.completed"
        v-model="todo.completed"
      />
      <span>{{ todo.text }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
