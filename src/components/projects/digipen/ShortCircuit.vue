<template>
  <div class="shortcircuit">
    <h2>Short Circuit</h2>

    <img class="thumbnail" src="@/assets/images/ShortCircuit_1.jpg" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">Short Circuit</div>
      <div slot="body">
        <p>A fast paced third person shooter where the player traverses 8 floors of a robot-overrun facility using his skill, gun, and some nifty grenades</p>

        <h3>Developed and maintained the following:</h3>
        <ul>
          <li>Data-driven Game entities/behaviors using a Builder factory to clone and specialize Archetypes.</li>
          <li>Level Editor and Object Editor which included the following functionalities:</li>
          <ul>
            <li>Run-time creation, deletion and modification of objects and their components.</li>
            <li>Undo, Redo and ‘Restore Last Saved State’ functionality using a Memento method save/restore.</li>
          </ul>
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
      <div slot="footer" />
    </Modal>
  </div>
</template>

<script lang='ts'>
import { Component } from "vue-property-decorator";
import Project from "@/components/projects/common/Project.vue";
import Modal from "@/components/common/Modal.vue";

@Component({ components: { Modal } })
export default class ShortCircuit extends Project {}
</script>
