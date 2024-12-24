<template>
  <transition name="fade">
    <!-- 背景模糊遮罩 -->
    <div v-if="maskStore.isShow" class="fixed w-full h-full bg-black/10 backdrop-blur-sm top-0 left-0 z-40"></div>
    <!-- 背景模糊遮罩 END -->
  </transition>  
</template>
<style scoped>
/* 背景淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
<script setup>
// import { ref, defineProps, defineEmits } from 'vue'
import { useMaskStore } from '@/stores/mask'
const maskStore = useMaskStore()
</script>
