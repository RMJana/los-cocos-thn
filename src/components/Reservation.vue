<template>
  <div class="reservation">
    <div class="form-reservation">
      <Datepicker v-model="pickedFrom" />
      <Datepicker v-model="pickedUntil"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options,  Vue } from "vue-class-component";
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'



@Options({
  name:"Reservation",
  props: {
    msg: String,
  },
  data() { 

    return {
      pickedFrom : ref(new Date()),
      pickedUntil: ref(new Date(new Date().getTime()+(5*24*60*60*1000))),
    };
  },
  components:{Datepicker},
  
})

export default class Reservation extends Vue {
  msg!: string;
  pickedFrom!: Date;
  pickedUntil!: Date;

}
</script>

<style lang="scss">
.reservation{
   background-image: url("../assets/los-cocos-room-header-2-x.png");
   background-repeat: no-repeat;
   background-size: auto;
   background-position: center;
   height: 8rem;
}

.form-reservation{
  display: flex;
  justify-content: space-around;
  margin-left:3rem;
  margin-right: 3rem;
  background: rgb(14,118,204, 0.5);
  height: 4rem;
  margin-top: 2rem;
 
}

.v3dp__datepicker{
  --elem-hover-bg-color: var(--vdp-hover-bg-color, #0e76cc); 
  --elem-selected-bg-color: var(--vdp-selected-bg-color, #0e76cc);
*{
  font-family: 'Dosis', sans-serif;  
  }
}
.v3dp__input_wrapper{ 
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
 
  }

  input{
    display: inline-block;
    height: 1.5rem;
    border: #ffffff;
  }

  


 


</style>

