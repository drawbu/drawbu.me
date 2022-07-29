<script>
  import { location, link } from 'svelte-spa-router'
  import { theme } from '../store'
  import { get } from 'svelte/store';
  
  console.log(get(theme))
  if (get(theme) == 'dark') {
    console.log('hehe')
    window.document.body.classList.toggle('dark-mode')
  }

  function toggle() {
    if (get(theme) == 'light') {
      theme.set('dark')
    } else {
      theme.set('light')
    }
    window.document.body.classList.toggle('dark-mode')
    console.log(get(theme))
  }
  let pages = ['Home', 'About']
</script>

<header class='mt-8 mb-16 flex items-center justify-between flex-col md:flex-row'>
  <h1 class='text-5xl font-extrabold mb-8 md:mb-0'>{$location}</h1>
  <div class='flex gap-12'>
    {#each pages as page}
      {#if page == 'Home'}
        <a href='/' use:link class='nav-button'>{page}</a>
      {:else}
        <a href='/{page.toLowerCase()}' use:link class='nav-button'>{page}</a>
      {/if}
    {/each}
    <button class='md:ml-20' on:click={toggle}> 
      <i data-feather='sun' class='hover:animate-spin'/> 
    </button>
  </div>
</header>
