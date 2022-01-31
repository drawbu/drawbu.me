<template>
  <Section title="About me:">
    <p>
      Hi! I'm drawbu, a french student in final year at high school, junior
      developer interesed by a lot things. I love using python, but I enjoy a
      lot starting new projects. I recently started interested myself into
      Vue.js (I made with website with it). In my free time I like to code, play
      Minecraft and watch series. You can watch some of my work on my
      <a href="https://github.com/drawbu">GitHub profile</a>. <br />
      If you just want to talk, ask me some question or anything, don't hesitate
      to add me on Discord, I would be delighted to exchange with you :
      drawbu#3546. <br />
      I also have a
      <a href="https://twitter.com/drawbu">Twitter account</a>
      were I retweet some cool things about cinema, IT or just funny things.
    </p>
  </Section>

  <Section title="Projects you need to look at:">
    <ul>
      <li>
        My most popular project is
        <a href="https://github.com/drawbu/drawbot">drawbot</a>, a Discord bot
        connected to Pronote (a school life management software). It will send
        you messages in your server when you receive a new homework. I went in
        the Twitch and YouTube french show Underscore_ thanks to this project!
      </li>
    </ul>
  </Section>
</template>

<script>
import Section from '../components/Section.vue';

export default {
  name: 'Home',
  components: {
    Section,
  },
};
</script>
