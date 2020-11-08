<template>
  <div id="app">
    <navbar-main></navbar-main>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMain from './components/NavbarMain'
export default {
  name: 'App',
  components: {
    NavbarMain
  }
}
</script>

<style>
</style>
