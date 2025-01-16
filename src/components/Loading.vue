<template>
  <div v-if="loadingStore.isShow" class="z-60 fixed left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
    <svg class="svg" viewBox="25 25 50 50">
      <circle class="circle" cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<style scoped>
.svg {
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

.circle {
  fill: none;
  stroke: #bf9d7d;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>

<script setup>
// import { ref, defineProps, defineEmits } from 'vue'
import { useLoadingStore } from '@/stores/loading'
const loadingStore = useLoadingStore()
</script>
