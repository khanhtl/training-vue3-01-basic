<script setup lang="ts">
import EmployeeList from "@/components/EmployeeList.vue";
import { onErrorCaptured, ref } from "vue";
const error: any = ref(null);
onErrorCaptured((e, instance, info) => {
    error.value=e;
    return true
});
</script>

<template>
  <div v-if="error">Error: {{ error }}</div>
  <Suspense v-else>
    <EmployeeList />
    <template #fallback>Loading employees...</template>
  </Suspense>
</template>

<style lang="scss"></style>
