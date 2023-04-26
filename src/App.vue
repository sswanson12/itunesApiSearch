<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
  </nav>
  <div class="container-fluid mt-3">
    <library-item-list></library-item-list>
  </div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
//import ITunesApiService from "@/models/ITunesApiService";

export default {
  name: 'App',
  components: {
    LibraryItemList,
  },
  // Was testing to ensure the API Service was working.
  // created() {
  //   ITunesApiService.search('curious george');
  // }
}
</script>

<style lang="scss">

</style>
