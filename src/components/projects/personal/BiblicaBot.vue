<template>
  <div class="biblicabot">
    <h3>Biblicabot</h3>

    <img class="thumbnail" src="@/assets/images/biblicabot.png" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">Biblicabot</div>
      <div slot="body">
        <img src="@/assets/images/biblicabot.png" width="auto" height="auto" />

        <p>I use Telegram as a chat application, and when I found out that I could write bots, I thought it would be useful to have a bot that helped people to more easily access the Bible and related materials.</p>

        <a href="https://github.com/julwrites/biblicabot">Code</a>

        <a href="https://telegram.me/biblica_bot">Try it out!</a>
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
export default class BiblicaBot extends Project {}
</script>

