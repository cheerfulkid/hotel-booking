<template>
  <router-link
    :to="to"
    :class="['font-bold text-[#FFFFFF] h-[56px] rounded-lg block p-[16px] justify-center flex items-center', customClass]"
  >
    <slot>按鈕</slot>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  to: {
    type: Object,
    required: true
  },
  customClass: {
    type: String,
    default: ''
  }
});
</script>