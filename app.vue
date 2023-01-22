
<template>
  <div :class="container">
    <div style="display: flex; flex-direction: column;">
      <div :class="gridName">
        <div v-for="letter in 'Paul'" :key="letter" :class="letterHover">
          <div>{{ letter }}</div>
        </div>
      </div>
      <div :class="gridLastname">
        <div v-for="letter in 'Nallet'" :key="letter" :class="letterHover">
          <div>{{ letter }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  gridName,
  letterHover,
  gridLastname,
  container,
} from "./assets/style.css";
import '@/assets/base/reset.css'
</script>
