<template>
  <input
    :type="type"
    :value="modelValue"
    @input="handleInput"
    :class="[
      'placeholder:text-[0.875rem] md:placeholder:text-[1rem] w-full h-[56px] p-[16px] rounded-lg border-[1px] border-[#ECECEC]',
      customClass
    ]"
    :placeholder="placeholder"
  />
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '請輸入'
  },
  customClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>
