<template>
  <div class="about">
    <h1>Julian Teh</h1>
    <img class="img-profile" src="@/assets/images/me.jpg" />

    <h2>Personal</h2>
    <p>Hi, I am a Singaporean boy who loves Christ, Computer Science, Martial Arts and Music</p>

    <h2>Work</h2>
    <p>Software Engineer - Autodesk Asia</p>
    <Resume />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Resume from "@/components/Resume.vue"; // @ is an alias to /src

@Component({
  components: {
    Resume
  }
})
export default class About extends Vue {}
</script>

<style scoped>
.img-profile {
  width: 25%;
  height: auto;
}
</style>
