<script>
  import { Router, Route } from 'svelte-routing';

  // Components
  import Header from './lib/header.svelte';
  import Footer from './lib/footer.svelte';

  // Pages
  import Homepage from './pages/homepage.svelte';
  import About from './pages/about.svelte';
  import NotFound from './pages/not_found.svelte';

  export let url = '';
</script>

<div id="app">
  <Header />
  <main>
    <Router {url}>
      <div>
        <Route path="/"><Homepage /></Route>
        <Route path="/about"><About /></Route>
        <Route><NotFound /></Route>
      </div>
    </Router>
  </main>
  <Footer />
</div>

<style lang="scss">
  #app {
    padding-right: 16px;
    padding-left: 16px;

    @media (min-width: 832px) {
      margin: auto;
      width: 800px;
    }
  }
</style>