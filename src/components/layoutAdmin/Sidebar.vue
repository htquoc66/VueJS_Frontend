<template>
    <!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand">
            <i class="fa-solid fa-face-smile px-4"></i>
            <span class="text">AdminHub</span>
		</a>
		<ul class="side-menu top p-0">
			<li class="item">
					<RouterLink to="/admin/dashboard">
						<i class="fa-sharp fa-solid fa-gauge px-3"></i>
						<span class="text">Dashboard</span>
					</RouterLink>
			</li>
			<li class="item">
					<RouterLink to="/admin/producers" >
						<i class="fa-solid fa-truck px-3"></i>
						<span class="text">Nhà sản xuất</span>
					</RouterLink>
			</li>
			<li class="item">
					<RouterLink to="/admin/categories" >
						<i class="fa-solid fa-boxes-stacked px-3"></i>
						<span class="text">Danh mục</span>
					</RouterLink>
			</li>
			<li class="item">
				<RouterLink to="/admin/products" >
					<i class="fa-solid fa-box px-3"></i>
					<span class="text">Sản phẩm</span>
				</RouterLink>
			</li>
		</ul>
		<ul class="side-menu p-0">
			<li class="">
				<a href="#" class="">
					<i class="fa-solid fa-gear px-3"></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
                    <i class="fa-solid fa-backward px-3"></i>
                    <span class="text" @click="logOut()">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	<!-- SIDEBAR -->
</template>

<script>
import $ from "jquery";


export default{
	
	methods:{
		logOut(){
            localStorage.removeItem('tokenAdmin');
            this.$store.dispatch('admin', null);
            // this.$store.dispatch('user', res.data.user);

        },
	},
}

</script>

<style scoped>
a.router-link-active{
	background-color: #fff !important;
	position: relative;
	border: 1px solid #eee;

}
a.router-link-active::before{
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: -40px;
	right: 0;
	box-shadow: 20px 20px 0 var(--grey);
	z-index: -1;
}
a.router-link-active::after{
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	bottom: -40px;
	right: 0;
	box-shadow: 20px -20px 0 var(--grey);
	z-index: -1;
}


a:hover{
	text-decoration: none;
}
</style>

