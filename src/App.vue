<template>
  <v-app id="app">
    <Navbar v-if="!this.detectMob()"/>
    <navbar-mobile v-if="this.detectMob()"/>
    <router-view/>
    <FooterDummy id="footer"/>
  </v-app>
</template>
<script>
import Navbar from "./components/navbar.vue"
import NavbarMobile from "./components/navbar-mobile.vue"
import FooterDummy from "./components/footer-dummy.vue"

export default ({
  components: {
    Navbar,
    FooterDummy,
    NavbarMobile
  },
  methods : {
    detectMob: () => {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ];
      console.log("detect mobile")

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    },
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {

}
</style>
