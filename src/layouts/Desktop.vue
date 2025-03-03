<script setup>
import Education from '@/components/Education.vue';
import Job from '@/components/Job.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
import Project from '@/components/Project.vue';
import ResumeData from '@/assets/resume-data.json';
import ResumeSection from '@/components/ResumeSection.vue';
import Skills from '@/components/Skills.vue';
</script>

<template>
  <div class="container">
    <div class="sidebar bg-light">
      <div class="sidebar-content">
        <PersonalInfo/>

        <hr/>

        <Skills/>
      </div>
    </div>

    <div class="main">
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
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;

  .sidebar {
    width: 25%;
    height: 100vh;
    position: fixed;

    .sidebar-content {
      padding: 1em;

      hr {
        border-color: gmap.get($colors, orange, light);
        margin: 1em -1em;
      }
    }
  }

  .main {
    margin-left: 25%;
    padding: 1em;
    max-width: 75%;

    hr {
      margin: 1em -1em;
      border-color: gmap.get($colors, blue, light);
    }

    .section {
      margin-top: 1em;
    }
  }
}
</style>