<template>

  <div class="work-in-progress">
    <img id="work-in-progress-img" alt="work-in-progress" src="../assets/work-in-progress.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name:"WorkInProgress",
  props: {
    msg: String,
  },
})
export default class WorkInProgress extends Vue {
  msg!: string;
}
</script>

<style lang="scss">

.work-in-progress{
  flex-direction: column;
  display: flex;
  align-items: center;
}
#work-in-progress-img{
  height: 38rem;
}
</style>

