<template>
  <div class="reservation">
    <div class="form-reservation">
      <Datepicker v-model="pickedFrom" />
      <Datepicker v-model="pickedUntil"/>
      <div id="select">
      <span>Adults: </span>
      <select v-model="selectedAdult">
        <option>1</option>
        <option>2</option>
      </select>
      </div>
      <div  id="select">
        <span>Children: </span>
      <select v-model="selectedChild">
        <option>1</option>
        <option>2</option>
      </select>
      </div>
      <div>
          <button @click="()=>{}">Modify</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options,  Vue } from "vue-class-component";
import Datepicker from 'vue3-datepicker';
import { ref } from 'vue';



@Options({
  name:"Reservation",
  props: {
    msg: String,
  },
  data() { 

    return {
      pickedFrom : ref(new Date()),
      pickedUntil: ref(new Date(new Date().getTime()+(24*60*60*1000))),
      selectedAdult: "1",
      selectedChild: "Child(1)",
    };
  },
  components:{Datepicker},
  
})

export default class Reservation extends Vue {
  msg!: string;
  pickedFrom!: Date;
  pickedUntil!: Date;
  selectedAdult!: string;
  selectedChild!: string;
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
  div button{
    font-weight: bold;
    background:rgba(22, 107, 177);
    font-family: 'Dosis', sans-serif;  
    border: rgba(22, 107, 177);
    height: 1.8rem;
    font-size: 1rem;
    color: #ffffff;
    padding: 0 3rem;
  }

  


 


</style>

