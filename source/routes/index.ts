import Vue from "vue"
import VueRouter from "vue-router"

import home from "@/routes/home"
import error404 from "@/routes/404"

Vue.use(VueRouter)

const router: VueRouter = new VueRouter({
  mode: "history",
  routes: [
    home,
    error404
  ]
})

export default router
