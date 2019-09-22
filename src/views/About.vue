<template>
  <div class="about">
    <div class="profile">
      <div>
        <img class="img-profile" src="@/assets/images/me.png" />

        <p>I love Christ</p>
        <p>I love creating things</p>
        <p>I love blessing people</p>
      </div>
    </div>

    <h2>Work</h2>
    <p>Senior Software Engineer - Autodesk</p>
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
  width: 25%;
  height: auto;
}
</style>
