<script setup lang="ts">
import Popup from '@/components/Popup.vue';
import { ref } from 'vue';

const isShowPopup=ref(false);

</script>

<template>
<button @click="isShowPopup = true">Show popup</button>
<Teleport to="body">

    <Popup @close="isShowPopup = false" v-if="isShowPopup" />
</Teleport>
</template>

<style scoped>

</style>