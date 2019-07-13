<template>
  <div class="projects">
    <Personal />
    <DigiPen />
    <NUS />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Personal from "@/components/projects/Personal.vue"; // @ is an alias to /src
import DigiPen from "@/components/projects/DigiPen.vue"; // @ is an alias to /src
import NUS from "@/components/projects/NUS.vue"; // @ is an alias to /src

@Component({
  components: {
    Personal,
    DigiPen,
    NUS
  }
})
export default class Projects extends Vue {}
</script>

