<script setup lang=ts>
import type {ListItem} from "@customTypes/lists";

const items: ListItem[] = [
  {text: 'TEST', subtitle: "Eintrag vom 21.04.2024 - Michael"},
  {text: 'Audience', subtitle: "Eintrag vom 21.04.2024 - Michael"},
  {text: 'Conversions', subtitle: "Eintrag vom 21.04.2024 - Michael"},
];
</script>

<template>
  <CollapsableItemsCard title="Tagebuch" subtitle="Letzter Eintrag - 21.04.2024 Michael"
                        :items="items"/>
</template>

<style scoped>
</style>