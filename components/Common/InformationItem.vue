<script setup lang=ts>
interface InformationItemProps {
  label: string;
  content: string | number;
}

defineProps<InformationItemProps>();
</script>

<template>
  <div>
    <div class="text-caption">
      {{ label }}
    </div>

    <div>
      {{ content }}
    </div>
  </div>
</template>

<style scoped>
</style>