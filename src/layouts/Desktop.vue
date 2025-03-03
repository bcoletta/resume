<script setup>
import Education from '@/components/Education.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/Work.vue';
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
      <div>
        <Work/>
      </div>

      <div>
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
  }
}
</style>