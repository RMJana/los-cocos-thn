<template>
  <div class="home">
    <Reservation msg="Reservations"/>
    <div class="bottom">
      <RoomRates msg="Room Rates"/>
      <ReservationSummary  msg="Reservation Summary"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Reservation from "@/components/Reservation.vue"; 
import ReservationSummary from "@/components/ReservationSummary.vue";
import RoomRates from "@/components/RoomRates.vue"; 

@Options({
  name: "Home",
  components:{
    Reservation,
    ReservationSummary,
    RoomRates
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
}
.bottom{
  display: flex;
  justify-content: space-around;
}
</style>
