<template>
  <div class="bibbb">
    <h2>BIBBB</h2>
    <p>A puzzle game where the player has to get the boxer from one end of the level to the other using only the boxes in that level</p>

    <h3>Developed tools for the team including:</h3>
    <ul>
      <li>Level Editor using a Prototype to clone from and place object instances.</li>
      <li>Undo and Redo functionalities using a Memento method save/restore.</li>
      <li>Visual Effects Programming including selection indicators, gravity and magnet forces.</li>
    </ul>

    <a href="http://games.digipen.edu/games/bibbb">Try it out!</a>

    <div class="gallery-container">
      <img class="gallery-img" src="@/assets/images/BIBBB_1.jpg" />
      <img class="gallery-img" src="@/assets/images/BIBBB_2.jpg" />
      <img class="gallery-img" src="@/assets/images/BIBBB_3.jpg" />
      <img class="gallery-img" src="@/assets/images/BIBBB_4.jpg" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BIBBB extends Vue {}
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