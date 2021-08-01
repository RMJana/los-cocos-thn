<template>
  <div class="contact">
    <WorkInProgress msg="Coming up our TermsAndConditions Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "TermsAndConditions",
  components: {
    WorkInProgress,
  },
})
export default class TermsAndConditions extends Vue {}
</script>