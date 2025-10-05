import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Cart from "../pages/Cart.vue";
import Wishlist from "../pages/Wishlist.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Checkout from "../pages/Checkout.vue";
import Admin from "../pages/Admin.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: Product },
  { path: "/cart", component: Cart },
  { path: "/wishlist", component: Wishlist },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/checkout", component: Checkout },
  { path: "/admin", component: Admin},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});