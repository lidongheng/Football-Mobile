import { ActionTree } from 'vuex'
import jwt_decode from 'jwt-decode'

const actions: ActionTree<any, any> = {
  async setUser ({ state, commit }, user: any) {
    const decoded: any = jwt_decode(user)
    commit('SET_USER', decoded)
  },
  async clearUser ({ state, commit }) {
    commit('CLEAR_USER')
  },
  async setTitle ({ state, commit }, title: string) {
    commit('SET_TITLE', title)
  }
}

export default actions
