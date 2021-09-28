<template>
<v-row justify="center" align="center">
  <v-card class="card">
    <v-card-title>
      {{$t("message.home_title")}}
    </v-card-title>
    <v-card-text>
      {{$t("message.home_content")}}
    </v-card-text>
  </v-card>
</v-row>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    name: 'Home',
    components: {
    },
    methods: {
      ...mapMutations(["setPageName"])
    },
    mounted() {
      this.setPageName("home")
    }
  }
</script>
<style scoped>
  .card{
    width: 50%;
    height: 85%;
    justify-content: center;
    padding: 100px 150px;
  }
    @media only screen and (max-width: 1024px) {
    .card{
      width: 90%;
      height: 85%;
      padding: 15px 20px;
    }

    .col{
      padding: 0 12px;
    }

    .col-sm-1.col {
        flex: 0 0 8.33%;
    }
  }
</style>
