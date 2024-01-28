<script setup lang="ts">
const emits=defineEmits<{
    close: []
}>()
</script>

<template>
    <div class="popup-container">
        <div class="popup-content">
            <button @click="emits('close')" class="popup-close-btn">Đóng</button>
        </div>
    </div>
</template>

<style lang="scss">
.popup-container {
    position: fixed;
    inset: 0;
    background: rgba( #000000,  0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .popup-content {
        position: absolute;
        width: 560px;
        height: 400px;
        background: #fff;
        padding: 16px;
        .popup-close-btn {
            position: absolute;
            right: 16px;
            top: 16px;
            cursor: pointer;
        }
    }
}
</style>