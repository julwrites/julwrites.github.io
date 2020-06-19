<template>
  <body>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/blog">Blog</router-link>
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
  </body>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  constructor() {
    super();
    var element = document.body;
    element.classList.add("dark-theme");
  }
}
</script>

<style>
:root {
  --black: #25374f;
  --rhino: #25374f;
  --woodsmoke: #18191A;

  --ebony-clay: #222c3c;
  --ebony-clay-2: #273142;

  --mirage-2: #1b2431;
  --mirage: #171e29;

  --portage: #ab7ef6;

  --azure-radiance: #0093ee;
  --oxford-blue: #313d4f;
  --regent-st-blue: #a9c7Df;
  --nepal: #8eacc5;
  --java: #26c1c9;

  --sushi: #96bf47;

  --crimson: #e0102b;

  --sun: #ffb610;

  --sunglow: #ffc02a;

  --white: #ffffff;
}

.dark-theme {
  --primary-background: var(--ebony-clay);
  --secondary-background: var(--ebony-clay-2);
  --tiertary-background: var(--mirage-2);
  --quarternary-background: var(--mirage);

  --primary-font: var(--white);
  --secondary-font: var(--regent-st-blue);
  --tiertary-font: var(--nepal);

  --primary-border: var(--oxford-blue);
  --secondary-border: var(--mirage-2);

  --shadow: var(--woodsmoke);
}

.light-theme {
  --primary-background: var(--white);
  --secondary-background: var(--white);
  --tiertary-background: var(--white);

  --primary-font: var(--oxford-blue);
  --secondary-font: var(--oxford-blue);
  --tiertary-font: var(--oxford-blue);

  --primary-border: var(--white);
  --secondary-border: var(--mirage-2);

  --shadow: var(--black);
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
  border-color: var(--primary-border);
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: var(--tiertary-font);

  border-style: dashed;
  border-width: 1px;
  border-color: var(--secondary-border);
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
