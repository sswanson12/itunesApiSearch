<template>
  <div class="podcast">
    <div class="podcastImage">
      <img :src="podcast.artworkUrl100" :alt="'Preview image for the podcast ' + podcast.trackName"/>
    </div>
    <h3 class="card-title">{{podcast.trackName ?? 'holder'}}</h3>
    <p class="card-text">
      Runtime: {{podcast.trackTimeMillis}} - Rated: {{podcast.contentAdvisoryRating}}
      <br>
      Genres: {{podcast.genres.join(', ')}}
    </p>
  </div>
</template>

<script>
import {Podcast} from "@/models/Media";
export default {
  name: "PodcastDetails",
  props: {
    podcast: {
      type: Podcast,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>