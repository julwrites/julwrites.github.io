<template>
  <div class="digipen">
    <div>
      <h2>DigiPen Projects</h2>
      <p>During my time in DigiPen Institute of Technology, we developed a number of projects</p>
    </div>

    <div class="modal-container">
      <BIBBB />
      <Flowline />
      <ShortCircuit />
    </div>
  </div>
</template>

<script lang='ts'>
import { Prop, Vue, Component } from "vue-property-decorator";
import BIBBB from "@/components/projects/digipen/BIBBB.vue"; // @ is an alias to /src
import Flowline from "@/components/projects/digipen/Flowline.vue"; // @ is an alias to /src
import ShortCircuit from "@/components/projects/digipen/ShortCircuit.vue"; // @ is an alias to /src

@Component({ components: { BIBBB, Flowline, ShortCircuit } })
export default class DigiPen extends Vue {}
</script>

<style>
.digipen .thumbnail {
  height: 10vw;
  width: auto;
}
</style>

