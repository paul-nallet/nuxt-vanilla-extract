<template>
    <div ref="pointer" style="color:aliceblue; pointer-events: none;">{{ mouse }}</div>
</template>

<script setup lang="ts">
const mouse = useMousePosition();

const pointer = ref<null | { style: {transform : string, transition: string }}>(null);

watch(mouse, (value) => {
    if (!pointer.value) return;

    pointer.value.style.transform = `translate(${value.x}px, ${value.y}px) `;
    pointer.value.style.transition = "transform 0.1s ease";
});
</script>