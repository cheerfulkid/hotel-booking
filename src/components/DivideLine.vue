<template> 
 <hr :class="['border-0 bg-[#909090] h-[1px]', customClass]">
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
 customClass: {
  type: String,
  required: false
 }
});
</script>