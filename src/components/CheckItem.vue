<template>
  <div class="flex items-center">
    <svg class="w-[24px] h-[24px] mr-[8px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_14_2332)">
        <path
          class="fill-[#BF9D7D]"
          d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_2332">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <p :class="['text-[#4B4B4B] font-bold', customClass]">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
})
</script>
