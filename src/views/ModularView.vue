<script setup lang="ts">
import useTodoSpace from '@/use/todo-space';

const { input, activeTodo, onAddTodo, onRemoveTodo, todos }=useTodoSpace();

</script>

<template>
    <h1>Active Todo: {{ activeTodo }}</h1>
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