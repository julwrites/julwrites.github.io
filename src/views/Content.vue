<template>
  <div class="content">
    <router-link
      to="/blog"
      tag="a"
      class="back"
      v-show="this.$router.currentRoute.path !== '/blog'"
    >
      <img class="thumbnail" src="@/assets/images/dark/backarrow.png" />
    </router-link>

    <router-view v-show="this.$router.currentRoute.path !== '/blog'" />

    <div v-for="(section, index) in entries" :key="index" class="group">
      <h1 class="center">{{section.name}}</h1>
      <div class="section" v-for="(entry) in section.children" :key="entry">
        <div class="entry" v-on:click="$router.push({name: `${entry.name}`})">
          <h3>{{entry.title}}</h3>
          <p>{{entry.desc}}</p>
          <span class="subtitle">{{entry.date}}</span>
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
    },
  },
};
</script>

<style lang="scss" scoped>
.entry {
  border-style: solid;
  border-width: 1px;
  border-color: var(--secondary-border);
  border-radius: 5px;

  padding: 10px;
}
.content {
  max-width: 50vw;
  margin: auto;
  transition: all 0.3s ease;
}
.subtitle {
  font-style: italic;
  font-size: 1rem;
  color: var(--primary-font);
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
    color: var(--primary-font);
  }
  h2 {
    font-size: 1.5rem;
    color: var(--secondary-font);
  }
  h3 {
    font-size: 1.25rem;
    color: var(--tiertary-font);
  }
  img {
    width: 100%;
    height: auto;
    border-style: solid;
  }
  pre {
    overflow-x: auto;
    background-color: var(--secondary-background);
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
</style>
