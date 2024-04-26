<script setup lang="ts">

interface CardProps {
  title: string;
  subtitle?: string;
}

defineProps<CardProps>();

const show = ref<boolean>();

</script>

<template>
  <v-card class="mx-auto rounded-xl border-xl" color="primary" variant="text">
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>

    <slot/>
  </v-card>
</template>

<style scoped>
</style>