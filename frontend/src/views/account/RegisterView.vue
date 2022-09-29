<template src="../../html/pages-register.html" >
</template>

<script>
export default {
  name: 'RegisterView',
  inject: ["globals"],
  data() {
   return {
    form: {},
   }
  },
  methods: {                         async registerForm() {
      await this.globals.register(this.form)
    },
},
}
</script>

