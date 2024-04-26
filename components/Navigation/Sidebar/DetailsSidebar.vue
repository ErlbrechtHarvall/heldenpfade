<script setup lang="ts">
const items = [
  {text: 'Chronik', icon: 'mdi-clock'},
  {text: 'NPCs', icon: 'mdi-flag'},
  {text: 'Spieler Charaktere', icon: 'mdi-account'},
  {text: 'Orte', icon: 'mdi-account'},
  {text: 'Gegenstände', icon: 'mdi-account'},
];

enum SidebarItemSections {
  MENU = 'MENU',
  ADMIN = 'ADMIN'
}

type SidebarItem = {
  title: string;
  subtitle?: string;
  icon?: string;
};

interface SidebarSection extends SidebarItem {
  items: SidebarItem[];
}

type Sidebar = {
  [key in SidebarItemSections]: SidebarSection;
};


const sidebarSections: SidebarSection[] = [
  {
    title: 'Menü',
    subtitle: 'heldenpfade',
    items: [
      {title: 'Chronik', icon: 'mdi-clock'},
      {title: 'NPCs', icon: 'mdi-flag'},
      {title: 'Spieler Charaktere', icon: 'mdi-account'},
      {title: 'Orte', icon: 'mdi-account'},
      {title: 'Gegenstände', icon: 'mdi-account'},
    ]
  },
  {
    title: 'Admin',
    items: [
      {title: 'Kampagnen'},
      {title: 'Accounts'},
    ]
  }
];

const lastListItemCssClasses = {
  'my-8': sidebarSections.length
}
</script>

<template>
  <v-list>
    <template v-for="(sidebarSection, index) in sidebarSections">
      <v-list-item :title="sidebarSection.title" :subtitle="sidebarSection.subtitle"/>
      <v-divider/>
      <v-list-item v-for="item in sidebarSection.items" link
                   :title="item.title" :value="item"/>

      <div v-if="index + 1 < sidebarSections.length" class="my-8"/>
    </template>
  </v-list>
</template>

<style scoped>
</style>