<template>
  <div class="room-rates">
    <h1>{{ msg }}</h1>
    <div>
      <h2>Room 1</h2>
      <img id="room1" src="../assets/room_1.png" alt="room1"/>
    </div>
    <div>
      <h2>Room 2</h2>
      <img id="room2" src="../assets/room_2.png" alt="room2"/>
    </div>
    <div>
      <h2>Room 3</h2>
      <img id="room3" src="../assets/room_3.png" alt="room3"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Room from "@/components/Room.vue";

@Options({
  name:"RoomRates",
  props: {
    msg: String,
  },
  components:{Room}
})
export default class RoomRates extends Vue {
  msg!: string;
}
</script>

<style lang="scss">
.rooms-rates{
  display:flex;
  flex-direction: column;
  overflow: scroll;
}
</style>

