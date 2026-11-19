<script setup>
import SiteNav from './SiteNav.vue';
import SiteFooter from './SiteFooter.vue';

defineProps({
  page: { type: String, default: 'home' }
});
</script>

<template>
  <a class="skip" href="#main">Langkau ke kandungan</a>
  <SiteNav :page="page" />
  <main id="main">
    <slot />
  </main>
  <SiteFooter />
</template>
