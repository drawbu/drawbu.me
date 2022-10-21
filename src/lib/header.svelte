<script>
  import { Router, Link } from 'svelte-routing';
  import { SunIcon } from 'svelte-feather-icons';
  import { get } from 'svelte/store';

  import { theme } from '../store';

  let animation = false;
  function toggle_darkMode_btn() {
    animation = true;
    setTimeout(() => {
      animation = false;
    }, 360);

    theme.set(get(theme) === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('color-scheme', $theme);
  }

  document.documentElement.setAttribute('color-scheme', $theme);
  export let url = '';
</script>

<header>
  <h1>drawbu.me</h1>
  <div>
    <Router {url}>
      <nav>
        <Link to="/">Home</Link>
        <a href="https://drawbu.dev">Projects</a>
      </nav>
    </Router>
    <button
      class:animate-spin={animation}
      on:click={toggle_darkMode_btn}
    >
      <SunIcon />
    </button>
  </div>
</header>

<style lang="scss">
  header {
    margin-top: 32px;
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 3rem;
      line-height: 1;
      font-weight: 800;
      margin-bottom: 32px;
    }

    div {
      display: flex;
      gap: 48px;

      nav {
        display: flex;
        gap: 48px;

        :global(a) {
          /* Global style because the <a> element is in <Link> */
          color: var(--text-color);

          &:hover {
            text-decoration-color: var(--text-color);
          }
        }
      }

      button {
        background-color: transparent;
        border: 0;
        cursor: pointer;

        &.animate-spin {
          :global(svg) {
            animation-name: spin;
            animation-duration: 500ms;
            animation-timing-function: linear;
          }
        }
      }
    }

    @media (min-width: 840px) {
      flex-direction: row;
      justify-content: space-between;

      h1 {
        margin-bottom: 0;
      }

      div {
        gap: 80px;
      }
    }
  }

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
  }
</style>
