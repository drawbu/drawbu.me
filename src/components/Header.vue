<template>
  <header>
    <h1 id="title">{{ $route.name }}</h1>
    <div id="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <button id="theme_changer" @click="changeTheme()">
      <img
        v-if="this.$store.state.OnDarkMode"
        src="../assets/theme_buttons/sun-light.svg"
        alt=""
        class="d-inline-block align-left"
        width="25"
        height="25"
      />
      <img
        v-else
        src="../assets/theme_buttons/sun-dark.svg"
        alt=""
        class="d-inline-block align-left"
        width="25"
        height="25"
      />
    </button>
  </header>
</template>

<script>
import { useCookies } from 'vue3-cookies';

export default {
  name: 'Header',

  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },

  methods: {
    changeTheme: function () {
      this.$store.state.OnDarkMode = !this.$store.state.OnDarkMode;
      this.cookies.set('on_dark_mode', this.$store.state.OnDarkMode, '30d');

      if (this.$store.state.OnDarkMode) {
        document.querySelector('body').classList.add('dark');
      } else {
        document.querySelector('body').classList.remove('dark');
      }
    },
  },
};
</script>

<style lang="scss">
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(89deg);
  }
}

$underline: all 0.2s ease-in-out;

body {
  #app {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;

      h1 {
        &#title {
          text-align: start;
          margin-top: 1rem;
          font-size: 40px;
          font-weight: 800;
        }
      }

      #navbar {
        display: flex;
        gap: 3rem;

        a {
          text-decoration: none;
          color: #24292f;
          transition-duration: 0.5s;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      button {
        padding: 0;

        &#theme_changer {
          background-color: transparent;
          border: none;
        }

        img {
          animation: rotation 0.5s;
          cursor: pointer;
          transition-duration: 0.5s;
        }
      }

      @media screen and (max-width: 840px) {
        display: grid;
        grid-template-areas:
          'title theme-button'
          'navbar navbar';

        h1 {
          grid-area: title;
        }

        #navbar {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          grid-area: navbar;
        }

        button {
          grid-area: theme-button;
        }
      }
    }
  }
  &.dark {
    #app {
      header {
        #navbar {
          a {
            color: #c9d1d9;
            transition-duration: 0.5s;
          }

          button {
            img {
              filter: invert(91%) sepia(20%) saturate(103%) hue-rotate(170deg)
                brightness(92%) contrast(84%);
              animation: rotation 0.5s;
              transition-duration: 0.5s;
            }
          }
        }
      }
    }
  }
}
</style>
