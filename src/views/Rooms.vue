<template>
  <div class="rooms">
    <WorkInProgress msg="Coming up our Rooms Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "Rooms",
  components: {
    WorkInProgress,
  },
})
export default class Rooms extends Vue {}
</script>