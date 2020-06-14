<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view />
    <br />
    <div>
      <a href="https://git.tehj.io">
        <img class="footer-thumbnail" src="@/assets/images/github.png" />
      </a>
      <a href="https://job.tehj.io">
        <img class="footer-thumbnail" src="@/assets/images/linkedin.png" />
      </a>
      <a href="https://mail.tehj.io">
        <img class="footer-thumbnail" src="@/assets/images/email.png" />
      </a>
    </div>
  </div>
</template>

<style>
body {
  background-color: #2c3e50;
}

#app {
  font-family: "Fira Code", "Hasklig", "Iosevka", Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d0d0;
}

#nav {
  padding: 30px;
}

#nav a {
  padding: 1%;
  font-weight: bold;
  color: #d0d0d0;
}

#nav a.router-link-exact-active {
  color: #acbed0;
}

a {
  color: #d0d0d0;
  margin: 5%;
}

.footer-thumbnail {
  width: 25pt;
}
</style>
