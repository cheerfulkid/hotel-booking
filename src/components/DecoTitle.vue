<template>
  <p
    :class="[
      'font-bold before:inline-block inline-block flex items-center before:h-[24px] before:w-[4px] before:rounded before:mr-[12px]',
      customClass
    ]"
  >
    <slot></slot>
  </p>
</template>

<script setup>
// import InfoSize from '../components/InfoSize.vue';
// import InfoBed from '../components/InfoBed.vue';
// import InfoPeople from '../components/InfoPeople.vue';
import { defineProps } from 'vue'

const props = defineProps({
  customClass: {
    type: String,
    required: false
  }
})
</script>
