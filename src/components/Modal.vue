<template> 
 <div v-if="modalStore.isShow" class="flex items-end md:items-center justify-center w-full h-full fixed left-0 top-0 z-40 bg-black/40 backdrop-blur-sm p-[12px]">
  <div class="relative w-full overflow-hidden max-w-[600px] h-[237px] md:h-[304px] bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-between">
   <div class="flex items-center w-full min-h-[56px] px-[18px] bg-[#ECECEC] border-b-[1px] border-[#ECECEC] justify-between md:hidden">
    <p class="text-[0.875rem] font-bold">
     <slot name="title"></slot>
    </p>
    <button @click="modalStore.closeModal" class="w-[40px] h-[40px] flex items-center justify-center">
     <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_14_2300)">
       <path class="fill-[#4B4B4B]" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
      </g>
      <defs>
       <clipPath id="clip0_14_2300">
        <rect width="24" height="24" fill="white"/>
       </clipPath>
      </defs>
     </svg>
    </button>
   </div>
   <button @click="modalStore.closeModal" class="hidden md:block w-[40px] h-[40px] flex items-center justify-center absolute right-0 top-0">
    <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g clip-path="url(#clip0_14_2300)">
      <path class="fill-[#4B4B4B]" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
     </g>
     <defs>
      <clipPath id="clip0_14_2300">
       <rect width="24" height="24" fill="white"/>
      </clipPath>
     </defs>
    </svg>
   </button>  
   <slot name="content"></slot>   
  </div>
 </div>
 
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useModalStore } from '../stores/modal';
const props = defineProps({
 customClass: {
  type: String,
  required: false
 }
});
const modalStore = useModalStore();
</script>