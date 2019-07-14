<template>
  <div class="personal">
    <div>
      <h2>Personal Projects</h2>
      <p>As part of an ever ongoing journey of self-improvement, I take up small side projects in my spare time.</p>
    </div>
    <div class="modal-container">
      <VSCodeCmder />
      <BiblicaBot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VSCodeCmder from "@/components/projects/personal/VSCodeCmder.vue";
import BiblicaBot from "@/components/projects/personal/BiblicaBot.vue";

@Component({ components: { VSCodeCmder, BiblicaBot } })
export default class Personal extends Vue {}
</script>
