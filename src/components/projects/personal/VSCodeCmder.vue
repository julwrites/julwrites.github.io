<template>
  <div class="modal-thumbnail">
    <h2>VSCodeCmder</h2>

    <img class="thumbnail" src="@/assets/images/projects/vscodecmder.jpg" v-on:click="showModal()" />

    <Modal v-if="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">VSCodeCmder</div>

      <div slot="body">
        <img src="@/assets/images/projects/vscodecmder.jpg" width="25%" height="auto" />
        <p>I use Visual Studio Code quite a bit, and I found that one thing I wanted to do was to navigate around my file system without needing to touch my mouse.</p>
      </div>

      <div slot="footer">
        <a href="https://marketplace.visualstudio.com/items?itemName=Julwrites.codecmder">
          <img class="footer-thumbnail" src="@/assets/images/dark/vscode.png" />
        </a>

        <a href="https://github.com/julwrites/vscodecmder">
          <img class="footer-thumbnail" src="@/assets/images/dark/github.png" />
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
export default class VSCodeCmder extends Project {}
</script>

