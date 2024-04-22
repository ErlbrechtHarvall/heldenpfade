<script setup lang="ts">
import DiaryTable from "@components/Diary/DiaryTable.vue";

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout name="default">
    <DiaryTable/>
  </NuxtLayout>
</template>


<style scoped>

</style>