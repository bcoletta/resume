<script setup>
import OpenIcon from '@/assets/icons/open.svg';

const { item } = defineProps(['item']);
</script>

<template>
  <a class="subtitle proj-title" :href="item.link" target="_blank">
    {{ item.title }}<img :src="OpenIcon">
  </a>

  <div class="description">{{ item.description }}</div>

  <div v-if="item.technologies && item.technologies.length">
    Technologies Used: {{ item.technologies.join(', ') }}
  </div>
</template>

<style scoped lang="scss">
.proj-title {
  display: flex;
  align-items: center;

  img {
    height: 1em;
    aspect-ratio: 1;
    margin-left: .25em;
  }
}

.description {
  margin: .5em 0;
}
</style>