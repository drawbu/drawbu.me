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

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
  <title>drawbu.me</title>
</head>

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

<style lang="scss" global>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  #app {
    width: auto;
    margin: auto;
    padding-right: 16px;
    padding-left: 16px;

    @media (min-width: 840px) {
      width: 50rem;
    }
  }

  :global(body) {
    color: black;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 300;
    font-size: 17px;
    background-color: white;
    transition: background-color 0.3s;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  :global(body.dark-mode) {
    color: white;
    background-color: #20293A;
  }

  :global(body.dark-mode *) {
    color: white;
    transition: background-color 0.3s;
  }

  :global(body.dark-mode a.nav-button) {
    color: white;
  }
</style>
