<script setup>
import { ref } from 'vue';
import PageHead from '../components/PageHead.vue';
import JoinBand from '../components/JoinBand.vue';

const sent = ref(false);

function submit() {
  sent.value = true;
}
</script>

<template>
  <PageHead
    eyebrow="Hubungi"
    title="Mula dengan satu soalan."
    lead="E-mel, WhatsApp atau TechHelp JMTI untuk pertanyaan."
    image="./images/dzoom-739.webp"
    image-alt="Ahli kelab dalam sesi perbincangan"
    caption="Sesi perbincangan, JMTI"
    :img-width="739"
    :img-height="415"
    priority
  />

  <section class="section" aria-labelledby="contact-title">
    <div class="container contact-grid">
      <div>
        <p class="section-mark">Saluran</p>
        <h2 id="contact-title">Cara menghubungi kami.</h2>

        <ul class="channels">
          <li class="channel">
            <span class="channel__label">E-mel</span>
            <a class="channel__value" href="mailto:kelabdigital@gmail.com">kelabdigital@gmail.com</a>
          </li>
          <li class="channel">
            <span class="channel__label">Portal</span>
            <a class="channel__value" href="https://www.jmti.gov.my" rel="noopener">www.jmti.gov.my</a>
          </li>
          <li class="channel">
            <span class="channel__label">Lokasi</span>
            <span class="channel__value">Pusat Komputer, Aras 2, JMTI</span>
          </li>
          <li class="channel">
            <span class="channel__label">Media sosial</span>
            <span class="channel__value">@TechHelpJMTI</span>
          </li>
        </ul>
      </div>

      <div class="contact-form">
        <p class="section-mark">Borang pertanyaan</p>
        <h2>Hantar mesej ringkas.</h2>
        <p class="muted">
          Borang ini belum disambungkan ke pelayan. Untuk respons terus, e-mel
          <a href="mailto:kelabdigital@gmail.com">kelabdigital@gmail.com</a>.
        </p>

        <form class="form" @submit.prevent="submit">
          <div class="field">
            <label for="contact-nama" class="field__label">Nama penuh</label>
            <input id="contact-nama" name="nama" class="field__control" type="text" autocomplete="name" required>
          </div>

          <div class="field">
            <label for="contact-matrik" class="field__label">No. matrik</label>
            <input id="contact-matrik" name="matrik" class="field__control" type="text" required>
          </div>

          <div class="field">
            <label for="contact-subjek" class="field__label">Subjek</label>
            <input id="contact-subjek" name="subjek" class="field__control" type="text" required>
          </div>

          <div class="field">
            <label for="contact-mesej" class="field__label">Mesej</label>
            <textarea id="contact-mesej" name="mesej" class="field__control" rows="4" required></textarea>
          </div>

          <button class="btn btn--primary" type="submit">Hantar mesej</button>
        </form>

        <p v-if="sent" class="notice" role="status">
          Borang ini belum disambungkan ke pelayan. Tiada data dihantar. Sila e-mel
          kelabdigital@gmail.com untuk pertanyaan.
        </p>
      </div>
    </div>
  </section>

  <JoinBand />
</template>
