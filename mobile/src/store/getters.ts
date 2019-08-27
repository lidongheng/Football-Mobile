import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  user (state: any): any {
    return state.user
  },
  title (state: any): any {
    return state.title
  }
}

export default getters
