<script setup lang="tsx">
import JsxComponent from '@/components/JsxComponent.vue';
function handleClick() {
    alert('clicked')
}

const CustomElement=<button onClick={() => handleClick()}>
    Custom Element
</button>
</script>

<template>
<JsxComponent :custom-element="CustomElement"></JsxComponent>
</template>

<style lang="scss">

</style>