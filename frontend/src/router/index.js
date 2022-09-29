import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import { LoginView, RegisterView, AccountView,  ResetPasswordView }  from '../views/account'
import { LayoutView, HomeView }  from '../views/pages'
//import alertify from "alertifyjs"
const routes = [
  {
    path: '/account',
    name: 'account',
    component: AccountView,
    children: [
	    { path: 'login', component: LoginView},
	    { path: 'register',  component: RegisterView},
      { path: 'reset_password',  component: ResetPasswordView },
    ]

  },
  {
    path: '/',
    name: 'Pages',
    component: LayoutView,
    children: [
      { path: '',  component: HomeView },
    ]

  },
  {                                  path: '/profile/:id',                name: 'Profile',                 component: ProfileView    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'), 
  }
]

const router = createRouter({
  history: createWebHistory(
	  //process.env.BASE_URL
	  ),
  routes,


})
/*
import globals from "../stores/globals"
router.beforeEach((to, from, next) => {
	alert(globals.state.loggedIn)
        if(to.path.startsWith("/target") && !globals.state.loggedIn ) {
		alertify.notify("You need to login to access")
		//next("/account/login")
		next(false)
	}
	else if(to.path.startsWith("/account") && globals.state.loggedIn==true) {                                                  alertify.notify("You are already logged in")                          
		next(false)                }
	next()
})
*/
export default router
