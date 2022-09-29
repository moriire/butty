<template>
	<section class="breadcrumb_section furniture_breadcrumb deco_wrap d-flex align-items-center clearfix" data-bg-color="#f4f2f2">
				<div class="container-fluid prl_90">
					<h1 class="f2_page_title mb-0 text-uppercase">DESIGN FURNITURE</h1>
				</div>
				<div class="deco_image">
					<img src="/assets/images/shop/furniture_store/img_27.png" alt="image_not_found">
				</div>
			</section>
			<div class="container-fluid prl_90">
				<div class="f2_breadcrumb_nav_wrap">
					<ul class="ce_breadcrumb_nav ul_li clearfix">
						<li><a href="#!">Home</a></li>
						<li>Shop</li>
						<li>Furniture Store</li>
						<li>Shop Page</li>
					</ul>
				</div>
			</div>




			<section class="details_section furniture_details sec_ptb_100 clearfix">
				<div class="container-fluid prl_90">
					<div class="f2d_description_tab">
						<ul class="nav ul_li_center text-uppercase mb_50" role="tablist">
							<li>
								<a class="active" data-toggle="tab" href="#description_tab">Targets History</a>
							</li>
							<li>
								<a data-toggle="tab" href="#reviews_tab">Reviews</a>
							</li>
							<li>
								<a data-toggle="tab" href="#information_tab">Additional Information</a>
							</li>
						</ul>

					
						<div class="tab-content">
							<div id="description_tab" class="tab-pane active">
								<div class="row mb_15">
									<div class="col-lg-6">

									<ProfileTarget :targets="targets" />
										
									</div>

									<div class="col-lg-6">
											<ProfileSavings :savings="savings" />
									</div>
								</div>

							</div>

							<div id="reviews_tab" class="tab-pane fade">
								<div class="row justify-content-center align-items-center">
								  <div class="col-lg-4 col-md-6 col-sm-8 col-xs-10 center">

								    {{ success }}
								    {{ errors }}
								   <!--div class="form_item">
								      <input type="integer" v-model=" targetdata.customer" name="customer" placeholder="user id" />
								   </div-->
								   <div class="form_item">
								    <input type="integer" v-model=" targetdata.amount" name="amount" placeholder="Target amount" />
								  </div>
								  <div class="form_item">
								    <input type="text" v-model=" targetdata.purpose" name="purpose" placeholder="purpose" />
								  </div>
								  <div class="form_item">
								    <textarea type="text" v-model=" targetdata.description" name="description" placeholder="description"></textarea>
								  </div>
								  <div class="form_item">
								    <input type="date" name="deadline" v-model=" targetdata.deadline" />
								  </div>
								  <div class="form_item">
								    <button v-on:click="postTarget" class="bg_black text-white">Create Target</button>
								  </div>
								 </div>
						  </div>

							</div>

							<div id="information_tab" class="tab-pane fade">
								<div class="row mb_15">
									<div class="col-lg-6">
										<div class="image_wrap mb_15">
											<img src="assets/images/details/furniture/img_05.jpg" alt="image_not_found">
										</div>
									</div>

									<div class="col-lg-6">
										<div class="content_wrap">
											<p class="mb_15">
												Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare. Sewid commodo tempor dapibus. Duis convallis turpis in tortor voare risus in euismod varius nullam feugiat ultrices. Sed condimentum est libero, aliqculis.Phasellus scelerisque nisl non ullamcorper mollis. Donec et libero quis erat commodo suscipit. Mae elit a, eleifend leo. Phase pharetra mictor diam. id iarciet spen idisse rhoncu ut pharetrnisi vestibul mum ornare.Lorie ipsum dolor stamet, cons ctetur adipiselit. Duis non scelerisque est, quis aliquiam ligula.Aene amet
											</p>
											<p class="mb_15">
												consectetuer adipiscing elit. Phasellus hendrerit. Pellent iesque aliquet nec urna. In nisi neque, aliquet vel, dapibus id, mattis ve eet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse pi. Ut convallis, sem sit ame quam leo, nec dapibus tortor nibh sed augue. Intger eu magna sit amet metus fermentum posuer.
											</p>
											<p class="mb_15">
												Morbi sit amet nulla sed dolor elem sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipieros ut libero. Ut condimen itumi estd dolor gravida convallis. Morbi vitae ante. Vivamus ultrices lucinunc.
											</p>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-lg-6">
										<div class="content_wrap">
											<p class="mb_15">
												Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare. Sewid commodo tempor dapibus. Duis convallis turpis in tortor voare risus in euismod varius nullam feugiat ultrices. Sed condimentum est libero, aliqculis.Phasellus scelerisque nisl non ullamcorper mollis. Donec et libero quis erat commodo suscipit. Mae elit a, eleifend leo. Phase pharetra mictor diam. id iarciet spen idisse rhoncu ut pharetrnisi vestibul mum ornare.Lorie ipsum dolor stamet, cons ctetur adipiselit. Duis non scelerisque est, quis aliquiam ligula.Aene amet
											</p>
											<p class="mb_15">
												consectetuer adipiscing elit. Phasellus hendrerit. Pellent iesque aliquet nec urna. In nisi neque, aliquet vel, dapibus id, mattis ve eet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse pi. Ut convallis, sem sit ame quam leo, nec dapibus tortor nibh sed augue. Intger eu magna sit amet metus fermentum posuer.
											</p>
											<p class="mb_15">
												Morbi sit amet nulla sed dolor elem sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipieros ut libero. Ut condimen itumi estd dolor gravida convallis. Morbi vitae ante. Vivamus ultrices lucinunc.
											</p>
										</div>
									</div>

									<div class="col-lg-6">
										<div class="content_wrap">
											<h4 class="title_text mb_15">PRODUCT DETAILS</h4>
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-6">
													<div class="image_wrap mb_30">
														<img src="assets/images/details/furniture/img_06.jpg" alt="image_not_found">
													</div>
												</div>

												<div class="col-lg-6 col-md-6 col-sm-6">
													<div class="image_wrap mb_30">
														<img src="assets/images/details/furniture/img_06.jpg" alt="image_not_found">
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-12">
													<ul class="check_info_list ul_li_block mb_30">
														<li><i class="fas fa-check-circle mr-2"></i> Worn and shot by one o</li>
														<li><i class="fas fa-check-circle mr-2"></i> Crew neck</li>
														<li><i class="fas fa-check-circle mr-2"></i> Short sleeves</li>
														<li><i class="fas fa-check-circle mr-2"></i> Large logo print to chest</li>
														<li><i class="fas fa-check-circle mr-2"></i> Regular fit</li>
														<li><i class="fas fa-check-circle mr-2"></i> True size</li>
													</ul>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12">
													<ul class="check_info_list ul_li_block mb_30">
														<li><i class="fas fa-check-circle mr-2"></i>Model’s height: 182.5cm/6’0″</li>
														<li><i class="fas fa-check-circle mr-2"></i>Model is wearing: Size Medium</li>
														<li><i class="fas fa-check-circle mr-2"></i>Soft, breathable jersey</li>
														<li><i class="fas fa-check-circle mr-2"></i>T-shirt fabric</li>
														<li><i class="fas fa-check-circle mr-2"></i>Main: 95% Cotton, 5% Elastane</li>
													</ul>
												</div>
											</div>
										</div>
										<span class="aware_info_icons">
											<img src="assets/images/icons/aware_icons.png" alt="image_not_found">
										</span>
									</div>
								</div>
								
    				
							</div>
						</div>
					</div>
				</div>
			</section>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

