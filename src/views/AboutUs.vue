<template>
  <div class="aboutus">
    <WorkInProgress msg="Coming up our About Us Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "AboutUs",
  components: {
    WorkInProgress,
  },
})
export default class AboutUs extends Vue {}
</script>