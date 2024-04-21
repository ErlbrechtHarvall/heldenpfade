<script setup lang="ts">

import CampaignCollapsable from "../components/Layout/CampaignCollapsable/CampaignCollapsable.vue";</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <AppBar/>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="" style="min-height: 300px;">
        <CampaignCollapsable/>

        Main Content
      </v-main>
    </v-layout>
  </v-app>
</template>


<style scoped>
</style>