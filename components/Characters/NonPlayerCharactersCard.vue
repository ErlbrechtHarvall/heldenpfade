<script setup lang=ts>
const show = ref<boolean>();

const items = [
  {text: 'asfgsdg', icon: 'mdi-clock'},
  {text: 'Audience', icon: 'mdi-account'},
  {text: 'Conversions', icon: 'mdi-flag'},
];
</script>

<template>
  <CollapsableItemsCard title="NPCs" :items="items"/>
</template>

<style scoped>
</style>