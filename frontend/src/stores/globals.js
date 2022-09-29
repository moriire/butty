//<script>
/* eslint-disable */
import axios from "axios";
import alertify from "alertifyjs";
import { reactive, computed, readonly } from "vue";
import router from "@/router";
const BASE = "http://127.0.0.1:8000";

//alertify.alert("hi somebody")
//const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}

	const state = reactive(
	{
		data : JSON.parse(localStorage.getItem("user")),
		loggedIn: localStorage.getItem("loggedin"),
	}
	);
	const $errors=reactive({});

	const updateStore = function(b){
		state.data = b
	};
	const refreshToken = async function(refresh_token) {
		try {
			const res = await axios.post(`${BASE}/v1/rest/api/rest/auth/token/refresh/`, { refresh_token });
			const resp = res.data
		} catch(errors) {
			return "error"
		}
	};
	const verifyToken = async function(access_token) {
		try {
			const res = await axios.post(`${BASE}/v1/rest/api/auth/token/verify/`, { access_token });
			const resp = res.data.code
			if (resp==="token_not_valid") {
				return "expired"
			}
			return "active"
		} catch(errors) {
			return "error"
		}
	};
	const resetPassword = async function(email) {
		try {
			const res = await axios.post(`${BASE}/v1/rest/api/auth/password/reset/`, { email });
			const resp = res.data
			alertify.alert("Password reset successful")
			router.push("/account/confirm_password")
		} catch(errors) {
				alertify.alert(errors);
				$errors.code = errors.response.status;
				$errors.message= "Username or password error"
		}
	};
	const login = async (email, password) => {
		alert(1);
		try {
			const res = await axios.post(`${BASE}/api/login/`, { email, password });
			const resp = res.data
			localStorage.setItem("user", JSON.stringify(resp));
			//updateStore(resp);
			localStorage.setItem("loggedin", true),
			alertify.success("loggedin")
			//router.push("/")
			location.href="/"
		} catch(errors) {
				$errors.code = errors.response.status;
				$errors.message= "Username or password error";
			alertify.error(JSON.stringify("Wrong email or password"))
		}
	};

	const logout = async function(){
		try {
			const res = await axios.post(`${BASE}/api/auth/logout/`)

			const resp = res.data
			localStorage.removeItem("user");
			localStorage.removeItem("loggedin");
			alertify.alert("loggedout")
			//router.push("/account/login")
			location.href="/";
		} catch(errors) {
				return "errors"
		}
		localStorage.removeItem("user");

	};

	const register = async function(kw){
		try {
			const res = await axios.post(`${BASE}/api/register/`, kw )
			alertify.alert(res.data);
		} catch(errors){
			alertify.alert( JSON.stringify(errors.response));
		}
	};
	
	const auth = computed(() => state.data);


 export default { 
	 state: readonly(state),
	//resetPassword,
	login, 
	register,
	logout,
	auth,
	$errors: readonly($errors),
	BASE,
	 state,
	}
