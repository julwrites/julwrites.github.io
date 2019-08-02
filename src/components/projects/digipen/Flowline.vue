<template>
  <div class="flowline">
    <h2>Flowline</h2>

    <img class="thumbnail" src="@/assets/images/Flowline_1.jpg" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">Flowline</div>

      <div slot="body">
        <p>A top-down puzzle game where the player creates flowlines by drawing on the screen to clear 15 levels</p>

        <h3>Developed the majority of gameplay mechanics including:</h3>
        <ul>
          <li>A drawing mechanic using a discrete Vector Field</li>
          <li>A teleporting mechanic using basic collision detection.</li>
          <li>A swiveling/tracking turret using basic collision detection and AI</li>
          <li>Visual Effects Programming including Vector Field path, line of sight indicator and portal effects.</li>
        </ul>

        <div class="gallery-container">
          <img class="gallery-img" src="@/assets/images/Flowline_1.jpg" />
          <img class="gallery-img" src="@/assets/images/Flowline_2.jpg" />
          <img class="gallery-img" src="@/assets/images/Flowline_3.jpg" />
          <img class="gallery-img" src="@/assets/images/Flowline_4.jpg" />
          <img class="gallery-img" src="@/assets/images/Flowline_5.jpg" />
        </div>
      </div>

      <div slot="footer">
        <a href="http://games.digipen.edu/games/flowline">
          <img class="footer-thumbnail" src="@/assets/images/digipen.png" />
        </a>
      </div>
    </Modal>
  </div>
</template>

<script lang='ts'>
import { Component } from "vue-property-decorator";
import Project from "@/components/projects/common/Project.vue";
import Modal from "@/components/common/Modal.vue";

@Component({ components: { Modal } })
export default class Flowline extends Project {}
</script>
