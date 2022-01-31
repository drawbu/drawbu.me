<template>
  <Section title="hello world!">
    <router-link to="/">Return</router-link>
  </Section>
</template>

<script>
import Section from '../components/Section.vue';

export default {
  name: 'About',
  components: {
    Section,
  },
};
</script>
