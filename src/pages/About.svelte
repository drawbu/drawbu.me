<script>
  import {link} from 'svelte-spa-router';
  import Section from "../lib/Section.svelte";
</script>

<Section title="Hello world!">
  <a href='/' use:link class='link'>Return</a>
</Section>