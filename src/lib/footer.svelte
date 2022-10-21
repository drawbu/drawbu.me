<script>
  import { GithubIcon, TwitterIcon } from 'svelte-feather-icons';
</script>

<footer>
  <span>
    My socials:
  </span>

  <a href="https://github.com/drawbu" class="github nav-button">
    <GithubIcon />
  </a>
  <a href="https://twitter.com/drawbu" class="twitter nav-button">
    <TwitterIcon />  
  </a>
</footer>

<style lang="scss">
  footer {
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    gap: 16px;

    :global(svg.feather) {
      color: var(--text-color);
    }

    :global(svg.feather-github):hover {
      color: darkgrey;
    }

    :global(svg.feather-twitter):hover {
      color: dodgerblue;
    }
  }
</style>
