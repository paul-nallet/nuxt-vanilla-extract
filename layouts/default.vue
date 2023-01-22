<template>
    <span>
        <CustomCursor></CustomCursor>
        <slot></slot>
    </span>
</template>

<script lang="ts" setup>
const { isDark } = useColorPreference()
</script>