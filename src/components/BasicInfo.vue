<template> 
 <InfoSize>{{roomSize}}</InfoSize>
 <InfoBed>{{bedCount}}</InfoBed>
 <InfoPeople>{{peopleCount}}</InfoPeople>
</template>

<script setup>
import InfoSize from '../components/InfoSize.vue';
import InfoBed from '../components/InfoBed.vue';
import InfoPeople from '../components/InfoPeople.vue';
import { defineProps } from 'vue';

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
 }
});
</script>