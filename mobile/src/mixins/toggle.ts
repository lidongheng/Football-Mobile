import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class Toggle extends Vue {
  @Provide() isLayoutShow: boolean = false
  noContent () {
    this.isLayoutShow = true
    let that = this
    setTimeout(function () {
      that.isLayoutShow = false
    }, 1900)
  }
}
