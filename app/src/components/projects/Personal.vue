<template>
  <div class="personal">
    <h2>Personal Projects</h2>
    <p>As part of an ever ongoing journey of self-improvement, I take up small side projects in my spare time.</p>

    <div class="menu-gallery">
      <a href="https://julwrites.github.io/projects/personal/vscodecmder">
        <img
          class="menu-gallery-img"
          src="https://julwrites.github.io/files/images/vscodecmder.jpg"
          alt="VSCodeCmder"
        />
      </a>
      <a href="https://julwrites.github.io/projects/personal/biblicabot">
        <img
          class="menu-gallery-img"
          src="https://julwrites.github.io/files/images/biblicabot.png"
          alt="Biblica Bot"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Personal extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

