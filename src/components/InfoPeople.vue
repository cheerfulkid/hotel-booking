<template>
  <div :class="['w-[97px] h-[97px] inline-block px-[16px] py-[20px] bg-[#FFFFFF] rounded-lg', customClass]">
    <svg class="w-[24px] h-[24px] mb-[12px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_40_4435)">
        <path
          class="fill-[#BF9D7D]"
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_4435">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <p class="text-[0.875rem] md:text-[1rem] text-[#4B4B4B] font-bold"><slot></slot> 人</p>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

const props = defineProps({
  customClass: {
    type: String,
    required: false
  }
})
</script>
