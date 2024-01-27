<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const lessons=[
  {
    path: '/',
    text: 'Setup'
  },
  {
    path: '/method',
    text: 'Method'
  },
  {
    path: '/computed',
    text: 'Computed'
  },
  {
    path: '/reactive-syntax',
    text: 'Reactive Syntax'
  },
  {
    path: '/modular',
    text: 'Module'
  },
  {
    path: '/lifecycle',
    text: 'Lifecycle'
  },
  {
    path: '/watch',
    text: 'Watch'
  },
  {
    path: '/sharing-state',
    text: 'Sharing State'
  },
  {
    path: '/susspense',
    text: 'Susspense'
  },
  {
    path: '/teleport',
    text: 'Teleport'
  },
];

</script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink v-for="lesson of lessons" :to="lesson.path">{{ lesson.text }}</RouterLink>
      </nav>
  </header>
  <RouterView />
  </div>
</template>

<style scoped>
</style>
