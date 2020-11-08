<template>
  <div id="app">
    <navbar-main></navbar-main>
    <b-container class="mt-4">
      <b-row>
        <b-col md="8" sm="12">
          <router-view></router-view>
        </b-col>
        <b-col md="4" sm="12">
            <recently-viewed></recently-viewed>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarMain from './components/NavbarMain'
import RecentlyViewed from './components/RecentlyViewed'
export default {
  name: 'App',
  components: {
    NavbarMain,
    RecentlyViewed
  }
}
</script>

<style>
</style>
