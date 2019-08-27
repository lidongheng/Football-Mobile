import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  SET_USER (state: any, user: any):void {
    state.user = user
  },
  CLEAR_USER (state: any):void {
    state.user = null
  },
  SET_TITLE (state: any, title: string):void {
    state.title = title
  }
}

export default mutations
