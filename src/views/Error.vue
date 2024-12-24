<template>
  <div class="min-h-screen bg-[#F7F2EE] flex items-center justify-center">
    <div class="text-center">
      <div class="bg-[#140F0A] p-6 rounded-lg shadow-xl">
        <h1 class="text-6xl text-white font-bold">404</h1>
        <p class="text-lg text-white mt-4">抱歉，您訪問的頁面不存在。</p>
        <p class="text-sm text-white mt-2">請檢查您的網址或返回首頁。</p>
        <router-link
          to="/home"
          class="inline-block mt-6 px-6 py-2 text-lg text-[#140F0A] bg-[#BF9D7D] rounded-full transition duration-300 hover:bg-[#BF9D7D] hover:text-white"
        >
          返回首頁
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter, useRoute } from 'vue-router'
</script>
