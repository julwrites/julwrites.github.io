<template>
  <div class="personal">
    <div>
      <h2>Personal Projects</h2>
      <p>As part of an ever ongoing journey of self-improvement, I take up small side projects in my spare time.</p>
    </div>
    <div class="modal-container">
      <VSCodeCmder />
      <ScriptureBot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VSCodeCmder from "@/components/projects/personal/VSCodeCmder.vue";
import ScriptureBot from "@/components/projects/personal/ScriptureBot.vue";

@Component({ components: { VSCodeCmder, ScriptureBot } })
export default class Personal extends Vue {}
</script>
