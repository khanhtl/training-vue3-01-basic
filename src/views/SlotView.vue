<script setup lang="ts">
import Slot from '@/components/Slot.vue';
</script>

<template>
<div>
    <Slot>
        <template #default="{msg}">
            Slot props:  {{ msg }}
        </template>
        <template #items="{id}">
            Slot props:  {{ id }}
        </template>
    </Slot>
</div>
</template>

<style lang="scss">

</style>