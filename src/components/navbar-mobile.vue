<template>
  <v-card color="grey lighten-4" height="60px" style="margin-bottom: 30px">
    <v-toolbar>
      <v-toolbar-items>
        <p class="page-name">{{ $t(`message.${currentPage}`) }}</p>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
            <v-list-item>
                <a class="navigation-item" @click="click('/')">{{
              $t("message.home")
            }}</a>
            </v-list-item>
            <v-list-item>
                <a class="navigation-item" @click="click('/contact-us')">{{
              $t("message.contact_us")
            }}</a>
            </v-list-item>

          <v-toolbar-items v-if="!isLogged">
            <div class="log-in">
              <login-dialog />
            </div>
          </v-toolbar-items>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>


<script>
import { mapGetters } from "vuex";
import loginDialog from "./login-dialog.vue";

export default {
  name: "navbar",
  components: { loginDialog },
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
      user: "user",
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
.v-toolbar__content {
  margin: 0 auto;
}

.langs {
  margin-top: 15px;
  margin-right: 20px;
}
.user {
  margin-top: 20px;
}

.Vector-Smart-Object {
  width: 75px;
  height: 36px;
}

.page-name {
  justify-content: flex-start;
}

.log-in {
    padding-left: 20px;
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

