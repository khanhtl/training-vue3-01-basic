<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { lessons } from "./shared";
</script>

<template>
  <header>
    <nav>
      <RouterLink v-for="lesson of lessons" :to="lesson.path">{{
        lesson.text
      }}</RouterLink>
    </nav>
  </header>
  <div class="router-content">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
