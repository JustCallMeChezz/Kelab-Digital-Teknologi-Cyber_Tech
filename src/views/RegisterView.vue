<script setup>
import { computed, nextTick, onBeforeUnmount, reactive, ref } from 'vue';
import PageHead from '../components/PageHead.vue';

const hobbies = [
  'Hardware Repair & PC Building',
  'Web Development & UI Design',
  'System Diagnostics & Error Analysis',
  'Scripting & Software Troubleshooting',
  'PC Gaming & Hardware Benchmarking'
];

const courses = [
  'Teknologi Komputer',
  'Teknologi Elektronik',
  'Teknologi Pembuatan',
  'Teknologi Mekatronik'
];

const form = reactive({
  namaPelajar: '',
  email: '',
  password: '',
  jantina: '',
  hobi: [],
  kursus: '',
  alamatRumah: ''
});

const errors = reactive({
  namaPelajar: false,
  email: false,
  password: false,
  jantina: false,
  kursus: false,
  alamatRumah: false
});

const showPassword = ref(false);
const dialogRef = ref(null);
const resetToastVisible = ref(false);
const summary = ref([]);
const mailtoHref = ref('');
let toastTimer;

const hobbyCount = computed(() => form.hobi.length);
const hobbyLabel = computed(() =>
  hobbyCount.value ? `${hobbyCount.value} dipilih` : 'Pilih satu atau lebih'
);

function validate() {
  errors.namaPelajar = !form.namaPelajar.trim();
  errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  errors.password = !form.password;
  errors.jantina = !form.jantina;
  errors.kursus = !form.kursus;
  errors.alamatRumah = !form.alamatRumah.trim();
  return !Object.values(errors).some(Boolean);
}

function focusFirstError() {
  const first = Object.entries(errors).find(([, value]) => value);
  if (!first) return;

  const key = first[0];
  const element = key === 'jantina'
    ? document.querySelector('input[name="jantina"]')
    : document.getElementById(key);
  element?.focus();
}

function buildSummary() {
  const rows = [
    { label: 'Nama', value: form.namaPelajar.trim() },
    { label: 'E-mel', value: form.email.trim() },
    { label: 'Jantina', value: form.jantina },
    { label: 'Hobi', value: form.hobi.length ? form.hobi.join(', ') : 'Tiada' },
    { label: 'Kursus', value: form.kursus },
    { label: 'Alamat', value: form.alamatRumah.trim() }
  ];

  summary.value = rows;
  const body = rows.map((row) => `${row.label}: ${row.value}`).join('\n');
  mailtoHref.value = `mailto:kelabdigital@gmail.com?subject=${encodeURIComponent('Pendaftaran Kelab Teknologi Digital')}&body=${encodeURIComponent(`${body}\n\nSaya memahami borang ini belum dihantar ke pelayan.`)}`;
}

async function submit() {
  if (!validate()) {
    await nextTick();
    focusFirstError();
    return;
  }

  buildSummary();
  await nextTick();
  dialogRef.value?.showModal();
}

function closeModal() {
  dialogRef.value?.close();
}

function onDialogClick(event) {
  if (event.target === dialogRef.value) closeModal();
}

function resetForm() {
  Object.assign(form, {
    namaPelajar: '',
    email: '',
    password: '',
    jantina: '',
    hobi: [],
    kursus: '',
    alamatRumah: ''
  });
  Object.keys(errors).forEach((key) => {
    errors[key] = false;
  });
  showPassword.value = false;

  if (dialogRef.value?.open) dialogRef.value.close();

  resetToastVisible.value = true;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    resetToastVisible.value = false;
  }, 4000);
}

onBeforeUnmount(() => clearTimeout(toastTimer));
</script>

