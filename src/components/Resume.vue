<template>
  <div class="resume">
    <object
      data="@/assets/resume/Resume_Julian_Teh.pdf#zoom=Fit"
      type="application/pdf"
      style="width:100%;height:75vw;"
      typemustmatch
    >
      <a class="link" href="https://resume.tehj.org">
        <img class="img-icon" src="@/assets/images/resume.png" alt="Resume" />
      </a>
    </object>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Resume extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
</style>
