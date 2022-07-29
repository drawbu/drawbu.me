<script>
  import { Router, Route } from 'svelte-routing';

  // Components
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';

  // Pages
  import Homepage from './pages/Homepage.svelte';
  import About from './pages/About.svelte';
  import NotFound from './pages/NotFound.svelte'

  export let url = '';
</script>

<div class='w-auto md:w-[50rem] m-auto pr-4 pl-4' id='app'>
  <Header />
  <main>
    <Router url='{url}'>
      <div>
        <Route path='/'> <Homepage /> </Route>
        <Route path='/about'><About /> </Route>
        <Route> <NotFound /> </Route>
      </div>
    </Router>
  </main>
  <Footer />
</div>

<style>
  /* Links */
  :global(a) {
    @apply text-blue-500;
  }

  :global(a:hover) {
    @apply underline;
  }

  :global(a.nav-button) {
    @apply text-slate-800;
  }

  /* Themes */
  :global(body) {
    font-family: 'Noto Sans JP', sans-serif;
    transition: background-color 0.3s;
    @apply text-slate-800 text-justify font-light text-[17px] bg-stone-100;
  }

  :global(body.dark-mode) {
    @apply text-white bg-slate-800;
  }

  :global(body.dark-mode a.nav-button) {
    @apply text-white;
  }

  /* Lists */
  :global(ul) {
    list-style-type: '-';
    @apply m-0;
  }

  :global(ul li) {
    @apply mb-2;
  }
</style>
