<script setup>
import PageHead from '../components/PageHead.vue';
import JoinBand from '../components/JoinBand.vue';

const sessions = [
  {
    num: '01',
    title: 'Hardware Clinic',
    body: 'Bawa mesin yang bermasalah atau bina satu dari komponen. Kami mulakan dengan pemeriksaan, bukan tekaan.'
  },
  {
    num: '02',
    title: 'Web Dev Sprint',
    body: 'Satu skop kecil, satu tempoh singkat. Habiskan antara muka yang boleh digunakan, kemudian semak bersama.'
  },
  {
    num: '03',
    title: 'Software & OS Setup',
    body: 'Pemasangan sistem, pemacu dan konfigurasi asas. Fokus pada sistem yang stabil dan boleh diulang.'
  },
  {
    num: '04',
    title: 'System Analysis',
    body: 'Baca log, ulang ujian dan tulis penemuan. Belajar menerangkan masalah dengan bukti.'
  }
];

const steps = [
  'Isi borang pendaftaran.',
  'Hantar butiran kepada penasihat kelab.',
  'Hadir sesi taklimat.',
  'Sertai aktiviti pertama.'
];

const audience = [
  {
    title: 'Pelajar baru',
    body: 'Tiada pengalaman diperlukan. Datang dengan rasa ingin tahu dan satu soalan.'
  },
  {
    title: 'Pembina',
    body: 'Jika anda suka membina antara muka atau memasang PC, bawa projek anda ke meja kami.'
  },
  {
    title: 'Pembaiki',
    body: 'Jika anda suka mencari punca masalah, meja diagnostik sentiasa terbuka.'
  }
];
</script>

<template>
  <PageHead
    eyebrow="Kelab"
    title="Satu kelab. Empat disiplin."
    lead="Kelab pelajar JMTI untuk web, perkakasan dan sistem."
    image="./images/jmti-1000.webp"
    srcset="./images/jmti-640.webp 640w, ./images/jmti-1000.webp 1000w"
    sizes="(min-width: 60rem) 40vw, 100vw"
    image-alt="Bangunan JMTI"
    caption="JMTI, Pusat Komputer, Aras 2"
    :img-width="1000"
    :img-height="500"
    priority
  />

  <section class="section" aria-labelledby="club-title">
    <div class="container section__split">
      <div>
        <p class="section-mark">Siapa kami</p>
        <h2 id="club-title">Kelab yang belajar melalui praktik.</h2>
        <p class="lead">
          Kami mengumpulkan pelajar yang ingin memahami teknologi dengan tangan. Setiap sesi
          bermula dengan soalan, dan berakhir dengan sesuatu yang boleh diuji.
        </p>
      </div>

      <dl class="facts facts--stack">
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
    </div>
  </section>

  <section class="section" aria-labelledby="sessions-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Setiap minggu</p>
        <h2 id="sessions-title">Empat jenis sesi.</h2>
        <p class="lead">Jadual sebenar diumumkan melalui kelab. Ini bentuk kerja yang kami lakukan.</p>
      </header>

      <div class="rows">
        <article v-for="session in sessions" :key="session.num" class="row row--no-media">
          <p class="row__no num">{{ session.num }}</p>
          <div class="row__copy">
            <h3 class="row__title">{{ session.title }}</h3>
            <p class="row__body">{{ session.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="join-steps-title">
    <div class="container section__split">
      <div>
        <p class="section-mark">Cara menyertai</p>
        <h2 id="join-steps-title">Empat langkah, tiada syarat pengalaman.</h2>
        <p class="lead">
          Pendaftaran bermula dengan borang. Selepas itu, penasihat kelab akan mengesahkan
          langkah seterusnya.
        </p>
        <a class="btn btn--primary" href="./pendaftaran.html">Buka borang</a>
      </div>

      <ol class="steps">
        <li v-for="(step, index) in steps" :key="step" class="step">
          <span class="step__no num">{{ String(index + 1).padStart(2, '0') }}</span>
          <span>{{ step }}</span>
        </li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="audience-title">
    <div class="container">
      <header class="section__head">
        <p class="section-mark">Untuk siapa</p>
        <h2 id="audience-title">Tiga cara untuk mula.</h2>
      </header>

      <div class="audience">
        <article v-for="item in audience" :key="item.title" class="audience__item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>

  <JoinBand />
</template>
