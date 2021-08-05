
<template>
<div id="reservation-summary-container">
    <div class="reservation-summary">
      <div id="summary">
        <h1>Reservation Summary</h1>
        <h2>{{$store.state.roomName}}</h2>
        <div id="checking">
          <div>
            <h4 id="h4-reservation">Check in</h4>
            <p id="p-reservation">From 15:00h</p>
          </div>
          <div>
            <h4 id="h4-reservation">Check out</h4>
            <p id="p-reservation">Before 12:00h</p>
          </div>
        </div>
        <h4 id="h4-reservation">Reservation date</h4>
        <div id="reservation-dates">
          <p id="p-reservation">
            From  {{$store.state.reservationDateFrom.getDate()}}-{{$store.state.reservationDateFrom.getMonth()+1}}-{{$store.state.reservationDateFrom.getFullYear()}} 
          </p>
          <p id="p-reservation">
            Until {{$store.state.reservationDateUntil.getDate()}}-{{$store.state.reservationDateUntil.getMonth()+1}}-{{$store.state.reservationDateUntil.getFullYear()}}
          </p>
        </div>
        <h4 id="h4-reservation">People</h4>
        <p id="p-reservation">{{$store.state.adults}} Adults</p>
        <p v-if="$store.state.children === '1'" id="p-reservation">{{$store.state.children}} Child</p>
        <p v-else id="p-reservation">{{$store.state.children}} Children</p>
      </div>
      <div v-if="promoCode > 0">
        <div class="total">
          <h3 >Promo Code</h3>
          <h3 >{{promoCode}}%</h3>
        </div>
        <div class="total">
          <h3 >Discount</h3>
          <h3>€{{$store.state.roomPrice - calculateFinalPrice(promoCode,$store.state.roomPrice)}}</h3>
        </div>
        
      </div>
      <div class="total-price total">
        <h2>Total</h2>
        <div  v-if="promoCode > 0"  id="prices">
          <h2 id="original-price">€{{$store.state.roomPrice}}</h2>
          <h2>€{{calculateFinalPrice(promoCode,$store.state.roomPrice)}}</h2>
        </div>
        <div v-else>
          <h2>€{{$store.state.roomPrice}}</h2>
        </div>
      </div>
      <div id="save-button">
        <button @click="$store.commit('setRerservation')">Save</button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  name:"ReservationSummary",
  data(){
    return {
      promoCode: ref(this.$route.params.promo_code.toString().replace("promo_code=",""))
    }
  },
  methods:{
    calculateFinalPrice(promoCode: number, originalPrice: number){
      return (originalPrice - (originalPrice*promoCode/100))
    }
  }
  
})
export default class ReservationSummary extends Vue {
  promoCode!: number;
  calculateFinalPrice!: (promoCode: number, originalPrice: number) => number
}
</script>

<style lang="scss" scope>
#reservation-summary-container{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-basis: 30%;
}
.reservation-summary{
    margin-left: 2rem;
    padding: 1.5rem;
    display: flex;
    border: 1px solid #b4bbc2;
    flex-direction: column;
}
#checking{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

#checking div{
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
}
#reservation-dates{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
#p-reservation{
  margin-right: 1rem;
  margin-block-end: 1rem;
  margin-block-start: 1rem;
}
#h4-reservation{
  margin: 0rem;
  margin-top: 1rem;
}
.total{
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.total-price{
    border-top: 1px solid #b4bbc2;
}
#prices{
  display: flex;
  flex-direction: row;
}
#original-price{
  color: #a1a5a8;
  margin-right: 1rem;
}
div button{
    font-weight: bold;
    background:rgba(22, 107, 177);
    font-family: 'Dosis', sans-serif;  
    border: rgba(22, 107, 177);
    height: 1.8rem;
    font-size: 1rem;
    color: #ffffff;
    padding: 0 3rem;
    width: 100%;
  }
</style>

