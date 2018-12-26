<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        class="navbar-brand"
        href="#"
      >Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
</style>
