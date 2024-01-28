<script setup lang="ts">
defineSlots<{
    default?: (props: {msg: string}) => any
    items?: (props: {id: string}) => any
}>()
</script>

<template>
<div>
    <h3><slot :msg="'Hello world'">Default content</slot></h3>
    <slot id="1000" name="items"></slot>
</div>
</template>

<style lang="scss">

</style>