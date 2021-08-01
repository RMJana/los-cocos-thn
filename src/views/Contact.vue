<template>
  <div class="contact">
    <WorkInProgress msg="Coming up our Contact Section!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

@Options({
  name: "Contact",
  components: {
    WorkInProgress,
  },
})
export default class Contact extends Vue {}
</script>