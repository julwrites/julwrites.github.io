
<template>
  <div class="biblicabot">
    <h2>Biblicabot</h2>
    <p>I use Telegram as a chat application, and when I found out that I could write bots, I thought it would be useful to have a bot that helped people to more easily access the Bible and related materials.</p>

    <a href="https://github.com/julwrites/biblicabot">Code</a>

    <a href="https://telegram.me/biblica_bot">Try it out!</a>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BiblicaBot extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  padding: 5%;
}
</style>

