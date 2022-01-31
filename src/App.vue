<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div id="app" :key="$route.name">
        <Header />
        <main>
          <component :is="Component" />
        </main>
        <Footer />
      </div>
    </transition>
  </router-view>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 300;
  font-size: 17px;
  background-color: #fdfdfd;
  color: #24292f;
  margin-bottom: 2rem;
  text-align: justify;
  transition-duration: 0.5s;

  #app {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 800px;
    margin: auto;

    @media screen and (max-width: 840px) {
      width: auto;
    }
  }

  &.dark {
    background-color: #0d1117;
    color: #c9d1d9;
    transition-duration: 0.5s;
  }
}

.fade-enter-active {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s ease;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
