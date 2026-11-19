<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

defineProps({
  page: { type: String, default: 'home' }
});

const links = [
  { id: 'home', label: 'Utama', href: './index.html' },
  { id: 'kelab', label: 'Kelab', href: './kelab.html' },
  { id: 'about', label: 'Tentang', href: './about.html' },
  { id: 'projects', label: 'Projek', href: './Project.html' },
  { id: 'contact', label: 'Hubungi', href: './service.html' },
  { id: 'register', label: 'Sertai', href: './pendaftaran.html', cta: true }
];

const primaryLinks = links.filter((link) => !link.cta);
const open = ref(false);
const toggleRef = ref(null);
const closeRef = ref(null);

function close() {
  if (open.value) {
    open.value = false;
    toggleRef.value?.focus();
  }
}

function toggle() {
  open.value = !open.value;
}

watch(open, async (value) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = value ? 'hidden' : '';
  if (value) {
    await nextTick();
    closeRef.value?.focus();
  }
});

function onKey(event) {
  if (event.key === 'Escape' && open.value) close();
}

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey);
  document.body.style.overflow = '';
});
</script>

<template>
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="./index.html" aria-label="Kelab Teknologi Digital CyberTech, ke laman utama">
        <span class="brand__mark" aria-hidden="true">//</span>
        <span class="brand__text">
          <span class="brand__name">Kelab Teknologi Digital</span>
          <span class="brand__sub">CyberTech, JMTI</span>
        </span>
      </a>

      <nav class="nav__links" aria-label="Navigasi utama">
        <a
          v-for="link in primaryLinks"
          :key="link.id"
          class="nav-link nav__link"
          :href="link.href"
          :aria-current="page === link.id ? 'page' : undefined"
        >{{ link.label }}</a>
        <a class="btn btn--primary nav__cta" href="./pendaftaran.html">Sertai</a>
      </nav>

      <button
        id="sidebarToggle"
        ref="toggleRef"
        class="nav__toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="sidebarDrawer"
        aria-label="Buka navigasi"
        @click="toggle"
      >
        <span class="nav__bar" aria-hidden="true"></span>
        <span class="nav__bar" aria-hidden="true"></span>
      </button>
    </div>
  </header>

  <div
    id="sidebarBackdrop"
    class="drawer-backdrop"
    :class="{ 'is-open': open }"
    aria-hidden="true"
    @click="close"
  ></div>

  <aside
    id="sidebarDrawer"
    class="drawer"
    :class="{ 'is-open': open }"
    :aria-hidden="!open"
    :inert="!open"
    aria-label="Menu navigasi"
  >
    <div class="drawer__head">
      <div class="brand__text">
        <span class="brand__name">Kelab Teknologi Digital</span>
        <span class="brand__sub">CyberTech, JMTI</span>
      </div>
      <button
        id="sidebarClose"
        ref="closeRef"
        class="drawer__close"
        type="button"
        aria-label="Tutup navigasi"
        @click="close"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav id="menuWrapper" class="drawer__nav" aria-label="Navigasi mudah alih">
      <a
        v-for="link in links"
        :key="link.id"
        class="nav-link drawer__link"
        :href="link.href"
        :aria-current="page === link.id ? 'page' : undefined"
        @click="close"
      >
        <span>{{ link.label }}</span>
      </a>
    </nav>

    <p class="drawer__foot">Pusat Komputer, Aras 2, JMTI, 2026</p>
  </aside>
</template>
