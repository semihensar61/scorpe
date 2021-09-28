<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          {{$t("message.log_in")}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{$t("message.log_in")}}</span>
        </v-card-title>
        <v-row justify="center" align="center">
          <v-form ref="form">
            <label>{{$t("message.name")}}</label>
            <v-text-field
              dense
              v-model="name"
               :rules="[rules.required]"
              style="margin-top: 10px"
            ></v-text-field>

            <label>Email</label>
            <v-text-field
              dense
              v-model="email"
              :rules="[rules.required, rules.email]"
              style="margin-top: 10px"
            ></v-text-field>

            <label>{{$t("message.password")}}</label>
            <v-text-field
              dense
              v-model="password"
              :rules="[rules.required]"
              type="password"
              style="margin-top: 10px"
            ></v-text-field>
          </v-form>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            {{$t("message.close")}}
          </v-btn>
          <v-btn color="green darken-1" text @click="login">
            {{$t("message.log_in")}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapMutations} from "vuex"
export default {
  data() {
    return {
      dialog: false,
      name:"",
      email:"",
      password:"",
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    };
  },
  methods : {
    ...mapMutations(["setUser"]),
    login () {
      const user = {
        name: this.name,
        password: this.password,
        email: this.email
      }
      this.setUser(user)
    }
  }
};
</script>
