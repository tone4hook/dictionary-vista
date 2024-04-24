<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>
