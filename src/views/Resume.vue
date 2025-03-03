<script setup>
import { computed, ref } from 'vue';
import Mobile from '@/layouts/Mobile.vue';
import Desktop from '@/layouts/Desktop.vue';

const MOBILE_BREAKPOINTS = [ 'xs', 'sm', 'md' ];
const DESKTOP_BREAKPOINTS = [ 'lg', 'xl' ];

let breakpoint = ref(null);

const isMobile = computed(() => {
  return MOBILE_BREAKPOINTS.includes(breakpoint.value);
});

const setBreakpoint = () => {
  breakpoint.value = window.getComputedStyle(document.body, ':before').content
      .replace(/\"/g, '');
};

window.addEventListener('resize', () => setBreakpoint(), false);

setBreakpoint();
</script>

<template>
  <Mobile v-if="isMobile" />
  <Desktop v-else />
</template>

<style scoped>

</style>
