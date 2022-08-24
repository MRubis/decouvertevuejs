import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Cities from "./components/CitiesList.vue";
import Home from "./components/Home.vue";


import "./assets/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/Home", name: "Home", component: Home },
    { path: "/", redirect: "/Home" },
    { path: "/Cities", name: "Cities", component: Cities },
  ],
});

createApp(App).use(router).mount("#app");
