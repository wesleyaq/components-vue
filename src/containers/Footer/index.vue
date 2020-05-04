<template>
  <footer class="h-8 bg-gray-900 text-center pt-2">
    <p class="text-sm text-white">{{title}}</p>
  </footer>
</template>

<script>
  import config from '../../config';

  export default {
    name: 'Footer',
    data() {
      return {
        title: `®${config.site.title}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
