<script setup lang="ts">

import DiaryCard from "@components/Diary/DiaryCard.vue";
import NonPlayerCharactersCard from "@components/Characters/NonPlayerCharactersCard.vue";
import PlayerCharactersCard from "@components/Characters/PlayerCharactersCard.vue";

const isDrawerPermanent = ref<boolean>(true);

const open = ref<string[]>(['Users']);
const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
];
const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
];
</script>

<template>
  <v-navigation-drawer
      :width="1000"
      location="right"
      rail
      expand-on-hover
  >
    <v-list>
      <v-list-item
          prepend-avatar=""
          subtitle="Sonntagsrunde, 18:00 Uhr"
          title="Faeruns Geheimnisse"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon class="mr-4" icon="mdi-book-open-variant-outline"/>
          Tagebuch
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <DiaryCard/>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon class="mr-4" icon="mdi-book-open-variant-outline"/>
          NPCs
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <NonPlayerCharactersCard/>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon class="mr-4" icon="mdi-book-open-variant-outline"/>
          Charaktere
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <PlayerCharactersCard/>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-navigation-drawer--mini-variant, .v-navigation-drawer {
  overflow: visible !important;

  :deep(.v-navigation-drawer__content) {
    overflow: visible !important;
  }
}

</style>