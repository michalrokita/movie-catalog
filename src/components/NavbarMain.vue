<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Movie catalog</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'movie-catalog' }">
          Movie catalog
        </b-nav-item>
<!--        <b-nav-item :to="{ name: 'favorites-movies' }">-->
<!--          Favorites-->
<!--        </b-nav-item>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarMain'
}
</script>

<style scoped>

</style>
