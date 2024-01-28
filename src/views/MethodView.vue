<script setup lang="ts">
import { ref } from 'vue';

const todos = ref([
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
]);
const input=ref('');

function onAddTodo() {
  const trimmedInput = input.value.trim();
  
  if (trimmedInput.length === 0) {
    return;
  }
  
  const newTodo = {
    id: Math.floor(Math.random() * 100),
    text: trimmedInput,
    completed: false
  };
  
    todos.value=[...todos.value, newTodo];
    input.value='';
}

function onRemoveTodo(id: number) {
    todos.value=todos.value.filter(t => t.id!=id);
}
</script>

<template>
<input v-model="input" type="text">
<button @click="onAddTodo()">Add</button> 

<ul>
    <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox"  v-model="todo.completed">
        <span class="todoText">{{ todo.text }}</span>
        <button @click="onRemoveTodo(todo.id)">x</button>
    </li>
</ul>
</template>

<style scoped>

</style>