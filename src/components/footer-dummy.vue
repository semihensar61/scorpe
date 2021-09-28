<template>
  <v-container class="footer">
    <p>{{$t("message.dummy_footer")}}</p>
  </v-container>
</template>

<script>
  export default {
    name: 'footer-dummy',
  }
</script>
<style scoped>
.footer {
  background-color: aqua;
}
</style>
