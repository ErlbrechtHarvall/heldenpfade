<script setup lang="ts">
const items = [
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me 2'},
];
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn append-icon="mdi-home-switch" v-bind="props">
        Kampagne wechseln
      </v-btn>
    </template>

    <v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>


<style scoped>

</style>