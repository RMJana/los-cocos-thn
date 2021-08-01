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
  <footer id="footer">hello i am a footer</footer>
</template>

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
}


#nav {
  display: flex;
  padding: 30px;
  justify-content: space-around;

  a {

    color: #b4bbc2;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0e76cc;
      font-weight: bold ;
    }
  }
}
#loscocos {
 height: 2rem;
}

#footer{
  margin-top:auto;
}
</style>
