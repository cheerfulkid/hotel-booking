<template>
  <div class="flex p-[12px] items-center justify-center w-full h-full fixed left-0 top-0 z-50 bg-black/40 backdrop-blur-sm">
    <div class="w-full max-w-[1020px] h-[800px] bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-center">
      <div class="mb-[60px] w-[68px]">
        <img :src="`${loading}`" alt="" />
      </div>
      <img class="mb-[16px]" :src="`${logo_gold}`" alt="" />
      <p class="text-[1.5rem] font-bold">正在處理你的預訂</p>
    </div>
  </div>
</template>

<script setup>
// import InfoSize from '@/components/InfoSize.vue';
// import InfoBed from '@/components/InfoBed.vue';
// import InfoPeople from '@/components/InfoPeople.vue';
import loading from '@/assets/img/pc/loading.gif'
import logo_gold from '@/assets/img/pc/logo-gold.png'
import { defineProps } from 'vue'

const props = defineProps({
  customClass: {
    type: String,
    required: false
  }
})
</script>
