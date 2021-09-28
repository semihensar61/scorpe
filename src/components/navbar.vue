<template>
  <v-card color="grey lighten-4" height="60px" style="margin-bottom: 30px">
    <v-toolbar>
      <v-toolbar-title>
        <v-img
          class="Vector-Smart-Object"
          src="https://regularlabs.com/images/extensions/dummycontent/banner.png"
        ></v-img>
      </v-toolbar-title>

      <v-toolbar-items>
        <p class="page-name">{{ $t(`message.${currentPage}`) }}</p>
      </v-toolbar-items>
      

      <v-spacer></v-spacer>

      <div class="navigation-router">
        <a class="navigation-item" @click="click('/')">{{
          $t("message.home")
        }}</a>
        <a class="navigation-item" @click="click('/contact-us')">{{
          $t("message.contact_us")
        }}</a>
        <!-- <a class="navigation-item" href="#">Hizmetlerimiz <strong class="dropdown"></strong> </a> -->
      </div>
       <div class="langs">
              <v-btn
          @click="$i18n.locale = 'en'"
          >{{ $t("message.english") }}</v-btn
        >
        <v-btn
          @click="$i18n.locale = 'tr'"
          >{{ $t("message.turkish") }}</v-btn
        >
          </div>

      <v-toolbar-items v-if="!isLogged">
        <div class="log-in">
          <login-dialog />
        </div>
      </v-toolbar-items>
      <v-toolbar-items v-if="isLogged">
        <div class="user">
          <p >{{user.name}}</p>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>


<script>
import { mapGetters } from "vuex";
import loginDialog from "./login-dialog.vue";

export default {
  components: { loginDialog },
  name: "navbar",
  data: () => ({}),
  props: {
    fieldId: String,
    grid: {
      type: Object,
    },
    styles: {
      type: Object,
      default: () => {
        return {};
      },
    },
    className: {
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      currentPage: "currentPage",
      isLogged: "isLogged",
      user:"user"
      // ...
    }),
  },
  methods: {
    click(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style>

.langs {
    margin-right: 20px;
}
.user {
    margin-top: 20px
}

.Vector-Smart-Object {
  width: 175px;
  height: 36px;
}

.page-name {
  margin-top: 25px;
}

.log-in {
  padding: 27px 0px;
}

.navigation-router {
  height: 15px;
}

.navigation-item {
  text-decoration: none;
  margin-right: 30px;
  color: black !important;
  font-family: Hind;
  font-size: 14px;
  font-weight: bold;
}


</style>

