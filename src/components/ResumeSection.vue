<script setup>
const { list, title } = defineProps([ 'list', 'title' ]);
</script>

<template>
  <div class="title">{{ title }}</div>

  <div
    v-for="(item, i) in list"
    :key="item.title"
    class="item"
    :class="i === list.length - 1 ? 'no-border' : ''"
  >
    <slot v-bind:item="item"/>
  </div>
</template>

<style scoped lang="scss">
.item {
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