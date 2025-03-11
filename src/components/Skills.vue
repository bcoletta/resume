<script setup>
const skills = [
  {
    type: 'title',
    name: 'Frontend Scripting',
  },
  {
    type: 'skill',
    name: 'JavaScript',
    rating: 100,
  },
  {
    type: 'skill',
    name: 'TypeScript',
    rating: 90,
  },
  {
    type: 'skill',
    name: 'VueJS',
    rating: 100,
  },
  {
    type: 'skill',
    name: 'Nuxt',
    rating: 90,
  },
  {
    type: 'skill',
    name: 'Chart.js',
    rating: 80,
  },
  {
    type: 'skill',
    name: 'NodeJS',
    rating: 70,
  },
  {
    type: 'title',
    name: 'Markup and Styling',
  },
  {
    type: 'skill',
    name: 'HTML',
    rating: 100,
  },
  {
    type: 'skill',
    name: 'CSS',
    rating: 95,
  },
  {
    type: 'skill',
    name: 'SCSS',
    rating: 90,
  },
  {
    type: 'skill',
    name: 'Vuetify',
    rating: 90,
  },
  {
    type: 'skill',
    name: 'Tailwind CSS',
    rating: 85,
  },
  {
    type: 'title',
    name: 'Backend',
  },
  {
    type: 'skill',
    name: 'AWS',
    rating: 75,
  },
  {
    type: 'skill',
    name: 'GraphQL',
    rating: 60,
  },
  {
    type: 'skill',
    name: 'MySQL',
    rating: 50,
  },
  {
    type: 'skill',
    name: 'Serverless',
    rating: 40,
  },
];

const getSkillStyle = (rating) => {
  return `width: ${ rating }%`;
}
</script>

<template>
  <div class="title">Skills</div>
  <div v-for="skl in skills" :key="skl.name" class="skill">
    <template v-if="skl.type === 'skill'">
      <div>
        {{ skl.name }}
      </div>

      <div class="rating-outer">
        <div class="rating-inner" :style="getSkillStyle(skl.rating)"></div>
      </div>
    </template>

    <div v-if="skl.type === 'title'" class="subtitle">
      {{ skl.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .subtitle {
    margin-top: .5em;
  }

  .rating-outer {
    min-width: 100px;
    max-width: 50%;
    height: .5em;
    flex-grow: 1;
    background-color: gmap.get($colors, orange, base);

    @media (min-width: gmap.get($breakpoints, 'lg')) {
      background-color: gmap.get($colors, orange, light);
    }

    .rating-inner {
      height: 100%;
      background-color: gmap.get($colors, blue, light);
    }
  }
}
</style>