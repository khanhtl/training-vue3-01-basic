<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const vm:any = reactive({
  todos: [
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
    ],
    input: '',
    activeTodo: computed(() => vm.todos.filter((t: any) => !t.completed).length)
});


function onAddTodo() {
  const trimmedInput = vm.input.trim();

  if (trimmedInput.length === 0) {
    return;
  }

  const newTodo = {
    id: Math.floor(Math.random() * 100),
    text: trimmedInput,
    completed: false,
  };

  vm.todos = [...vm.todos, newTodo];
  vm.todos.input = "";
}

function onRemoveTodo(id: number) {
  vm.todos = vm.todos.filter((t: any) => t.id != id);
}
</script>

<template>
  <h1>Active Todo: {{ vm.activeTodo }}</h1>
  <input v-model="vm.input" type="text" />
  <button @click="onAddTodo()">Add</button>

  <ul>
    <li v-for="todo in vm.todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <span class="todoText">{{ todo.text }}</span>
      <button @click="onRemoveTodo(todo.id)">x</button>
    </li>
  </ul>
</template>

<style scoped></style>
