<script setup>
import PageHead from '../components/PageHead.vue';
import JoinBand from '../components/JoinBand.vue';

const leaders = [
  { initials: 'AD', role: 'Leader', name: 'Al Darwisy bin Abdul Aziz' },
  { initials: 'IH', role: 'Co-Leader', name: 'Izzat Hakimy bin Hasrol Zaidi' },
  { initials: 'MZ', role: 'Executive', name: 'Muhammad Zikir Danish bin Zulkhairi' }
];

const activities = [
  {
    num: '01',
    title: 'Hardware Clinic',
    body: 'Sesi pembaikan dan pemasangan perkakasan. Fokus pada pemeriksaan, pembersihan dan gantian komponen.'
  },
  {
    num: '02',
    title: 'Web Dev Sprints',
    body: 'Satu skop kecil, satu tempoh singkat. Ahli membina antara muka dan menyemaknya bersama.'
  },
  {
    num: '03',
    title: 'Software & OS Setup',
    body: 'Klinik perisian dan sistem: pemasangan OS, pemacu, konfigurasi dan pengoptimuman asas.'
  },
  {
    num: '04',
    title: 'System Analysis',
    body: 'Analisis dan troubleshooting: membaca log, mengulang ujian dan menerangkan punca dengan bukti.'
  }
];

const steps = [
  'Isi borang pendaftaran.',
  'Hantar borang kepada penasihat kelab.',
  'Hadir sesi taklimat.',
  'Sertai aktiviti kelab.'
];

const techGroups = [
  {
    title: 'Pembangunan web',
    items: ['HTML', 'CSS', 'JavaScript', 'Reka bentuk responsif']
  },
  {
    title: 'Perkakasan',
    items: ['PC building', 'Diagnostik komponen', 'Pengurusan termal', 'BIOS/CMOS recovery']
  },
  {
    title: 'Perisian',
    items: ['Konfigurasi OS', 'Pengoptimuman sistem', 'Pengurusan pemacu', 'Skrip utiliti']
  },
  {
    title: 'Analisis & diagnostik',
    items: ['Log ralat', 'BSOD troubleshooting', 'Penanda aras prestasi', 'Pengoptimuman storan']
  }
];
</script>

<template>
  <PageHead
    eyebrow="Tentang"
    title="Kelab yang tumbuh melalui praktik."
    lead="Ahli, peranan dan kemahiran teknikal CyberTech."
    image="./images/dspace-596.webp"
    image-alt="Ruang kerja komputer JMTI"
    caption="Ruang kerja, Pusat Komputer, Aras 2"
    :img-width="596"
    :img-height="335"
    priority
  />

  <section class="section" aria-labelledby="about-title">
    <div class="container section__split">
      <div>
        <p class="section-mark">Siapa kami</p>
        <h2 id="about-title">Belajar dengan tangan, bukan hanya nota.</h2>
        <p class="lead">
          Kelab Teknologi Digital CyberTech ialah kelab pelajar JMTI. Kami mengumpulkan pelajar
          yang ingin memahami web, perkakasan, perisian dan sistem melalui kerja sebenar.
        </p>
      </div>

      <dl class="facts facts--stack">
        <div class="fact">
          <dt>Tempat</dt>
          <dd>Pusat Komputer, Aras 2, JMTI</dd>
        </div>
        <div class="fact">
          <dt>Khidmat</dt>
          <dd>E-mel kelabdigital@gmail.com</dd>
        </div>
        <div class="fact">
          <dt>Untuk</dt>
          <dd>Pelajar JMTI</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="section" aria-labelledby="leadership-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Kepimpinan</p>
        <h2 id="leadership-title">Barisan kepimpinan.</h2>
        <p class="lead">Kenali pelajar yang memegang peranan utama dalam kelab.</p>
      </header>

      <div class="leaders">
        <article v-for="leader in leaders" :key="leader.initials" class="leader">
          <span class="leader__initials" aria-hidden="true">{{ leader.initials }}</span>
          <p class="leader__role">{{ leader.role }}</p>
          <h3 class="leader__name">{{ leader.name }}</h3>
        </article>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="activities-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Aktiviti</p>
        <h2 id="activities-title">Apa yang berlaku sepanjang tahun.</h2>
      </header>

      <div class="rows">
        <article v-for="activity in activities" :key="activity.num" class="row row--no-media">
          <p class="row__no num">{{ activity.num }}</p>
          <div class="row__copy">
            <h3 class="row__title">{{ activity.title }}</h3>
            <p class="row__body">{{ activity.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="steps-title">
    <div class="container section__split">
      <div>
        <p class="section-mark">Cara menyertai</p>
        <h2 id="steps-title">Empat langkah untuk mula.</h2>
        <p class="lead">
          Tiada syarat pengalaman. Bawa rasa ingin tahu dan satu soalan.
        </p>
        <a class="btn btn--primary" href="./pendaftaran.html">Daftar minat</a>
      </div>

      <ol class="steps">
        <li v-for="(step, index) in steps" :key="step" class="step">
          <span class="step__no num">{{ String(index + 1).padStart(2, '0') }}</span>
          <span>{{ step }}</span>
        </li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="skills-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Kemahiran</p>
        <h2 id="skills-title">Teknologi yang kami latih.</h2>
      </header>

      <div class="tech-groups">
        <section v-for="group in techGroups" :key="group.title" class="tech-group">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </div>
  </section>

  <JoinBand />
</template>
