<template>
  <div class="form-control">
    <input :type="type" :name="name" :placeholder="placeholder"
           @input="updateValue($event.target.value)"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Home extends Vue {
  @Prop(String) type!: String
  @Prop(String) name!: String
  @Prop(String) placeholder!: String
  updateValue (val:String) {
    this.$emit('input', val)
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    height: 1.2533333rem;
    border-style:none;
    border-bottom-style:solid;
    border-bottom-width:thin;
    border-bottom-color:#ededed;
    font-size: .42666666rem;
    padding-left: .2rem;
  }
  .form-control {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
