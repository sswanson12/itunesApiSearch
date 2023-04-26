<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="mx-auto">
      <h1 class="text-center my-5">Search Apple's iTunes</h1>
      <form id="searchBar" class="mx-auto mb-3" @submit="doSearch">
        <input id="searchText" class="form-control form-control-lg" type="text" placeholder="Search" aria-label="ITunes API Search Bar">
        <button type="submit" class="btn btn-success mx-2 fw-bold">Go!</button>
      </form>
    </div>
    <div class="col" v-for="item in library" :key="item.name">
      <library-item-card :item="item"/>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import LibraryCollection from "@/models/LibraryCollection";
import ITunesApiService from "@/models/ITunesApiService";

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  data() {
    return {
      library: new LibraryCollection(),
    }
  },
  methods: {
    doSearch: function(e) {
      e.preventDefault();

      let keyword = document.getElementById('searchText').value;

      let results = ITunesApiService.search(keyword);

      results.forEach((result) => {
        console.log(result);
      });
    }
  }
}
</script>

<style scoped>
#searchBar{
  display: flex;
  max-width: 400px;
}
</style>