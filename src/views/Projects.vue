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
.gallery-img {
  width: 75%;
  height: auto;
}
.gallery-container {
  display: grid;
  grid-auto-flow: column;
}
.modal-thumbnail {
}
.modal-container {
  display: grid;
  grid-auto-flow: column;
  vertical-align: middle;
}
.thumbnail {
  width: 25%;
  height: auto;
  cursor: grab;

  border-style: solid;
  border-width: 1px;
  border-color: var(--black);
  border-radius: 5px;
}
</style>
