<template>
  <div class="room-rates">
    <div id="room-rates-title">
      <div id="room-rates-title-info">
        <h1>Rooms	&amp; Rates</h1>
        <h3>Plan your perfect stay at our hotel</h3>
        <img id="reservation-workflow" src="../assets/los-cocos-1.png" alt="reservation-workflow"/>
      </div>
      <div id="room-rates-title-image">
        <img id="los-cocos-cocktail" src="../assets/los-cocos-img-bg.png" alt="los-cocos-cocktail"/>
      </div>
    </div>
    <div id="rooms-and-rates">
      <Rooms />
      <ReservationSummary /> 
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ReservationSummary from "@/components/ReservationSummary.vue";
import Rooms from "@/components/Rooms.vue";

@Options({
  name:"RoomRates",
  props: {
    msg: String,
  },
  components:{Rooms,ReservationSummary }
})
export default class RoomRates extends Vue {
  msg!: string;
}
</script>

<style lang="scss">

.room-rates{
  display:flex;
  flex-direction: column;
}

#room-rates-title{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
#room-rates-title-info{
   display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12rem;
  margin-right: 12rem;
  margin-bottom: 3rem;

}
#room-rates-title-image{
  display: flex;
  flex-basis: 30%;
}

#rooms-and-rates{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

