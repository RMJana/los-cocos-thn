<template>
<div id="reservation-summary-container">
    <div class="reservation-summary">
      <div id="summary">
        <h1>{{ msg }}</h1>
        <h2>Mini Dreamy Room</h2>
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
        <p id="p-reservation">From 05-09-2021 Until 16-09-2021</p>
        <h4 id="h4-reservation">People</h4>
        <p id="p-reservation">2 Adults</p>
      </div>
      <div id="total">
        <h2>Total</h2>
        <h2>€200</h2>
      </div>
      <div id="save-button">
        <button @click="()=>{}">Save</button>
      </div>
    </div>
    <div></div>
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
#p-reservation{
  margin-block-end: 1rem;
  margin-block-start: 1rem;
}
#h4-reservation{
  margin: 0rem;
  margin-top: 1rem;
}
#total{
  margin-top: 1rem;
  border-top: 1px solid #b4bbc2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

