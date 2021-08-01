<template>
  <div class="membership">
    <WorkInProgress msg="Coming up our Membership Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "Membership",
  components: {
    WorkInProgress,
  },
})
export default class Membership extends Vue {}
</script>