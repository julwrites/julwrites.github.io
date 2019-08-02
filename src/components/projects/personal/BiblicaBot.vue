<template>
  <div class="biblicabot">
    <h2>Biblicabot</h2>

    <img class="thumbnail" src="@/assets/images/biblicabot.png" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">Biblicabot</div>

      <div slot="body">
        <img src="@/assets/images/biblicabot.png" width="auto" height="auto" />

        <p>I use Telegram as a chat application, and when I found out that I could write bots, I thought it would be useful to have a bot that helped people to more easily access the Bible and related materials.</p>
      </div>

      <div slot="footer">
        <a href="https://telegram.me/biblica_bot">
          <img class="footer-thumbnail" src="@/assets/images/telegram.png" />
        </a>

        <a href="https://github.com/julwrites/biblicabot">
          <img class="footer-thumbnail" src="@/assets/images/github.png" />
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
export default class BiblicaBot extends Project {}
</script>

