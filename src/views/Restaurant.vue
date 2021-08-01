<template>
  <div class="restaurant">
    <WorkInProgress msg="Coming up our Restaurant Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "Restaurant",
  components: {
    WorkInProgress,
  },
})
export default class Restaurant extends Vue {}
</script>