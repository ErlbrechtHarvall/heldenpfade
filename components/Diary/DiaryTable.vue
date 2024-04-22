<script setup lang="ts">
const diaryEntries = [
  {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  }, {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  }, {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  }, {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  }, {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  }, {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  }, {
    title: 'Pakt mit Asrella',
    author: 'Michael',
    date: '23.04.2024',
  },
];
</script>

<template>
  <v-table class="rounded-xl">
    <thead>
    <tr class="border border-b-lg border-secondary">
      <th colspan="5" class="text-right">
        <v-btn class="mr-4" color="primary" size="small">
          Neuer Eintrag
        </v-btn>
      </th>
    </tr>

    <tr>
      <th></th>
      <th class="text-left w-100">
        Titel
      </th>
      <th class="text-left">
        Datum
      </th>
      <th class="text-left">
        Autor
      </th>
      <th>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in diaryEntries" :key="item.title">
      <td class="text-no-wrap">
        <span class="mr-4">
          <v-icon> mdi-account</v-icon>
          <v-tooltip activator="parent" location="start">
            Characters!
          </v-tooltip>
        </span>

        <span>
          <v-icon>mdi-map</v-icon>
          <v-tooltip activator="parent" location="start">
            Locations!
          </v-tooltip>
        </span>
      </td>

      <td>{{ item.title }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.author }}</td>
      <td class="text-no-wrap">
        <v-btn class="mr-4" color="secondary" size="x-small">
          Bearbeiten
        </v-btn>
        <v-btn color="error" size="x-small">
          Löschen
        </v-btn>

      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
</style>