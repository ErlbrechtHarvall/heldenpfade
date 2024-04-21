<script setup lang="ts">
interface CollapsableCardProps {
  title: string;
  subtitle?: string;
  items: ListItem;
}

defineProps<CollapsableCardProps>();

const show = ref<boolean>();
</script>

<template>
  <v-card class="mx-auto" color="primary">
    <!--          <v-img-->
    <!--              height="200px"-->
    <!--              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"-->
    <!--              cover-->
    <!--          ></v-img>-->

    <v-card-title class="d-flex align-center">
      {{ title }}

      <v-spacer/>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"></v-btn>
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>

    <!--          <v-card-actions>-->
    <!--            &lt;!&ndash;            <v-text-field&ndash;&gt;-->
    <!--            &lt;!&ndash;                placeholder="Suche..."&ndash;&gt;-->
    <!--            &lt;!&ndash;            ></v-text-field>&ndash;&gt;-->

    <!--            <v-spacer></v-spacer>-->


    <!--          </v-card-actions>-->

    <v-expand-transition>
      <v-list density="compact" v-show="show">
        <v-list-item v-for="(item, index) in items" :key="index">
          <template v-slot:prepend v-if="item.icon">
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
          <v-list-item-subtitle>
            {{ item.subtitle }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
</style>