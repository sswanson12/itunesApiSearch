<template>
  <div class="music">
    <div class="musicImage">
      <img :src="music.artworkUrl100" :alt="'Preview image for the song ' + music.trackName"/>
    </div>
    <h3 class="card-title">{{music.trackName ?? 'holder'}}</h3>
    <p class="card-text">
      Track Time: {{music.trackTimeMillis}} - Explicit: {{music.trackExplicitness}}
      <br>
      Genre: {{music.primaryGenreName}}
    </p>
  </div>
</template>

<script>
import {Music} from "@/models/Media";
export default {
  name: "MusicDetails",
  props: {
    music: {
      type: Music,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>