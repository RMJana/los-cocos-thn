<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
     <router-link to="/rooms">Rooms</router-link> 
    <router-link to="/restaurant">Restaurant</router-link> 
    <router-link to="/"><img id="loscocos" src="./assets/logo-los-cocos.png" alt="logo-los-cocos"/></router-link> 
    <router-link to="/weddings">Weedings</router-link>
    <router-link to="/membership">Membership</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view />
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Options({
  name: "App",
  components: {
    Footer,
  },
})
export default class Weddings extends Vue {}
</script>

<style lang="scss">

#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin:0;
  display: flex;
  flex-direction: column;
  a {

    color: #b4bbc2;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0e76cc;
      font-weight: bold ;
    }
  }
}


#nav {
  display: flex;
  padding: 30px;
  justify-content: space-around;

}
#loscocos {
 height: 2rem;
}

</style>
