<script>
  import { Router, Link } from 'svelte-routing';
  import { theme } from '../store'
  import { get } from 'svelte/store';
  
  if (get(theme) == 'dark') {
    window.document.body.classList.toggle('dark-mode')
  }

  function toggle_darkMode() {
    if (get(theme) == 'light') {
      theme.set('dark')
    } else {
      theme.set('light')
    }
    window.document.body.classList.toggle('dark-mode')
    console.log(get(theme))
  }
  let pages = ['Home', 'About']

  export let url = '';
</script>

<header class='mt-8 mb-16 flex items-center justify-between flex-col md:flex-row'>
  <h1 class='text-5xl font-extrabold mb-8 md:mb-0'>drawbu.me</h1>
  <div class='flex gap-12'>
    <Router url='{url}'>
      <nav class='flex gap-12'>
        {#each pages as page}
          {#if page == 'Home'}
            <Link to='/' class='nav-button'>Home</Link>
          {:else}
            <Link to='/{page.toLowerCase()}' class='nav-button'>{page}</Link>
          {/if}
        {/each}
      </nav>
    </Router>
    <button class='md:ml-20' on:click={toggle_darkMode}> 
      <i data-feather='sun' class='hover:animate-spin'/> 
    </button>
  </div>
</header>
