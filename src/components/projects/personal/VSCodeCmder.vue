<template>
  <div class="vscodecmder">
    <h3>VSCodeCmder</h3>

    <img class="thumbnail" src="@/assets/images/vscodecmder.jpg" v-on:click="showModal()" />

    <Modal v-if="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">VSCodeCmder</div>
      <div slot="body">
        <img src="@/assets/images/vscodecmder.jpg" width="25%" height="auto" />
        <p>I use Visual Studio Code quite a bit, and I found that one thing I wanted to do was to navigate around my file system without needing to touch my mouse.</p>

        <a href="https://github.com/julwrites/vscodecmder">Code</a>

        <a
          href="https://marketplace.visualstudio.com/items?itemName=Julwrites.codecmder"
        >Try it out!</a>
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
export default class VSCodeCmder extends Project {}
</script>

