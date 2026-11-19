<script setup>
import { ref } from 'vue';

const playing = ref(false);
const videoId = 'Ryo8zb2Ry6E';

function play() {
  playing.value = true;
}
</script>

<template>
  <div class="video">
    <iframe
      v-if="playing"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`"
      title="Computer Guide / Maintenance"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <button v-else type="button" class="video__facade" aria-label="Mainkan video Computer Guide" @click="play">
      <span class="video__title">Computer Guide</span>
      <span class="video__play" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  </div>
</template>
