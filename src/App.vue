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
        <img class="footer-thumbnail" src="@/assets/images/dark/github.png" />
      </a>
      <a href="https://job.tehj.io">
        <img class="footer-thumbnail" src="@/assets/images/dark/linkedin.png" />
      </a>
      <a href="https://mail.tehj.io">
        <img class="footer-thumbnail" src="@/assets/images/dark/email.png" />
      </a>
    </div>
  </div>
</template>

<style>
:root {
  --primary-background: #222c3c;
  --secondary-background: #273142;
  --tiertary-background: #1b2431;
  --reverse-background: #ffffff;

  --primary-font: #ffffff;
  --secondary-font: #a9c7df;
  --tiertary-font: #8eacc5;
  --reverse-font: #313d4f;

  --black: #25374f;
  --blue: #0093ee;
  --green: #96bf47;
  --grey: #a9c7df;
  --orange: #ffb610;
  --purple: #ab7ef6;
  --red: #e0102b;
  --white: #ffffff;
  --yellow: #ffc02a;
}

body {
  background-color: var(--primary-background);
}

#app {
  font-family: Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-font);
}

#nav {
  margin: 30px 20% 30px 20%;
}

#nav a {
  padding: 1%;
  font-weight: bold;
  color: var(--secondary-font);

  border-style: solid;
  border-width: 1px;
  border-color: var(--black);
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: var(--tiertary-font);

  border-style: dashed;
  border-width: 1px;
  border-color: var(--grey);
  border-radius: 5px;
}

a {
  color: var(--primary-font);
  margin: 5%;
}

.footer-thumbnail {
  width: 25pt;
}
</style>
