<template>
  <div class="privacypolicy">
    <WorkInProgress msg="Coming up our PrivacyPolicy Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "PrivacyPolicy",
  components: {
    WorkInProgress,
  },
})
export default class PrivacyPolicy extends Vue {}
</script>