<template>
  <div class="projects">
    <Personal />
    <br />
    <DigiPen />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Personal from "@/components/projects/Personal.vue"; // @ is an alias to /src
import DigiPen from "@/components/projects/DigiPen.vue"; // @ is an alias to /src

@Component({
  components: {
    Personal,
    DigiPen
  }
})
export default class Projects extends Vue {}
</script>

<style>
img {
  width: 25%;
  height: auto;
}
.gallery-container {
  display: gr;
  grid-auto-flow: column;
}
.modal-container {
  display: grid;
  grid-auto-flow: column;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  vertical-align: middle;
}
.thumbnail {
  width: 25%;
  height: auto;
  cursor: grab;
}
</style>
