export default {
  component: () => import("@/pages/404.vue"),
  name: "404",
  path: "/",
  meta: {
    title: "404",
    tags: [
      {
        name: "description",
        content: "This is the 404 error page meta description"
      }
    ]
  }
}
