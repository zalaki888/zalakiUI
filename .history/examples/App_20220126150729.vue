<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <my-card imgSrc="a.jpeg" summary="美丽的风景1" />
    <my-card imgSrc="b.jpeg" summary="美丽的风景2">
      <template v-slot:footer>
        <div>
          <div class="level">4A级·527人参观</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </my-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color:#9199A1;
  margin-bottom: 8px;
}
.price{
  color:#f01414;
}
</style>
