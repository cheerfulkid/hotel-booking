<template>
  <!-- 背景模糊遮罩 -->
  <div v-if="maskStore.isShow" class="fixed w-full h-full bg-black/10 backdrop-blur-sm top-0 left-0 z-40"></div>
  <!-- 背景模糊遮罩 END -->
</template>

<script setup>
// import { ref, defineProps, defineEmits } from 'vue'
import { useMaskStore } from '@/stores/mask'
const maskStore = useMaskStore()
</script>
