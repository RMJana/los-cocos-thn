<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>los-cocos</h1>
    <HelloWorld msg="THN Assesment" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  name: "Home",
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
