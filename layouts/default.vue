<script setup lang="ts">
import NavigationSidebar from "@components/Navigation/Sidebar/NavigationSidebar.vue";</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <AppBar/>

      <v-navigation-drawer>
        <NavigationSidebar/>
      </v-navigation-drawer>

      <v-main style="min-height: 300px;">
        <CampaignCollapsable/>

        <div class="mx-16 my-8 h-100">
          <h1>Chronik</h1>

          <v-sheet class="mx-auto rounded-lg">
            <slot/>
          </v-sheet>

        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>


<style scoped>
</style>