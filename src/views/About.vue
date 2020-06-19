<template>
  <div class="about">
    <div class="profile">
      <div>
        <img class="img-profile" v-bind:src="photo" />

        <p>Love Christ, Create Things, Bless People, Speak Truth</p>
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
    Resume,
  },
})

export default class About extends Vue {
  get photo() {
    return require('@/assets/images/me_' + Math.floor(Math.random() * 3) + '.jpg');
  }
}
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

  border-style: solid;
  border-width: 1px;
  border-color: var(--primary-border);
  border-radius: 5px;
}
</style>
