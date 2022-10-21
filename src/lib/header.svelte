<script>
  import { SunIcon, MoonIcon } from 'svelte-feather-icons';
  import { Router, Link } from 'svelte-routing';
  import { fade, fly } from 'svelte/transition';
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

  let prefers_dark_scheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  setInterval(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches !== prefers_dark_scheme) {
      prefers_dark_scheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      theme.set(prefers_dark_scheme ? 'dark' : 'light');
      document.documentElement.setAttribute('color-scheme', $theme);
    }
  }, 1000)
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
      {#if $theme === 'light'}
        <div in:fly="{{ opacity: 0, duration: 100 }}" out:fade>
          <MoonIcon />
        </div>
      {:else }
        <div in:fly="{{ opacity: 0, duration: 100 }}" out:fade>
          <SunIcon />
        </div>
      {/if}
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
        position: relative;

        &.animate-spin :global(svg) {
          animation-name: spin;
          animation-duration: 360ms;
          animation-timing-function: linear;
        }

        div {
          position: absolute;
          top: 0;
          right: 0;

          :global(svg.feather) {
            color: var(--text-color);
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
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>
