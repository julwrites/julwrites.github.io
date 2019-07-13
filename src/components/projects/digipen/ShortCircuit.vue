<template>
  <div class="shortcircuit">
    <h2>Short Circuit</h2>
    <p>A fast paced third person shooter where the player traverses 8 floors of a robot-overrun facility using his skill, gun, and some nifty grenades</p>

    <h3>Developed and maintained the following:</h3>
    <ul>
      <li>Data-driven Game entities/behaviors using a Builder factory to clone and specialize Archetypes.</li>
      <li>Level Editor and Object Editor which included the following functionalities:</li>
      <li>
        <ul>
          <li>Run-time creation, deletion and modification of objects and their components.</li>
          <li>Undo, Redo and ‘Restore Last Saved State’ functionality using a Memento method save/restore.</li>
        </ul>
      </li>
      <li>Mediator model Event Handler for Collision resolution and Message passing.</li>
      <li>Visual Effects Programming including electricity, lasers, explosions, and teleporting.</li>
    </ul>

    <a href="http://games.digipen.edu/games/shortcircuit">Try it out!</a>

    <div class="gallery-container">
      <img class="gallery-img" src="@/assets/images/ShortCircuit_1.jpg" />
      <img class="gallery-img" src="@/assets/images/ShortCircuit_2.jpg" />
      <img class="gallery-img" src="@/assets/images/ShortCircuit_3.jpg" />
      <img class="gallery-img" src="@/assets/images/ShortCircuit_4.jpg" />
      <img class="gallery-img" src="@/assets/images/ShortCircuit_5.jpg" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShortCircuit extends Vue {}
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
ul > li > ul {
  list-style-type: disc;
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

