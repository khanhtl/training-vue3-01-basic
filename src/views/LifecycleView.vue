<script setup lang="ts">
import useTodoService, { type Todo } from "@/composables/useTodoService";
import { computed, onMounted, ref } from "vue";

const { fetchTodos, addTodo, removeTodo, isLoading } = useTodoService();
console.log("fetching to do on created");
const todos=ref<Todo[]>();

async function getTodos() {
  todos.value = await fetchTodos(); 
}

onMounted(() => {
  console.log("onMounted: fetching todo list...");
  getTodos();
});

onMounted(() => console.log('onMounted'))

const input = ref("");
const activeTodo = computed(() => todos.value?.filter((t) => !t.completed).length);
async function onAddTodo() {
  const trimmedInput = input.value.trim();

  if (trimmedInput.length === 0) {
    return;
  }

  const newTodo = {
    id: Math.floor(Math.random() * 100),
    text: trimmedInput,
    completed: false,
  };
  await addTodo(newTodo);
  getTodos();
  input.value = "";
}

async function onRemoveTodo(id: number) {
  await removeTodo(id);
  getTodos();
}
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <h1>Active Todo: {{ activeTodo }}</h1>
    <input v-model="input" type="text" />
    <button @click="onAddTodo()">Add</button>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.completed" />
        <span class="todoText">{{ todo.text }}</span>
        <button @click="onRemoveTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
