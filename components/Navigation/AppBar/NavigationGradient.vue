<script setup lang="ts">
</script>

<template>
  <v-img
      class="navigation__gradient"
  ></v-img>

</template>

<style scoped>
.navigation__gradient {
  background: rgba(147, 12, 16, 1);
  background: -moz-linear-gradient(45deg, rgba(147, 12, 16, 1) 0%, rgba(41, 0, 0, 0.94) 15%, rgba(41, 0, 0, 0.66) 85%, rgba(147, 12, 16, 0.6) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(147, 12, 16, 1)), color-stop(15%, rgba(41, 0, 0, 0.94)), color-stop(85%, rgba(41, 0, 0, 0.66)), color-stop(100%, rgba(147, 12, 16, 0.6)));
  background: -webkit-linear-gradient(45deg, rgba(147, 12, 16, 1) 0%, rgba(41, 0, 0, 0.94) 15%, rgba(41, 0, 0, 0.66) 85%, rgba(147, 12, 16, 0.6) 100%);
  background: -o-linear-gradient(45deg, rgba(147, 12, 16, 1) 0%, rgba(41, 0, 0, 0.94) 15%, rgba(41, 0, 0, 0.66) 85%, rgba(147, 12, 16, 0.6) 100%);
  background: -ms-linear-gradient(45deg, rgba(147, 12, 16, 1) 0%, rgba(41, 0, 0, 0.94) 15%, rgba(41, 0, 0, 0.66) 85%, rgba(147, 12, 16, 0.6) 100%);
  background: linear-gradient(45deg, rgba(147, 12, 16, 1) 0%, rgba(41, 0, 0, 0.94) 15%, rgba(41, 0, 0, 0.66) 85%, rgba(147, 12, 16, 0.6) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#930c10', endColorstr='#930c10', GradientType=1);
}
</style>