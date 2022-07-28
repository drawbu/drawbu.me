<script>
  import {link} from 'svelte-spa-router';
  import Section from "../lib/Section.svelte";
</script>


<Section title='404 page not found'>
  <p>
    The page that you were searching connot be found :/ <br>
    Please return to the 
    <a href='/' use:link class='link'>Homepage</a>.
  </p>
</Section>
