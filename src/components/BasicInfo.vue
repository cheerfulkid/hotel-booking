<template>
  <InfoSize :customClass="customClass">{{ roomSize }}</InfoSize>
  <InfoBed :customClass="customClass">{{ bedCount }}</InfoBed>
  <InfoPeople :customClass="customClass">{{ peopleCount }}</InfoPeople>
</template>

<script setup>
import InfoSize from '@/components/InfoSize.vue'
import InfoBed from '@/components/InfoBed.vue'
import InfoPeople from '@/components/InfoPeople.vue'
// import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  roomSize: {
    type: String,
    required: true
  },
  bedCount: {
    type: String,
    required: true
  },
  peopleCount: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    required: false
  }
})

const route = useRoute()
</script>
