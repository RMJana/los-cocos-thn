<template>
  <div id="rooms">
      <div id="room-box"  v-for="image in images" :key="image.name" >
        <div id="room">
          <div id="room-image">
            <img v-if="image.id === 'room1'" id="room2" src="../assets/room_1.png"  alt="room2"/>
            <img v-else-if="image.id === 'room2'" id="room2" src="../assets/room_2.png"  alt="room2"/>
            <img v-else id="room2" src="../assets/room_3.png"  alt="room2"/>
          </div>
          <div id="room-info">
            <div id="room-title">
              <h1>{{image.name}}</h1>
              <p>{{image.description}}</p>
            </div>
            <div>Size: {{image.size}}</div>
            <div id="room-description">
              <div id="beds">
                <img src="../assets/double-bed.svg" alt="bed"/>
                <div>Beds: {{image.beds}}</div>
              </div>
              <div>
                People: {{image.people}}
              </div>
              <div id="price">
                {{image.price}}
              </div>
            </div> 
          </div>
        </div>
        
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

interface Image {
          id: string
          name: string,
          description: string,
          size: string,
          beds: string,
          people: string,
          price: string,
         }
@Options({
  name:"Room",
  data(){
    return{
      src : "require('../assets/room_1.png')",
      images:[
        {
          id: "room1",
          name: "Mini Dreamy Room",
          description: "Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor.",
          size: "20m2",
          beds: 1,
          people: 2,
          price: "€200",
        },
        {
          id: "room2",
          name: "Seet Bungalow",
          description: "The perfect blend of comfort and culture, our superior room with a central garden view.",
          size: "50m2",
          beds: 1,
          people: 2,
          price: "€350",
        },
        {
          id: "room3",
          name: "Los Cocos Suite",
          description: "If you want a little extra from your stay, you might like our superio rooms. A ocean view room has a private beach",
          size: "125m2",
          beds: 3,
          people: 4,
          price: "€450",
        }
      ]
    }
  }
})
export default class Room extends Vue {
  images!: Array<Image>;
  src!: string;
}
</script>

<style lang="scss">

#room-box{
  flex-basis: 100%;
}

#room{
  display: flex;
  flex-direction: row;
  height: 21.5rem;
  align-items: center;
  border-right: 1px solid #b4bbc2;
  border-left: 1px solid #b4bbc2;
  border-top: 1px solid #b4bbc2;
  justify-content: space-around;
}

#room:hover {
    background: #f9f9fa;
    border-right: 2px solid #b4bbc2;
    border-bottom: 1px solid #b4bbc2;
}

#room-image{
  margin-left: -3rem;
  
}


#room-info{
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
}

#room-description{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  
}

#room-title{
  margin-bottom: 2rem;
}

#beds{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
#price{
    font-size: x-large;
    font-weight: 600;
}
</style>

