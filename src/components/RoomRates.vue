<template>
  <div class="room-rates">
    <div id="room-rates-title">
      <h1>Rooms	&amp; Rates</h1>
      <h3>Plan your perfect stay at our hotel</h3>
      <img id="reservation-workflow" src="../assets/los-cocos-1.png" alt="reservation-workflow"/>
    </div>
    <div id="rooms-and-rates">
      <Rooms />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Rooms from "@/components/Rooms.vue";

@Options({
  name:"RoomRates",
  props: {
    msg: String,
  },
  components:{Rooms}
})
export default class RoomRates extends Vue {
  msg!: string;
}
</script>

<style lang="scss">

.room-rates{
  display:flex;
  flex-direction: column;
  flex-basis: 60%;
}

#room-rates-title{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 12rem;
}
#rooms-and-rates{
  display:flex;
  flex-direction: column;
  overflow: auto;
}
</style>

