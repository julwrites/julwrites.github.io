<template>
  <div class="modal-thumbnail">
    <h2>ScriptureBot</h2>

    <img class="thumbnail" src="@/assets/images/projects/scripturebot.png" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">ScriptureBot</div>

      <div slot="body">
        <img src="@/assets/images/projects/scripturebot.png" width="auto" height="auto" />

        <p>I use Telegram as a chat application, and when I found out that I could write bots, I thought it would be useful to have a bot that helped people to more easily access the Bible and related materials.</p>
      </div>

      <div slot="footer">
        <a href="https://telegram.me/scripture_bot">
          <img class="footer-thumbnail" src="@/assets/images/dark/telegram.png" />
        </a>

        <a href="https://github.com/julwrites/scripturebot">
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
export default class ScriptureBot extends Project {}
</script>

