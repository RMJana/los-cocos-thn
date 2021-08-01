<template>
  <div class="home">
    <img alt="los-cocos-logo" src="../assets/logo-los-cocos.png" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Home",
})
export default class Home extends Vue {}
</script>
