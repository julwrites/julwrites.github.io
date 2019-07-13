<template>
  <div class="vscodecmder">
    <h2>VSCodeCmder</h2>
    <p>I use Visual Studio Code quite a bit, and I found that one thing I wanted to do was to navigate around my file system without needing to touch my mouse.</p>

    <a href="https://github.com/julwrites/vscodecmder">Code</a>

    <a href="https://marketplace.visualstudio.com/items?itemName=Julwrites.codecmder">Try it out!</a>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VSCodeCmder extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  padding: 5%;
}
</style>

