<template>
  <div class="form-control" :style="{width: this.width}">
    <textarea :name="name" :cols="cols" :rows="rows" :placeholder="placeholder"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class TextareaItem extends Vue {
  @Prop(String) name!: String
  @Prop(String) cols!: String
  @Prop(String) rows!: String
  @Prop(String) placeholder!: String
  @Prop({ default: '80%' }) width!: String
}
</script>

<style lang="scss" scoped>
  .form-control {
    margin: .2666666rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  textarea {
    display: block;
    width: 100%;
    padding: .16rem .32rem;
    font-size: .4266666rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ededed;
    border-radius: .106666rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  textarea:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 .085333rem rgba(0,123,255,.25);
  }
</style>
