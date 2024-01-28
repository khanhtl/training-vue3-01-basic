<script setup lang="ts">
import usePromise from "@/composables/usePromise";
import useTodoService, { type Todo } from "@/composables/useTodoService";
import { computed, onMounted, ref, watch } from "vue";

const { fetchTodos, addTodo, removeTodo } = useTodoService();

const searchTerm = ref("");
const input = ref("");

const getEvents = usePromise((searchTerm: string | null) =>
  fetchTodos(searchTerm)
);
const addEvents = usePromise((todo: Todo) => addTodo(todo));
const removeEvents = usePromise((id: number) => removeTodo(id));

onMounted(async () => {
    await getEvents.createPromise(searchTerm.value);
  
});

const activeTodo = computed(
  () => getEvents.result?.value?.filter((t: Todo) => !t.completed).length
);
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
  input.value = "";
  await addEvents.createPromise(newTodo);
  await getEvents.createPromise(searchTerm);
}

async function onRemoveTodo(id: number) {
  await removeEvents.createPromise(id);
  await getEvents.createPromise(searchTerm);
}

watch(searchTerm, (value) => {
  getEvents.createPromise(searchTerm.value);
});
</script>

<template>
  <h1>Filter Todo:</h1>
  <input type="text" v-model="searchTerm" />
  <div v-if="getEvents.loading.value">
    Loading...
  </div>
  <div v-else>
    <div v-if="!getEvents.result.value?.length">No data to display</div>
    <template v-else>
      <h1>Active Todo: {{ activeTodo }}</h1>
      <input v-model="input" type="text" />
      <button @click="onAddTodo()">Add</button>
      <ul>
        <li v-for="todo in getEvents.result.value">
          <input type="checkbox" v-model="todo.completed" />
          <span class="todoText">{{ todo.text }}</span>
          <button @click="onRemoveTodo(todo.id)">x</button>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped></style>
