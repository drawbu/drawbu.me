<template>
  <footer>
    My socials:
    <a href="https://github.com/drawbu">
      <img
        v-if="this.$store.state.OnDarkMode"
        src="../assets/social_networks/github-light.svg"
        alt=""
        width="25"
        height="25"
      />
      <img
        v-else
        src="../assets/social_networks/github-dark.svg"
        alt=""
        width="25"
        height="25"
      />
    </a>
    <a href="https://twitter.com/drawbu">
      <img
        v-if="this.$store.state.OnDarkMode"
        src="../assets/social_networks/twitter-light.svg"
        alt=""
        width="25"
        height="25"
      />
      <img
        v-else
        src="../assets/social_networks/twitter-dark.svg"
        alt=""
        width="25"
        height="25"
      />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
body {
  #app {
    footer {
      display: flex;
      align-items: center;
      margin-top: 6rem;

      a {
        margin-left: 1rem;
      }
    }
  }
}
</style>
