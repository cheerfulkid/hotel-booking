<template>
  <input type="text" :class="['w-full h-[56px] p-[16px] rounded-lg border-[1px] border-[#ECECEC]', customClass]" :placeholder="placeholder">
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: '請輸入'
  },
  customClass: {
    type: String,
    default: ''
  }
});
</script>