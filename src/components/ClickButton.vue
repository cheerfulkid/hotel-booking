<template>
  <router-link
    v-if="isLink === 'true'"
    :to="to"
    :class="['font-bold  h-[56px] rounded-lg block p-[16px] justify-center flex items-center', customClass]"
  >
    <slot>按鈕</slot>
  </router-link>
  <button v-else :class="['w-full font-bold  h-[56px] rounded-lg block p-[16px] justify-center flex items-center', customClass]">
    <slot>按鈕</slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  to: {
    type: Object,
    required: false
  },
  isLink: {
    type: String,
    default: 'true'
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>
