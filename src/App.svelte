<script>
  import Router from 'svelte-spa-router'

  // Components
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';

  // Pages
  import Homepage from './pages/Homepage.svelte';
  import About from './pages/About.svelte';
  import NotFound from './pages/NotFound.svelte'

  let routes = {
    '/': Homepage,
    '/about': About,
    '*': NotFound
  }
</script>

<div class='w-auto md:w-[50rem] m-auto pr-4 pl-4' id='app'>
  <Header />
  <main>
    <Router {routes} />
  </main>
  <Footer />
</div>
