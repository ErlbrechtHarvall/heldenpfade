<script setup lang=ts>
import type {ListItem} from "@customTypes/lists";
import DiaryTable from "@components/Diary/DiaryTable.vue";

const items: ListItem[] = [
  {text: 'TEST', subtitle: "Eintrag vom 21.04.2024 - Michael"},
  {text: 'Audience', subtitle: "Eintrag vom 21.04.2024 - Michael"},
  {text: 'Conversions', subtitle: "Eintrag vom 21.04.2024 - Michael"},
];
</script>

<template>
  <v-sheet class="mx-auto" color="transparent">
    <div class="d-flex justify-space-between align-center mb-8 border-b-md">
      <h1 class="text-red-darken-4">Chronik</h1>

      <v-btn class="mr-4" color="primary" size="x-small">
        Neuer Eintrag
      </v-btn>
    </div>

    <DiaryTable/>
  </v-sheet>
  <!--  <CollapsableItemsCard title="Tagebuch" subtitle="Letzter Eintrag - 21.04.2024 Michael"-->
  <!--                        :items="items"/>-->
</template>

<style scoped>
</style>