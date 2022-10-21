<script>
  export let title;
</script>

<section>
  <h2>{title}</h2>
  <slot />
</section>

<style lang="scss">
  section {
    text-align: justify;

    h2 {
      font-size: 30px;
      line-height: 36px;
      font-weight: 400;
      margin-top: 48px;
      margin-bottom: 24px;
    }

    :global(a) {
      color: dodgerblue;
    }

    :global(ul) {
      list-style-type: "-";
      margin: 0;
    }

    :global(ul li) {
      margin-bottom: 8px;
    }
  }
</style>