<script setup>
import ResumeData from '@/assets/resume-data.json';

const work = ResumeData.work;
</script>

<template>
  <div class="title">Work Experience</div>

  <div v-for="(job, i) in work" :key="`job-${i}`" class="job"
       :class="i === work.length - 1 ? 'no-border' : ''">
    <div class="subtitle">
      {{ job.position }} at {{ job.title }}
    </div>
    <div>{{ job.dates }}</div>

    <ul>
      <li v-for="(pt, j) in job.points" :key="`job-${i}-point-${j}`">{{ pt }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.job {
  border-bottom: 1px dashed gmap.get($colors, blue, light);
  margin-bottom: .5em;
  padding-bottom: .5em;

  &.no-border {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
</style>