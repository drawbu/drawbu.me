<template>
  <div id="section">
    <h2 id="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
#section {
  h2 {
    &#title {
      text-align: start;
      margin-top: 3rem;
      font-size: 30px;
      font-weight: 400;
    }
  }

  p {
    text-indent: 1rem;
  }

  ul {
    margin: 0;
    list-style-type: none;

    li {
      text-indent: -10px;

      &:before {
        content: '-';
      }
    }

    @media screen and (max-width: 840px) {
      margin-left: -20px;
    }
  }

  a {
    color: #1e90ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
