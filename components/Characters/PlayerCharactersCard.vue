<script setup lang=ts>
import CollapsableItemsCard from "../Common/Card/CollapsableItemsCard.vue";

const items = [
  {text: 'No', icon: 'mdi-clock'},
  {text: 'Audience', icon: 'mdi-account'},
  {text: 'Conversions', icon: 'mdi-flag'},
];
</script>

<template>
  <CollapsableItemsCard title="Spieler Charaktere" :items="items"/>
</template>

<style scoped>
</style>