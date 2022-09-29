<script>
import globals from "./stores/globals";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
export default {
  name: "App",
  data() {
     return {
     globals: globals,
     alertify: alertify
     }
  },
  provide() {
   return { 
   globals: this.globals,
   alertify: this.alertify
   }
   }, 
}
</script>
<template>
 <router-view />
</template>
<style src="../public/assets/css/style.css"></style>
<style src="../public/assets/vendor/simple-datatables/style.css" ></style>
<style src="../public/assets/vendor/remixicon/remixicon.css" ></style>

<style src="../public/assets/vendor/quill/quill.bubble.css" ></style>


<style src="../public/assets/vendor/quill/quill.snow.css" ></style>

<style src="../public/assets/vendor/boxicons/css/boxicons.min.css" ></style>

<style src="../public/assets/vendor/bootstrap/css/bootstrap.min.css" ></style>
