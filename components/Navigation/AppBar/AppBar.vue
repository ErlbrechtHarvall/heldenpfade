<script setup lang="ts">
import NavigationGradient from "./NavigationGradient.vue";
import CampaignSelection from "./CampaignSelection.vue";</script>

<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <NavigationGradient/>
    </template>

    <!--        <template v-slot:prepend>-->
    <!--          <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
    <!--        </template>-->

    <v-app-bar-title>
      Heldenpfade
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-img src="/img/header_logo.png"/>

    <v-spacer></v-spacer>

    <CampaignSelection/>

    <!--    <v-btn icon>-->
    <!--      <v-icon>mdi-home-switch</v-icon>-->
    <!--    </v-btn>-->

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
</style>