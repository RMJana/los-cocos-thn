<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <div id="loscocos">Los Cocos</div>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#loscocos {
 display: inline;
}
#nav {
  display: flex;
  padding: 30px;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
