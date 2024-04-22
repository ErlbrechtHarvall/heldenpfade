<script setup lang=ts>
import DiaryCard from "../../Diary/DiaryCard.vue";
import NonPlayerCharactersCard from "../../Characters/NonPlayerCharactersCard.vue";
import PlayerCharactersCard from "../../Characters/PlayerCharactersCard.vue";</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel>

      <v-expansion-panel-title>
        <h2>Faeruns Schicksal</h2>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-row>
          <v-col>
            <DiaryCard/>
          </v-col>
          <v-col>
            <NonPlayerCharactersCard/>
          </v-col>
          <v-col>
            <PlayerCharactersCard/>
          </v-col>

        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
</style>