import ProfileTarget from '@/components/ProfileTarget';

import ProfileSavings from '@/components/ProfileSavings'


const headers = {
    "Content-Type": "application/json"};

const headers1 = {'Content-Type': 'application/json', 'X-CSRFToken': 'csrftoken',};

export default {
  name: 'ProfileView',
  data(){                               
  	return {                             		
  		targets: [],   
	    savings: [],
	    targetdata: {
									customer: this.$route.params.id,
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
  	async getTarget(){
			const userid = this.$route.params.id;
			const targetUrl = `http://127.0.0.1:5000/v1/api/target/${userid}/`;
			const savingsUrl = `http://127.0.0.1:5000/v1/api/savings/?savings=${userid}`;
			var targ = axios.get(targetUrl, { headers }),
			save = axios.get(savingsUrl, { headers });
			try {
				const [respTarget, respSavings] = await Promise.all([targ, save]);
				this.targets = respTarget.data.data;
				this.savings = respSavings.data.data;
				} catch(error){
					alert(JSON.stringify(error));
				}
			},


			async postTarget(){
			try {
				const resp = await axios.post("http://127.0.0.1:5000/v1/api/target/", this.targetdata, headers1);
				//, {headers1} );
				this.success = resp;
				} catch(error){
					this.errors = error;
				}
			},
  
  	},
 
  created(){
  	//alert("created");
		this.getTarget();

  },
  mounted(){
		alert(JSON.stringify(this.targets));
  },
  components: {
    ProfileTarget,
    ProfileSavings,
  }
}
</script>
