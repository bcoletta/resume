<script setup>
import Education from '@/components/Education.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
import Portfolio from '@/components/Portfolio.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/Work.vue';
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

    // TODO - Combine Work/Porfolio/Eduction into component with slot for item
    <div class="section">
      <Work />
    </div>

    <hr>

    <div class="section">
      <Portfolio />
    </div>

    <hr>

    <div class="section">
      <Education />
    </div>
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