import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  SET_USER (state: any, user: any):void {
    state.user = user
  },
  CLEAR_USER (state: any):void {
    state.user = null
  }
}

export default mutations
