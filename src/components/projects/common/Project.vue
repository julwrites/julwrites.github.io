<template></template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "@/components/common/Modal.vue";

@Component({ components: { Modal } })
export default class Project extends Vue {
  showContent: boolean;
  constructor() {
    super();
    this.showContent = false;
  }

  data() {
    return { showContent: this.showContent };
  }

  showModal() {
    this.showContent = true;
  }

  hideModal() {
    this.showContent = false;
  }

  isModalVisible() {
    return this.showContent;
  }
}
</script>


