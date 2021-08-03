<template>
  <div>
      <h2>Room 1</h2>
      <img id="Room" src="../assets/room_1.png" alt="room1"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name:"Room",
  props: {
    id: String,
    src: String,
    alt: String
  },
})
export default class Room extends Vue {
  src!: string;
  id!: string;
  alt!: string;
}
</script>

<style lang="scss">

</style>

