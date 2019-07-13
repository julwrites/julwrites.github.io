<template>
  <div class="digipen">
    <h2>DigiPen Projects</h2>
    <p>During my time in DigiPen Institute of Technology, we developed a number of projects</p>

    <BIBBB />
    <Flowline />
    <ShortCircuit />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import BIBBB from "@/components/projects/digipen/BIBBB.vue"; // @ is an alias to /src
import Flowline from "@/components/projects/digipen/Flowline.vue"; // @ is an alias to /src
import ShortCircuit from "@/components/projects/digipen/ShortCircuit.vue"; // @ is an alias to /src

@Component({
  components: {
      BIBBB,
      Flowline,
      ShortCircuit,
  }
})
export default class DigiPen extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  padding: 5%;
}
img {
  width: 50%;
  height: auto;
}
</style>


