<template>
  <div :class="['w-[97px] h-[97px] inline-block px-[16px] py-[20px] mr-[16px] bg-[#FFFFFF] rounded-lg', customClass]">
    <svg class="w-[24px] h-[24px] mb-[12px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_40_4434)">
        <path
          class="fill-[#BF9D7D]"
          d="M20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.34L19 19H20L20.67 17H22V12C22 10.9 21.1 10 20 10ZM11 10H6V7H11V10ZM18 10H13V7H18V10Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_4434">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <p class="text-[0.875rem] md:text-[1rem] text-[#4B4B4B] font-bold"><slot></slot> 張大床</p>
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
