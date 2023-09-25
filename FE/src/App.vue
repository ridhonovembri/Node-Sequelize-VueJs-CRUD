<template>
  <app-toolbar />
  <router-view />
</template>

<script>
import AppToolbar from '@/components/AppToolbar.vue'

export default {
  components: { 
    'app-toolbar': AppToolbar
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
