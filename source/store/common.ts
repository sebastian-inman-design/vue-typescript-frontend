const state = {

  activeModal: null

}

const mutations = {

  OpenModal(state: any, modal: any) {

    state.activeModal = modal

  },

  CloseModal(state: any) {

    state.activeModal = null

  }

}

const actions = {

  async OpenModal(context: any, modal: any) {

    return new Promise((resolve, reject) => {
      context.commit("OpenModal", modal)
      resolve()
    })

  },

  async CloseModal(context: any) {

    return new Promise((resolve, reject) => {
      context.commit("CloseModal")
      resolve()
    })

  }

}

export default { namespaced: true, state, mutations, actions }
