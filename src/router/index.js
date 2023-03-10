import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../components/layoutUser/Index.vue'),
    children:[
      {
        path: '/',
        name: 'home',   
        component: () => import('../views/User/Home.vue')
      },
      {
        path: '/products',
        name: 'products',   
        component: () => import('../views/User/Product.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/admin/login',
    name: 'admin.login',
    component: () => import('../views/Admin/LoginAdmin.vue')
  },

  {
    path:"/admin",
    component: () => import("../components/layoutAdmin/Index.vue"),
    meta: {
      authenticatedAdmin: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',   
        component: () => import('../views/Admin/Dashboard.vue')
      },
      {
        path: 'producers',
        name: 'producers',   
        component: () => import('../views/Admin/Producer/List.vue')    
      },
      {
        path: 'producer/create',
        name: 'producer.create',   
        component: () => import('../views/Admin/Producer/Form.vue')    
      },
      {
        path: 'producer/edit/:id',
        name: 'producer.edit',
        component: () => import('../views/Admin/Producer/Form.vue')
      },
      //category____________________________________________________
      {
        path: 'categories',
        name: 'categories',   
        component: () => import('../views/Admin/Category/List.vue')    
      },
      {
        path: 'category/create',
        name: 'category.create',   
        component: () => import('../views/Admin/Category/Form.vue')    
      },
      {
        path: 'category/edit/:id',
        name: 'category.edit',
        component: () => import('../views/Admin/Category/Form.vue')
      },
      // product__________________________________________________
      {
        path: 'products',
        name: 'product.list',
    
        component: () => import('../views/Admin/Product/List.vue')
      },
      {
        path: 'product/create',
        name: 'product.create',
    
        component: () => import('../views/Admin/Product/Form.vue')
      },
      {
        path: 'product/edit/:id',
        name: 'product.edit',
        component: () => import('../views/Admin/Product/Form.vue')
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const adminAuthenticated = localStorage.getItem('tokenAdmin') ? true : false;
  const userAuthenticated = localStorage.getItem('token') ? true : false;

  if (to.meta.authenticated && !userAuthenticated) {
      next({ name: 'login'});
  } else if (to.meta.authenticatedAdmin && !adminAuthenticated) {
      next({ name: 'admin.login'});
  } else {
      next();
  }
  
  
});



export default router
