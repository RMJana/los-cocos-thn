<template>
  <div class="reservation-summary">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name:"ReservationSummary",
  props: {
    msg: String,
  },
})
export default class ReservationSummary extends Vue {
  msg!: string;
}
</script>

<style lang="scss">

</style>

