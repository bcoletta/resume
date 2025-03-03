<script setup>
import Education from '@/components/Education.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/Work.vue';
import Portfolio from '@/components/Portfolio.vue';
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
      <div class="section">
        <Work/>
      </div>

      <hr>

      <div class="section">
        <Portfolio/>
      </div>

      <hr>

      <div class="section">
        <Education/>
      </div>
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