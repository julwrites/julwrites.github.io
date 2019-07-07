<template>
  <div class="nus">
    <h2>NUS</h2>
    <p>As part of my Masters' of Computing, I did a number of projects, some of which I share here</p>

    <a href="https://julwrites.github.io/projects/school/d3">Information Visualization</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NUS extends Vue {}
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


