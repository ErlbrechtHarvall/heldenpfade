<script setup lang="ts">
import DiaryCard from "@components/Diary/DiaryCard.vue";

definePageMeta({
  layout: false,
})

const user2 = {
  id: 2,
  firstName: 'Max',
  lastName: 'Mustermann',
  age: 18,
};

const test = await useFetch('/api/users/users');

// const todo = await $fetch('/api/users/users', {
//   method: 'POST',
//   body: {
//     ...user2
//   }
// })

</script>

<template>
  <NuxtLayout name="default">
    <DiaryCard/>
  </NuxtLayout>
</template>


<style scoped>

</style>