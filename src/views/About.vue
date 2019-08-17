<template>
  <div class="about">
    <div class="profile">
      <div>
        <img class="img-profile" src="@/assets/images/me.jpg" />
      </div>

      <div>
        <h2>Personal</h2>
        <p>Hi, I am a Singaporean boy who loves Christ, Computer Science, Martial Arts and Music</p>
      </div>
    </div>

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
.profile {
  display: grid;
  grid-auto-flow: column;
  vertical-align: middle;
}

.img-profile {
  width: 50%;
  height: auto;
}
</style>
