<template>
  <div class="content">
    <router-link
      to="/blog"
      tag="a"
      class="back"
      v-show="this.$router.currentRoute.path !== '/blog'"
    >
      <img class="thumbnail" src="@/assets/images/backarrow.png" />
    </router-link>

    <router-view v-show="this.$router.currentRoute.path !== '/blog'" />

    <div v-for="(section, index) in entries" :key="index" class="group">
      <h2 class="center">{{section.name}}</h2>
      <div class="section" v-for="(entry) in section.children" :key="entry">
        <div class="entry">
          <h3 v-on:click="this.$router.push({path: `${section.path}/${entry.id}`})">
            {{entry.title}}
            <br />
            <span class="subtitle">{{entry.date}}</span>
          </h3>
          <p>{{entry.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Content } from "@/content/contents";
export default {
  name: "home",
  computed: {
    entries() {
      return Content;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 50vw;
  margin: auto;
  transition: all 0.3s ease;
  .subtitle {
    font-size: 0.8rem;
    color: #47487f;
  }
  .entry {
    cursor: grab;
  }
  //   &:hover {
  //     background-color: transparent;
  //     color: #42b883;
  //   }
  /deep/ {
    h1 {
      font-size: 2rem;
      color: #42b883;
    }
    h2 {
      font-size: 1.5rem;
      color: #35495e;
    }
    h3 {
      font-size: 1.25rem;
      color: #35495e;
    }
    img {
      width: 100%;
      height: auto;
      border-style: solid;
    }
    pre {
      overflow-x: auto;
      background-color: #35495e;
      color: white;
      border-radius: 0.3rem;
      padding: 1rem;
    }
    .thumbnail {
      width: 30pt;
      height: auto;
      cursor: grab;
      border-style: none;
    }
  }
}
</style>
