<template>
  <div class="my-card" :style="width?{width:width+'px':''}">
    <div class="my-card-img">
      <img src="" alt="img">
    </div>
    <div class="my-card-summary">
      summary
    </div>
    <div class="footer">
      footer
    </div>
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