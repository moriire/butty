<template>
<div class="row">
	<div class="col-lg-4 col-md-6 col-sm-8 col-xs-10">

    {{ success }}
    {{ errors }}
   <div class="form_item">
    	<input type="integer" v-model="target.customer" name="customer" placeholder="user id" />
   </div>
   <div class="form_item">
		<input type="integer" v-model="target.amount" name="amount" placeholder="Target amount" />
	</div>
	<div class="form_item">
		<input type="text" v-model="target.purpose" name="purpose" placeholder="purpose" />
	</div>
	<div class="form_item">
		<textarea type="text" v-model="target.description" name="description" placeholder="description"></textarea>
	</div>
	<div class="form_item">
		<input type="date" name="deadline" v-model="target.deadline" />
	</div>
		<button v-on:click="postTarget()">Create Target</button>
	</div>
	</div>

</template>

<script>
// @ is an alias to /src
import axios from "axios"
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const headers = {'Content-Type': 'application/json', 'X-CSRFToken': 'csrftoken',};

export default {
  name: 'TargetFormView',
  props: {
  userid: Number,
  },
  data(){                               
  	return {    
  	        target: {
									customer: this.props.userid,
									amount: 0.0,
									purpose: "",
									description: "",
									deadline: "",
					},  
					success: [],
					errors: [],
		}
  },
  methods: {
  	async postTarget(){
		try {
			const resp = await axios.post("http://127.0.0.1:5000/v1/api/target/", this.target, headers);
			//, {headers} );
			this.success = resp;
			} catch(error){
				this.errors = error;
			}
		},
  
  },
}
</script>
