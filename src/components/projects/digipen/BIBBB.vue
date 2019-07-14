<template>
  <div class="bibbb">
    <h3>BIBBB</h3>

    <img class="thumbnail" src="@/assets/images/BIBBB_1.jpg" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">BIBBB</div>
      <div slot="body">
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
      <div slot="footer" />
    </Modal>
  </div>
</template>

<script lang='ts'>
import { Component } from "vue-property-decorator";
import Modal from "@/components/common/Modal.vue";
import Project from "@/components/projects/common/Project.vue";

@Component({ components: { Modal } })
export default class BIBBB extends Project {}
</script>
