<template>
  <select
    :class="['text-[0.875rem] md:text-[1rem] w-full h-[56px] p-[16px] rounded-lg', customClass]"
    :value="name"
    @input="$emit('update:name', $event.target.value)"
    name=""
    id=""
  >
    <option value="">請選擇</option>
    <option v-for="item in data" :key="item" :value="propertyValue ? item[propertyValue] : item">
      {{ property ? item[property] : item }}
    </option>
  </select>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: [Array, Object, String, Number],
    default: []
  },
  propertyValue: {
    type: String,
    default: ''
  },
  property: {
    type: String,
    default: ''
  },
  name: {
    type: [ String, Number ],
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>
