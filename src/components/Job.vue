<script setup>
const { item } = defineProps([ 'item' ]);
</script>

<template>
  <div class="subtitle">
    {{ item.position }} at {{ item.title }}
  </div>
  <div>{{ item.dates }}</div>

  <ul>
    <li v-for="(pt, j) in item.points" :key="`${item.title}-point-${j}`">{{ pt }}</li>
  </ul>
</template>

<style scoped lang="scss">

</style>