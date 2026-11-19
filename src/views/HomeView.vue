<script setup>
import JoinBand from '../components/JoinBand.vue';

const heroImage = './images/css-1144.webp';
const heroSrcset = './images/css-720.webp 720w, ./images/css-1144.webp 1144w';
const jmtiImage = './images/jmti-1000.webp';
const jmtiSrcset = './images/jmti-640.webp 640w, ./images/jmti-1000.webp 1000w';

const rows = [
  {
    num: '01',
    title: 'Bina antara muka yang jelas.',
    body: 'HTML, CSS dan JavaScript melalui projek sebenar: dari susun atur responsif hingga log pembaikan yang boleh dibaca.',
    href: './Project.html',
    link: 'Lihat projek web',
    image: './images/dzoom-739.webp',
    alt: 'Ahli kelab berbincang di hadapan komputer',
    width: 739,
    height: 415
  },
  {
    num: '02',
    title: 'Faham mesin, bukan hanya guna.',
    body: 'Buka casing, kenal komponen dan belajar membaca simptom sebelum menukar apa-apa.',
    href: './about.html',
    link: 'Lihat aktiviti hardware',
    image: './images/pc-repair-720.webp',
    alt: 'Meja pembaikan komputer dengan alat diagnostik',
    width: 720,
    height: 405
  },
  {
    num: '03',
    title: 'Selesaikan masalah dengan bukti.',
    body: 'Diagnostik BIOS, ralat memori dan log sistem: ujian dahulu, kesimpulan kemudian.',
    href: './Project.html',
    link: 'Lihat logbook bengkel',
    image: './images/repair-608.webp',
    alt: 'Pelajar memeriksa komponen perkakasan',
    width: 608,
    height: 1080
  }
];

const focus = [
  { num: '01', title: 'Web', body: 'HTML, CSS, JavaScript dan reka bentuk responsif.' },
  { num: '02', title: 'Hardware', body: 'PC building, diagnostik komponen, termal dan BIOS.' },
  { num: '03', title: 'Software', body: 'Konfigurasi OS, pemacu, pengoptimuman dan skrip utiliti.' },
  { num: '04', title: 'Analysis', body: 'Log ralat, BSOD, penanda aras dan pengoptimuman storan.' }
];
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__facts">
        <span>Kelab Teknologi Digital CyberTech</span>
        <span>JMTI 2026</span>
        <span>Web, Hardware, Systems</span>
      </div>

      <h1 class="hero__title">Belajar teknologi dengan membina.</h1>

      <div class="hero__body">
        <p class="lead">
          Pelajar JMTI meneroka web, perkakasan dan sistem melalui projek sebenar.
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="./pendaftaran.html">Sertai kelab</a>
          <a class="btn btn--ghost" href="./Project.html">Lihat projek</a>
        </div>
      </div>
    </div>

    <figure class="hero__media">
      <div class="media hero__figure">
        <img
          :src="heroImage"
          :srcset="heroSrcset"
          sizes="100vw"
          alt="Pelajar kelab sedang menulis kod CSS di makmal komputer"
          width="1144"
          height="928"
          loading="eager"
          fetchpriority="high"
        >
      </div>
      <figcaption class="container hero__caption">
        <span>Sesi di makmal JMTI</span>
        <span>Fotografi bengkel kelab</span>
      </figcaption>
    </figure>
  </section>

  <section class="section" aria-labelledby="work-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Apa yang kami buat</p>
        <h2 id="work-title">Belajar melalui kerja sebenar.</h2>
        <p class="lead">
          Tiga meja kerja, satu kitaran yang sama: faham masalah, buat, uji, dan terangkan.
        </p>
      </header>

      <div class="rows">
        <article v-for="row in rows" :key="row.num" class="row">
          <p class="row__no num">{{ row.num }}</p>
          <div class="row__copy">
            <h3 class="row__title">{{ row.title }}</h3>
            <p class="row__body">{{ row.body }}</p>
            <a class="arrow-link" :href="row.href">{{ row.link }}</a>
          </div>
          <div class="media row__media">
            <img :src="row.image" :alt="row.alt" :width="row.width" :height="row.height" loading="lazy">
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="focus-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Fokus</p>
        <h2 id="focus-title">Empat disiplin yang kami latih.</h2>
      </header>

      <div class="focus-grid">
        <article v-for="item in focus" :key="item.num" class="focus">
          <p class="focus__no num">{{ item.num }}</p>
          <div>
            <h3 class="focus__title">{{ item.title }}</h3>
            <p class="focus__body">{{ item.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="place-title">
    <div class="container section__split">
      <div>
        <h2 id="place-title">Makmal sebagai bilik darjah.</h2>
        <p class="lead">
          Kami berkumpul di Pusat Komputer, Aras 2. Setiap sesi bermula dengan soalan,
          dan berakhir dengan sesuatu yang boleh diuji.
        </p>

        <dl class="facts">
          <div class="fact">
            <dt>Tempat</dt>
            <dd>Pusat Komputer, Aras 2, JMTI</dd>
          </div>
          <div class="fact">
            <dt>Sesi</dt>
            <dd>Mingguan, diumumkan melalui kelab</dd>
          </div>
          <div class="fact">
            <dt>Untuk</dt>
            <dd>Pelajar JMTI</dd>
          </div>
        </dl>

        <a class="arrow-link" href="./about.html">Kenali kelab</a>
      </div>

      <figure class="section__figure">
        <div class="media media--wide">
          <img
            :src="jmtiImage"
            :srcset="jmtiSrcset"
            sizes="(min-width: 60rem) 50vw, 100vw"
            alt="Bangunan JMTI"
            width="1000"
            height="500"
            loading="lazy"
          >
        </div>
        <figcaption class="caption">JMTI, Pusat Komputer, Aras 2</figcaption>
      </figure>
    </div>
  </section>

  <JoinBand />
</template>
