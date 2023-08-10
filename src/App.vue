<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 15px;
  background-color: #f7f7f7;
}

body {
  max-width: 750px;
  padding: 1rem;
  margin: 1rem auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px #9999990e;
  height: calc(100vh - 6rem);
}

button,
input {
  border: none;
  border-radius: 5px;
}

::-webkit-scrollbar {
  display: none;
}

button {
  cursor: pointer;
}

#app {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.box {
  padding: 1rem;
  background-color: #515151;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 5px #49494971;
  color: #f0f0f0;
}

.enterFromLeft {
  animation: enterFromLeft 0.5s;
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-150%);
  }

  to {
    transform: translateY(0);
  }
}

.enterFromRight {
  animation: enterFromRight 0.5s;
}

@keyframes enterFromRight {
  from {
    transform: translateX(150%);
  }

  to {
    transform: translateY(0);
  }
}
</style>
