<script setup>
import PageHead from '../components/PageHead.vue';
import JoinBand from '../components/JoinBand.vue';
import ProjectVideo from '../components/ProjectVideo.vue';

const globeImage = './images/DGlobe-1600.webp';
const globeSrcset = './images/DGlobe-800.webp 800w, ./images/DGlobe-1600.webp 1600w, ./images/DGlobe-2400.webp 2400w';
const cssImage = './images/css-1144.webp';
const cssSrcset = './images/css-720.webp 720w, ./images/css-1144.webp 1144w';
const repairImage = './images/repair-608.webp';
const repairSrcset = './images/repair-400.webp 400w, ./images/repair-608.webp 608w';

const logbook = [
  {
    image: './images/pc-repair-720.webp',
    alt: 'Meja pembaikan dengan komponen komputer',
    width: 720,
    height: 405,
    title: 'Bench 4: BIOS & Thermal Fix',
    body: 'Pembersihan habuk dan gantian thermal paste.'
  },
  {
    image: './images/RAMdio.webp',
    alt: 'Paparan skrip ujian kestabilan RAM',
    width: 650,
    height: 493,
    title: 'Skrip Ujian Kestabilan RAM',
    body: 'Analisis ralat memori dan kelajuan jam.',
    plain: true
  }
];
</script>

<template>
  <PageHead
    eyebrow="Projek & bengkel"
    title="Belajar melalui projek."
    lead="Projek web, diagnostik dan logbook bengkel kelab."
  />

  <figure class="container wide-figure">
    <div class="media media--banner">
      <img
        :src="globeImage"
        :srcset="globeSrcset"
        sizes="100vw"
        alt="Ilustrasi glob digital"
        width="1600"
        height="1067"
        loading="eager"
        fetchpriority="high"
      >
    </div>
    <figcaption class="caption">Projek digital, DGlobe</figcaption>
  </figure>

  <section class="section" aria-labelledby="feature-title">
    <div class="container project-feature">
      <figure class="project-feature__figure">
        <div class="media">
          <img
            :src="cssImage"
            :srcset="cssSrcset"
            sizes="(min-width: 60rem) 55vw, 100vw"
            alt="Pelajar sedang menulis kod CSS"
            width="1144"
            height="928"
            loading="lazy"
          >
        </div>
        <figcaption class="caption">Antara muka dan log pembaikan</figcaption>
      </figure>

      <div>
        <p class="section-mark">Projek web</p>
        <h2 id="feature-title">CSS & Sistem Diagnostik Web</h2>
        <p class="lead">
          Projek pembangunan antara muka laman web kelab menggunakan HTML5 dan CSS3 moden
          untuk memaparkan log pembaikan perkakasan secara sistematik.
        </p>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="video-title">
    <div class="container section__split">
      <div>
        <p class="section-mark">Video panduan</p>
        <h2 id="video-title">Computer Guide / Maintenance</h2>
        <p class="lead">
          Tonton panduan ringkas bagaimana ahli kelab menyusun susun atur responsif dan
          melakukan analisis masalah sistem.
        </p>
        <p class="muted">Video dimuatkan hanya selepas anda menekan butang main.</p>
      </div>

      <ProjectVideo />
    </div>
  </section>

  <section class="section" aria-labelledby="hardware-title">
    <div class="container section__split">
      <div>
        <p class="section-mark">Projek perkakasan</p>
        <h2 id="hardware-title">DIY PC Diagnostics</h2>
        <p class="lead">
          Menggunakan perisian diagnostik sumber terbuka dan peralatan ujian untuk mengenal
          pasti punca kegagalan komponen komputer.
        </p>
        <a class="arrow-link" href="./pendaftaran.html">Sertai bengkel</a>
      </div>

      <figure class="section__figure">
        <div class="media media--portrait">
          <img
            :src="repairImage"
            :srcset="repairSrcset"
            sizes="(min-width: 60rem) 40vw, 100vw"
            alt="Pelajar memeriksa komponen perkakasan"
            width="608"
            height="1080"
            loading="lazy"
          >
        </div>
        <figcaption class="caption">Diagnostik komponen</figcaption>
      </figure>
    </div>
  </section>

  <section class="section" aria-labelledby="logbook-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Logbook</p>
        <h2 id="logbook-title">Bengkel dan pembaikan.</h2>
        <p class="lead">Catatan ringkas daripada meja kerja kelab.</p>
      </header>

      <div class="logbook">
        <article v-for="entry in logbook" :key="entry.title" class="logbook__item">
          <div class="media" :class="{ 'media--plain': entry.plain }">
            <img :src="entry.image" :alt="entry.alt" :width="entry.width" :height="entry.height" loading="lazy">
          </div>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.body }}</p>
        </article>
      </div>
    </div>
  </section>

  <JoinBand />
</template>
