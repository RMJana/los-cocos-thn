<template>
  <div class="reservation">
    <div class="form-reservation">
      <Datepicker inputFormat="dd-MM-yyyy" v-model="$store.state.reservationDateFrom" />
      <Datepicker inputFormat="dd-MM-yyyy" v-model="$store.state.reservationDateUntil"/>
      <div id="select">
      <span>Adults: </span>
      <select v-model="$store.state.adults">
        <option>1</option>
        <option>2</option>
      </select>
      </div>
      <div  id="select">
        <span>Children: </span>
      <select v-model="$store.state.children">
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options,  Vue } from "vue-class-component";
import Datepicker from 'vue3-datepicker';

@Options({
  name:"Reservation",
  props: {
    msg: String,
  },
  components:{Datepicker},
  
})

export default class Reservation extends Vue {
}
</script>

<style lang="scss">
.reservation{
   background-image: url("../assets/los-cocos-room-header-2-x.png");
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 8rem;
}

.form-reservation{
  display: flex;
  padding: 0px 31rem;
  justify-content: space-evenly;
  flex-basis: 100%;
  background: rgb(14,118,204, 0.5);
  height: 4rem;
  align-items: center;
  
}

.v3dp__datepicker{
  --elem-hover-bg-color: var(--vdp-hover-bg-color, #0e76cc); 
  --elem-selected-bg-color: var(--vdp-selected-bg-color, #0e76cc);
*{
  font-family: 'Dosis', sans-serif;  
  }
}

input{
    display: inline-block;
    height: 1.5rem;
    border: #ffffff;
  }

  select{
    font-family: 'Dosis', sans-serif;  
    border: #ffffff;
    background:#ffffff;
  }

  div #select{
    display: flex;
    justify-content: center;
    align-content: center;
    background:#ffffff;
    padding: 0.2rem;
    *{
      margin-left: 0.2rem;
    }
  }
</style>

