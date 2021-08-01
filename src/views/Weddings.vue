<template>
  <div class="weddings">
    <WorkInProgress msg="Coming up our Weddings Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "Weddings",
  components: {
    WorkInProgress,
  },
})
export default class Weddings extends Vue {}
</script>