<template lang="html">

</template>

<script>
import ThreadsService from './services/ThreadsService.js';

export default {
  name: "app",
  data(){
    return {
      threads: null;
    }
  },
  mounted(){
    this.fetchThreads();
  },
  methods: {
    fetchThreads(){
      ThreadsService.getThreads()
      .then(threads => this.threads = threads)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
