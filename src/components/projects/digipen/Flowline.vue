<template>
  <div class="flowline">
    <h2>Flowline</h2>
    <p>A top-down puzzle game where the player creates flowlines by drawing on the screen to clear 15 levels</p>

    <h3>Developed the majority of gameplay mechanics including:</h3>
    <ul>
      <li>A drawing mechanic using a discrete Vector Field</li>
      <li>A teleporting mechanic using basic collision detection.</li>
      <li>A swiveling/tracking turret using basic collision detection and AI</li>
      <li>Visual Effects Programming including Vector Field path, line of sight indicator and portal effects.</li>
    </ul>

    <a href="http://games.digipen.edu/games/flowline">Try it out!</a>

    <div class="gallery-container">
      <img class="gallery-img" src="@/assets/images/Flowline_1.jpg" />
      <img class="gallery-img" src="@/assets/images/Flowline_2.jpg" />
      <img class="gallery-img" src="@/assets/images/Flowline_3.jpg" />
      <img class="gallery-img" src="@/assets/images/Flowline_4.jpg" />
      <img class="gallery-img" src="@/assets/images/Flowline_5.jpg" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Flowline extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: circle;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
  padding: 5%;
}
img {
  width: 55%;
  height: auto;
}
</style>
