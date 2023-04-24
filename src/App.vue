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
  },

}
</script>

<style lang="scss">
* {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 0.3s;
}


*::-webkit-scrollbar {
  background-color: $blue-bgc;
  width: 8px;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 5px solid transparent;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  cursor: pointer;
  border: 4px solid transparent;
}

*::-webkit-scrollbar-button {
  display: none
}


.overflow {
  min-height: 100vh
}

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
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  font-size: 16px;
  background-color: $blue-bgc;
}

.title {
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    & h1 {
      font-family: 'Russo One', sans-serif;
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
}

button.btn {
  padding: 8px 32px;
  background-color: $blue-light;
  color: white;
  line-height: 20px;
  margin-top: 10px;
  width: 100%;
  border-radius: 8px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: $blue;
  }
}
</style>
