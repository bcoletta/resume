<script setup>
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/github.svg';
import DriveIcon from '@/assets/icons/google-drive.svg';
import MailIcon from '@/assets/icons/mail-50.png';

const buttons = [
  {
    text: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/brendancoletta/',
  },
  {
    text: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/bcoletta/',
  },
  {
    text: 'Resume',
    icon: DriveIcon,
    href: 'https://drive.google.com/file/d/1CuPDJHv8Qmfrxj2XW62UVvsw7cNJb9y2/view',
  },
  {
    text: 'Email',
    icon: MailIcon,
    href: 'mailto:bc.coletta+website@gmail.com',
  },
];
</script>

<template>
  <div class="pfp">
    <img src="@/assets/LinkedInProfilePicture1.jpg" />
  </div>

  <div class="description">
    Hello! My name is <strong>Brendan Coletta</strong> and I am a Senior Frontend Developer in Denver, CO.
    I enjoy working with VueJS to build web apps that make people's lives easier.
  </div>

  <div class="buttons">
      <a v-for="btn in buttons" :key="btn.text" :href="btn.href" target="_blank">
        <button>
          <img v-if="btn.icon" :src="btn.icon" />
          {{ btn.text }}
        </button>
      </a>
  </div>
</template>

<style scoped lang="scss">
.pfp {
  display: flex;
  justify-content: center;

  img {
    width: 40%;
    max-width: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}

.description {
  text-align: center;
  margin: .5em 0;
}

.buttons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  a {
    width: 20%;
    margin-top: 1em;

    @media (min-width: gmap.get($breakpoints, 'lg')) and (max-width: gmap.get($breakpoints, 'xl')) {
      width: 45%;
    }

    button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-height: 1em;
        aspect-ratio: 1;
        margin-right: .25em;
      }
    }
  }
}
</style>