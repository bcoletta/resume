<script setup>
import ResumeData from '@/assets/resume-data.json';
import OpenIcon from '@/assets/icons/open.svg';

const education = ResumeData.education;
</script>

<template>
  <div class="title">Education</div>

  <div v-for="(edu, i) in education" :key="`edu-${i}`">
    <div class="subtitle">{{ edu.title }}</div>

    <a v-if="edu.link" :href="edu.link" target="_blank" class="view-cred">
      View Credential
      <img :src="OpenIcon">
    </a>
    <div v-if="edu.dates">{{ edu.dates }}</div>

    <ul>
      <li v-for="(pt, j) in edu.points" :key="`edu-${i}-pt-${j}`">
        {{ pt.header }}<span v-if="pt.description">: {{ pt.description }}</span>
      </li>
    </ul>
  </div>
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