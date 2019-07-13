<template>
  <div class="personal">
    <h2>Personal Projects</h2>
    <p>As part of an ever ongoing journey of self-improvement, I take up small side projects in my spare time.</p>

    <VSCodeCmder />
    <BiblicaBot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VSCodeCmder from "@/components/projects/personal/VSCodeCmder.vue";
import BiblicaBot from "@/components/projects/personal/BiblicaBot.vue";

@Component({ components: { VSCodeCmder, BiblicaBot } })
export default class Personal extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  padding: 5%;
}
img {
  width: 25%;
  height: auto;
}
</style>

