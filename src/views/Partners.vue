<template>
  <div class="partners">
    <WorkInProgress msg="Coming up our Partners Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "Partners",
  components: {
    WorkInProgress,
  },
})
export default class Partners extends Vue {}
</script>