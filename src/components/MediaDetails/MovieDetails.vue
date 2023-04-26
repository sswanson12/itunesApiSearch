<template>
  <div class="movie">
    <div class="movieImage">
      <img :src="movie.artworkUrl100" :alt="'Preview image for the movie ' + movie.trackName"/>
    </div>
    <h3 class="card-title">{{movie.trackName ?? 'holder'}}</h3>
    <p class="card-text">
      Runtime: {{movie.trackTimeMillis}} - Rated: {{movie.contentAdvisoryRating}}
      <br>
      {{movie.longDescription ?? movie.shortDescription ?? movie.trackName + 'has no description.'}}
    </p>
  </div>
</template>

<script>
import {Movie} from "@/models/Media";
export default {
  name: "MovieDetails",
  props: {
    movie: {
      type: Movie,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>