<template>
  <PageHead
    eyebrow="Pendaftaran"
    title="Daftar minat anda."
    lead="Nyatakan minat; semak butiran sebelum menghantar e-mel."
  />

  <section class="section" aria-labelledby="register-title">
    <div class="container register-grid">
      <aside class="register-aside">
        <p class="section-mark">Sebelum mula</p>
        <h2 id="register-title">Satu borang, empat langkah.</h2>
        <p class="lead">
          Borang ini mengumpulkan maklumat asas untuk perbincangan dengan penasihat kelab.
          Tiada akaun dibuat dan tiada kata laluan dihantar.
        </p>

        <ol class="steps">
          <li class="step">
            <span class="step__no num">01</span>
            <span>Isi borang.</span>
          </li>
          <li class="step">
            <span class="step__no num">02</span>
            <span>Semak butiran.</span>
          </li>
          <li class="step">
            <span class="step__no num">03</span>
            <span>Hantar melalui e-mel.</span>
          </li>
          <li class="step">
            <span class="step__no num">04</span>
            <span>Tunggu taklimat kelab.</span>
          </li>
        </ol>

        <p class="notice">
          Borang ini belum disambungkan ke pelayan. Tiada data dihantar secara automatik.
          E-mel <a href="mailto:kelabdigital@gmail.com">kelabdigital@gmail.com</a> untuk urusan pendaftaran.
        </p>
      </aside>

      <form id="studentForm" class="form form--register" novalidate @submit.prevent="submit">
        <fieldset class="field field--group">
          <legend class="field__label">Maklumat peribadi</legend>

          <div class="field">
            <label for="namaPelajar" class="field__label">Nama pelajar <span aria-hidden="true">*</span></label>
            <input
              id="namaPelajar"
              name="namaPelajar"
              class="field__control"
              :class="{ 'is-invalid': errors.namaPelajar }"
              type="text"
              autocomplete="name"
              placeholder="Masukkan nama penuh"
              :aria-invalid="errors.namaPelajar"
              aria-describedby="err-namaPelajar"
              required
            >
            <p id="err-namaPelajar" v-show="errors.namaPelajar" class="field__error" aria-live="polite">
              Sila masukkan nama penuh pelajar.
            </p>
          </div>

          <div class="form__grid">
            <div class="field">
              <label for="email" class="field__label">E-mel <span aria-hidden="true">*</span></label>
              <input
                id="email"
                name="email"
                class="field__control"
                :class="{ 'is-invalid': errors.email }"
                type="email"
                autocomplete="email"
                placeholder="contoh@gmail.com"
                :aria-invalid="errors.email"
                aria-describedby="err-email"
                required
              >
              <p id="err-email" v-show="errors.email" class="field__error" aria-live="polite">
                Sila masukkan alamat e-mel yang sah.
              </p>
            </div>

            <div class="field">
              <label for="password" class="field__label">Kata laluan <span aria-hidden="true">*</span></label>
              <div class="field__password">
                <input
                  id="password"
                  name="password"
                  class="field__control"
                  :class="{ 'is-invalid': errors.password }"
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="new-password"
                  placeholder="Masukkan kata laluan"
                  :aria-invalid="errors.password"
                  aria-describedby="err-password"
                  required
                >
                <button
                  id="togglePassword"
                  class="field__toggle"
                  type="button"
                  :aria-pressed="showPassword"
                  aria-label="Tunjuk atau sembunyi kata laluan"
                  @click="showPassword = !showPassword"
                >
                  <svg v-if="showPassword" id="eyeIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.9 10.9 0 0 1 12 5c5.5 0 9 7 9 7a17 17 0 0 1-2.1 3.1M6.6 6.6C4.4 8.1 3 12 3 12s3.5 7 9 7c1.2 0 2.3-.3 3.3-.8" />
                  </svg>
                  <svg v-else id="eyeIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              <p id="err-password" v-show="errors.password" class="field__error" aria-live="polite">
                Sila masukkan kata laluan anda.
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset class="field field--group">
          <legend class="field__label">Jantina <span aria-hidden="true">*</span></legend>
          <div class="radio-grid" role="radiogroup" aria-label="Jantina">
            <label class="radio-card">
              <input v-model="form.jantina" class="control-input" type="radio" name="jantina" value="Lelaki" required>
              <span class="radio-dot" aria-hidden="true"></span>
              <span>Lelaki</span>
            </label>
            <label class="radio-card">
              <input v-model="form.jantina" class="control-input" type="radio" name="jantina" value="Perempuan">
              <span class="radio-dot" aria-hidden="true"></span>
              <span>Perempuan</span>
            </label>
          </div>
          <p id="err-jantina" v-show="errors.jantina" class="field__error" aria-live="polite">
            Sila pilih jantina anda.
          </p>
        </fieldset>

        <fieldset class="field field--group">
          <legend class="field__legend">
            <span class="field__label">Hobi</span>
            <span id="hobbyCount" class="field__hint" :class="{ 'is-active': hobbyCount }">{{ hobbyLabel }}</span>
          </legend>

          <div class="hobby-grid">
            <label
              v-for="(hobby, index) in hobbies"
              :key="hobby"
              class="hobby-card"
              :class="{ 'hobby-card--wide': index === hobbies.length - 1 }"
            >
              <input v-model="form.hobi" class="control-input hobby-checkbox" type="checkbox" name="hobi" :value="hobby">
              <span class="check-indicator" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>
              <span>{{ hobby }}</span>
            </label>
          </div>
        </fieldset>

        <fieldset class="field field--group">
          <legend class="field__label">Akademik</legend>

          <div class="field">
            <label for="kursus" class="field__label">Kursus <span aria-hidden="true">*</span></label>
            <select
              id="kursus"
              name="kursus"
              v-model="form.kursus"
              class="field__control"
              :class="{ 'is-invalid': errors.kursus }"
              :aria-invalid="errors.kursus"
              aria-describedby="err-kursus"
              required
            >
              <option value="" disabled>Sila pilih kursus</option>
              <option v-for="course in courses" :key="course" :value="course">{{ course }}</option>
            </select>
            <p id="err-kursus" v-show="errors.kursus" class="field__error" aria-live="polite">
              Sila pilih kursus pengajian anda.
            </p>
          </div>

          <div class="field">
            <label for="alamatRumah" class="field__label">Alamat rumah <span aria-hidden="true">*</span></label>
            <textarea
              id="alamatRumah"
              name="alamatRumah"
              v-model="form.alamatRumah"
              class="field__control"
              :class="{ 'is-invalid': errors.alamatRumah }"
              rows="3"
              autocomplete="street-address"
              placeholder="Masukkan alamat rumah"
              :aria-invalid="errors.alamatRumah"
              aria-describedby="err-alamatRumah"
              required
            ></textarea>
            <p id="err-alamatRumah" v-show="errors.alamatRumah" class="field__error" aria-live="polite">
              Sila masukkan alamat rumah anda.
            </p>
          </div>
        </fieldset>

        <div class="form__actions">
          <button id="btnPadam" class="btn btn--ghost" type="button" @click="resetForm">Padam</button>
          <button id="btnHantar" class="btn btn--primary" type="submit">Hantar</button>
        </div>
      </form>
    </div>
  </section>

  <dialog
    id="confirmationModal"
    ref="dialogRef"
    class="dialog"
    aria-labelledby="modalTitle"
    aria-describedby="modalSummary"
    @click="onDialogClick"
  >
    <div class="dialog__body">
      <p class="section-mark">Semakan</p>
      <h2 id="modalTitle">Borang belum dihantar.</h2>

      <div id="modalSummary" class="dialog__summary">
        <p>
          Borang ini belum disambungkan ke pelayan. Tiada data dihantar secara automatik.
          Semak butiran di bawah dan hantar melalui e-mel jika betul.
        </p>

        <dl>
          <div v-for="row in summary" :key="row.label">
            <dt>{{ row.label }}</dt>
            <dd>{{ row.value }}</dd>
          </div>
        </dl>

        <p><a class="arrow-link" :href="mailtoHref">Hantar butiran melalui e-mel</a></p>
        <p class="muted">Kata laluan tidak dimasukkan ke dalam e-mel.</p>
      </div>
    </div>

    <div class="dialog__actions">
      <button id="closeModalBtn" class="btn btn--primary" type="button" @click="closeModal">Tutup</button>
    </div>
  </dialog>

  <div id="resetToast" class="toast" :class="{ 'is-visible': resetToastVisible }" role="status" aria-live="polite">
    Borang telah dikosongkan.
  </div>
</template>
