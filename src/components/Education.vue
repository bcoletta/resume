<script setup>
import OpenIcon from '@/assets/icons/open.svg';

const { item } = defineProps([ 'item' ]);
</script>

<template>
  <div class="subtitle">{{ item.title }}</div>

  <a v-if="item.link" :href="item.link" target="_blank" class="view-cred">
    View Credential
    <img :src="OpenIcon">
  </a>
  <div v-if="item.dates">{{ item.dates }}</div>

  <ul>
    <li v-for="(pt, j) in item.points" :key="`${item.title}-pt-${j}`">
      {{ pt.header }}<span v-if="pt.description">: {{ pt.description }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
a.view-cred {
  color: inherit;
  display: flex;
  align-items: center;

  img {
    height: 1em;
    aspect-ratio: 1;
    margin-left: .25em;
  }
}
</style>