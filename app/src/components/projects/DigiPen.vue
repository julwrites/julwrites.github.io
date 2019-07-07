<template>
  <div class="digipen">
    <h2>DigiPen Projects</h2>
    <p>During my time in DigiPen Institute of Technology, we developed a number of projects</p>

    <div class="menu-gallery">
      <a href="https://julwrites.github.io/projects/school/shortcircuit">
        <img
          class="menu-gallery-img"
          src="https://julwrites.github.io/files/images/ShortCircuit_1.jpg"
          alt="ShortCircuit"
        />
      </a>
      <a href="https://julwrites.github.io/projects/school/flowline">
        <img
          class="menu-gallery-img"
          src="https://julwrites.github.io/files/images/Flowline_1.jpg"
          alt="FlowLine"
        />
      </a>
      <a href="https://julwrites.github.io/projects/school/bibbb">
        <img
          class="menu-gallery-img"
          src="https://julwrites.github.io/files/images/BIBBB_1.jpg"
          alt="BIBBB"
        />
      </a>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DigiPen extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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


