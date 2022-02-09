<template>
  <div class="my-card" :style="width?{width:width+'px'}:{}">
    <div class="my-card-img" :style="imgHeight?{height:imgHeight+'px'}:{}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="my-card-summary">
      {{summary}}
    </div>
    <div v-else class="my-card-summary">
      <slot></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'my-card',
  props:{
    width:{
      type:Number,
      default:0
    },
    imgSrc:{
      type:String,
      default:''
    },
    imgHeight:{
      type:Number,
      default:0
    },
    summary:{
      type:String,
      default:''
    }
  }
}
</script>