<script>
  import { Router, Link } from 'svelte-routing';
  import { SunIcon } from 'svelte-feather-icons';
  import { get } from 'svelte/store';

  import { theme } from '../store';

  if (get(theme) === 'dark') {
    window.document.body.classList.toggle('dark-mode');
  }

  let animation = false;
  function toggle_darkMode_btn() {
    animation = true;
    setTimeout(() => {
      animation = false;
    }, 300);

    if (get(theme) === 'light') {
      theme.set('dark');
    } else {
      theme.set('light');
    }
    window.document.body.classList.toggle('dark-mode');
  }
  let pages = ['Home', 'About'];

  export let url = '';
</script>

<header>
  <h1>drawbu.me</h1>
  <div>
    <Router {url}>
      <nav>
        {#each pages as page}
          {#if page === 'Home'}
            <Link to="/">Home</Link>
          {:else}
            <Link to="/{page.toLowerCase()}">{page}</Link>
          {/if}
        {/each}
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
    justify-content: space-between;
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

      h1 {
        margin-bottom: 0;
      }

      div {
        gap: 80px;
      }
    }
  }

  :global(a, svg.feather-sun) {
    color: black;
  }

  :global(
    body.dark-mode header div nav a,
    body.dark-mode header div svg.feather-sun
   ) {
    color: white;
  }

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
</style>
