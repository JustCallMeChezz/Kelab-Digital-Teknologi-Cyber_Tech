<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  image: { type: String, default: '' },
  srcset: { type: String, default: '' },
  sizes: { type: String, default: '100vw' },
  imageAlt: { type: String, default: '' },
  caption: { type: String, default: '' },
  imgWidth: { type: Number, default: 1000 },
  imgHeight: { type: Number, default: 750 },
  priority: { type: Boolean, default: false }
});
</script>

<template>
  <header class="page-head">
    <div class="container page-head__grid">
      <div class="page-head__copy">
        <p v-if="eyebrow" class="section-mark">{{ eyebrow }}</p>
        <h1 class="page-head__title">{{ title }}</h1>
        <p v-if="lead" class="lead page-head__lead">{{ lead }}</p>
        <slot />
      </div>

      <figure v-if="image" class="page-head__figure">
        <div class="media page-head__media">
          <img
            :src="image"
            :srcset="srcset || undefined"
            :sizes="srcset ? sizes : undefined"
            :alt="imageAlt"
            :width="imgWidth"
            :height="imgHeight"
            :loading="priority ? 'eager' : 'lazy'"
            :fetchpriority="priority ? 'high' : undefined"
          >
        </div>
        <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
      </figure>
    </div>
  </header>
</template>
