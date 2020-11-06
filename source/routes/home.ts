export default {
  component: () => import("@/pages/Home.vue"),
  name: "Home",
  path: "/",
  meta: {
    title: "Home",
    tags: [
      {
        name: "description",
        content: "This is the home page meta description"
      }
    ]
  }
}
