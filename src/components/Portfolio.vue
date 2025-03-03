<script setup>
import ResumeData from '@/assets/resume-data.json';
import OpenIcon from '@/assets/icons/open.svg';

const portfolio = ResumeData.portfolio;
</script>

<template>
  <div class="title">Portfolio</div>

  <div v-for="(proj, i) in portfolio" :key="`project-${i}`">
    <a class="subtitle proj-title" :href="proj.link" target="_blank">
      {{ proj.title }}<img :src="OpenIcon">
    </a>

    <div class="description">{{ proj.description }}</div>

    <div v-if="proj.technologies && proj.technologies.length">
      Technologies Used: {{ proj.technologies.join(', ') }}
    </div>
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