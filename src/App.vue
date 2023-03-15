<template>
  <div id="app">
    <div class="title-wrapper">
      <h1 class="fw-bold ts">
        Выбери своего покемона
      </h1>
    </div>
    <vMainWrapper></vMainWrapper>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&family=Russo+One&display=swap');
</style>
<script>
import vMainWrapper from "./components/v-main-wrapper.vue";
export default {
  name: 'App',
  components: {
    vMainWrapper,
    //
  }
}
</script>

<style lang="scss"> 
body {
  margin: 0;
}

.ts {
  font-weight: bold;
  color: #FDD524;
  text-shadow:
    -0 -4px 0 #3362AE,
    0 -4px 0 #3362AE,
    -0 4px 0 #3362AE,
    0 4px 0 #3362AE,
    -4px -0 0 #3362AE,
    4px -0 0 #3362AE,
    -4px 0 0 #3362AE,
    4px 0 0 #3362AE,
    -1px -4px 0 #3362AE,
    1px -4px 0 #3362AE,
    -1px 4px 0 #3362AE,
    1px 4px 0 #3362AE,
    -4px -1px 0 #3362AE,
    4px -1px 0 #3362AE,
    -4px 1px 0 #3362AE,
    4px 1px 0 #3362AE,
    -2px -4px 0 #3362AE,
    2px -4px 0 #3362AE,
    -2px 4px 0 #3362AE,
    2px 4px 0 #3362AE,
    -4px -2px 0 #3362AE,
    4px -2px 0 #3362AE,
    -4px 2px 0 #3362AE,
    4px 2px 0 #3362AE,
    -3px -4px 0 #3362AE,
    3px -4px 0 #3362AE,
    -3px 4px 0 #3362AE,
    3px 4px 0 #3362AE,
    -4px -3px 0 #3362AE,
    4px -3px 0 #3362AE,
    -4px 3px 0 #3362AE,
    4px 3px 0 #3362AE,
    -4px -4px 0 #3362AE,
    4px -4px 0 #3362AE,
    -4px 4px 0 #3362AE,
    4px 4px 0 #3362AE,
    -4px -4px 0 #3362AE,
    4px -4px 0 #3362AE,
    -4px 4px 0 #3362AE,
    4px 4px 0 #3362AE;
}

#app {
  font-family:Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}

.title{
  &-wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    & h1{
      font-family: 'Russo One', sans-serif;
      text-transform: uppercase;
    }
  }
}
</style>
