<template>
  <div id="app">
    <video autoplay muted loop id="background-video" ref="backgroundVideo">
      <source src="/background1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay"></div>
    <NavBar />
    <div class="main-content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter
  },
  mounted() {
    this.$refs.backgroundVideo.playbackRate = 0.5;
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #000;
  color: #fff;
  overflow: hidden; /* Prevent scrolling */
}

#background-video {
  position: fixed;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -2; /* Ensure video is behind other content */
  object-fit: cover; /* Ensures the video covers the background without being stretched */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
  z-index: -1; /* Ensure overlay is behind content but above video */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
