<template>
     <footer id="footer">
       <div>
        <img id="logo-los-cocos-footer" alt="logo-los-cocos-footer" src="../assets/los-cocos-iso-footer.png" />
        <router-link to="/termsandconditions">Terms and Conditions</router-link>
        <router-link to="/privacypolicy">Privacy Policy</router-link>
        <router-link to="/aboutus">About us</router-link>
        <router-link to="/partners">Partners</router-link>
       </div>
       <div>

        <a id="email" href = "mailto: reservations@loscocosbungalows.com">reservations@loscocosbungalows.com</a>
        <a id="tel" href="tel:+34982458720">Tlf: +34 982 458 720</a>
       <div>

        <fa icon="rss"/>
        <fa :icon="['fab', 'facebook-square']"/>
        <fa :icon="['fab', 'instagram']"/>
        <fa :icon="['fab', 'twitter']"/>
       </div>
       </div>
       
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name:"Footer",
})
export default class Footer extends Vue {
}
</script>

<style lang="scss">

#footer{
  border-top: 2px solid #b4bbc2;
  margin-top:auto;
  display: flex;
  justify-content: space-between;  
  *{
    margin: 5px;
  }
}
#footer svg{
  color: #b4bbc2;
  display: block;
  margin: auto;
  padding: 5px;
}
#footer #email,#footer #tel {
  color: #0e76cc;
}
#footer a{ display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;}
#footer div{
  display: flex;  
}

  
</style>

