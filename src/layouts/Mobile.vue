<script setup>
import Job from '@/components/Job.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
import ResumeData from '@/assets/resume-data.json';
import ResumeSection from '@/components/ResumeSection.vue';
import Skills from '@/components/Skills.vue';
import Project from '@/components/Project.vue';
import Education from '@/components/Education.vue';
</script>

<template>
  <div class="header bg-light">
    <PersonalInfo />
  </div>

  <div class="main">
    <div class="section">
      <Skills />
    </div>

    <hr>

    <ResumeSection :list="ResumeData.work" title="Work Experience">
      <template v-slot="item">
        <Job :item="item.item" />
      </template>
    </ResumeSection>

    <hr>

    <ResumeSection :list="ResumeData.portfolio" title="Portfolio">
      <template v-slot="item">
        <Project :item="item.item" />
      </template>
    </ResumeSection>

    <hr>

    <ResumeSection :list="ResumeData.education" title="Education">
      <template v-slot="item">
        <Education :item="item.item" />
      </template>
    </ResumeSection>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  border-bottom: 1px solid gmap.get($colors, blue, base);
  padding: 1em;
}

.main {
  margin-top: 1em;
  padding: 0 1em;

  hr {
    margin: 1em -1em;
    border-color: gmap.get($colors, blue, light);
  }

  .section {
    margin-top: 1em;
  }
}
</style>