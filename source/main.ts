import Vue from "vue"
import pkg from "../package.json"

import "@/assets/scss/global.scss"


/**
 * Import the store, router and Vue template
 * conditionally based on if the user is viewing
 * the base website, or the workspace application.
 */

const { store, router, template } = require("@/app")


/**
 * Globally register all common components
 * so they can be used from anywhere in the system.
 */

const common = require.context("./components/common", true, /\w+(.vue|.js)$/)

common.keys().forEach((filename: string) => {
  const config = common(filename)
  let parts = filename.split("/").filter(part => part !== ".")
  let name: any = parts.join("").replace(/\.\w+$/, "")
  Vue.component(name, config.default || config)
})


/**
 * Build the global data object.
 * This data will be accessible from anywhere
 * inside of the Vue project.
 */

const data: any = {
  name: pkg.name,
  author: pkg.author,
  version: pkg.version,
  description: pkg.description
}


/**
 * Create the Vue instance and start rendering
 * layouts and components.
 */

new Vue({ router, store, data, 
  render: (component: any) => component(template) 
}).$mount('#app')


export { store, router, template }