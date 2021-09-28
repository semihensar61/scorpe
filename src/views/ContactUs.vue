<template>
  <v-row justify="center" align="center">
    <v-card class="form-step-1">
      <v-card-title> {{ $t("message.contact_us") }}</v-card-title>
      <v-form ref="form">
        <label>{{$t("message.name")}}</label>
        <v-text-field
          dense
          v-model="name"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          :error-messages="nameErrors"
          required
          filled
          style="margin-top: 10px"
        ></v-text-field>

        <label>Email</label>
        <v-text-field
          dense
          v-model="email"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          :error-messages="emailErrors"
          type="email"
          required
          filled
          style="margin-top: 10px"
        ></v-text-field>

        <label>Cep {{$t("message.phone")}}</label>
        <v-text-field
          dense
          v-model="phone"
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
          :error-messages="phoneErrors"
          required
          filled
          style="margin-top: 10px"
        ></v-text-field>

        <label>{{$t("message.countries")}}</label>
        <v-select
          :items="this.countries"
          v-model="country"
          style="margin-top: 10px"
        ></v-select>

        <label>{{$t("message.text")}}</label>
        <v-text-field
          dense
          v-model="text"
          required
          persistent-placeholder
          filled
          style="margin-top: 10px"
        ></v-text-field>
      </v-form>

      <v-btn block class="btn" ref="buttonSend" v-on:click="send">
        <span>{{$t("message.send")}}</span>
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, integer } from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";
import Vue from "vue";
import { mapMutations, mapGetters } from "vuex";
Vue.use(Vuelidate);

export default /*#__PURE__*/ {
  name: "Form-Step-1", // vue component name,
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    name: { required },
    surname: { required },
    phone: { integer, required },
  },
  components: {},
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      country: "",
      countries: [
        { calue: "TR", text: "Turkey" },
        { calue: "US", text: "United States of America" },
        { calue: "GB", text: "United Kingdom" },
        { calue: "DE", text: "Germany" },
        { calue: "SE", text: "Sweden" },
        { calue: "KE", text: "Kenya" },
        { calue: "BR", text: "Brazil" },
        { calue: "ZW", text: "Zimbabwe" },
      ],
      text:"",

      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  props: {},
  computed: {
    ...mapGetters(["user"]),
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Ad alanı zorunludur.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Lütfen doğru bir e-mail giriniz. ");
      !this.$v.email.required && errors.push("E-mail alanı zorunludur");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.integer &&
        errors.push("Lütfen doğru bir telefon numarası giriniz.");
      !this.$v.phone.required && errors.push("Telefon numarası zorunludur.");
      return errors;
    },
  },
  methods: {
    ...mapMutations(["setPageName"]),
    send() {
      const toSend = {
        name: this.name,
        email: this.email,
        phonenumber: this.phone,
        country_code: this.country,
        text: this.text
      }
      console.log("to send JSON object", toSend);
    },
  },
  mounted() {
    this.setPageName("contact_us");
    // if any user logged in when the contact page is loaded, name and email is prefilled in mounted
    const user = this.user;
    this.name = user.name;
    this.email = user.email;
  },
};
</script>


<style scoped>
.text-input {
  display: grid;
}
.form-step-1 {
  width: 50%;
  height: 85%;
  margin: 95px 0;
  padding: 100px 150px;
}

@media only screen and (max-width: 1024px) {
  .form-step-1 {
    width: 90%;
    height: 85%;
    margin: 95px 0;
    padding: 15px 20px;
  }

  .col {
    padding: 0 12px;
  }

  .col-sm-1.col {
    flex: 0 0 8.33%;
  }
}

#checkbox {
  margin-right: 10px;
  width: 17px;
  height: 17px;
}

.col {
  padding: 0 12px;
}

.col-sm-11 {
  padding-top: 22px;
}

.btn {
  margin-top: 35px;
  justify-content: center;
}

.go {
  justify-content: flex;
}

.v-input__slot {
  align-items: unset !important;
}
</style>
