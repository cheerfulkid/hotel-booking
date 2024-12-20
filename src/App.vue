<script setup lang="ts">
import { watchEffect } from 'vue';
import { useMaskStore } from '@/stores/mask'
const maskStore = useMaskStore()

watchEffect(() => {
  // 背景遮罩出現時，讓頁面卷軸禁止滾動
  // if (maskStore.isShow) {
  //   document.body.classList.add('overflow-hidden');
  // } else {
  //   document.body.classList.remove('overflow-hidden');
  // }
});
</script>

<template>
  <router-view />
</template>

<style scoped></style>
