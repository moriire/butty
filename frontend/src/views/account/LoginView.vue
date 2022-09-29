<template src="../../html/pages-login.html" >

</template>

<script>
export default {
  name: 'LoginView', 
  inject: ["globals"],
  data() {
   return {
    form: { email: "", password: ""}
   }
  },
  methods: {
  	async loginForm(e) {
	  alert(e);
	  alert(JSON.stringify(this.globals));
          await this.globals.login(...this.form)
    }
    },
}
</script>

