import Vue from "vue"
import Vuex from "vuex"

// Import Vuex modules
import common from "@/store/common"

Vue.use(Vuex)

export default <any> new Vuex.Store({
  modules: { common }
})
