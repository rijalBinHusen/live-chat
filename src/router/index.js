/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/firebaseApp";

// auth guard
const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  // console.log("Current user in auth guard", user);
  if (!user) {
    next({ name: "welcome" });
  }
  next();
};

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: Chatroom,
    beforeEnter: requiredAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
