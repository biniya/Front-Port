<script setup xmlns="http://www.w3.org/1999/html">
import { ref } from "vue";
import "animate.css";

const animationClass = ref("animate__zoomIn");
</script>

<template>
  <div
      class="animate__animated animate__fadeOutUp fixed top-50 justify-center items-center w-full flex"
  >
        <span class="text-4xl md:text-4xl text-gray-700 font-bold text-center"
        >Hello</span
        >
  </div>
  <div class="svg-background mx-auto overflow-hidden">
  <div
      :class="animationClass"
      class="animate__animated p-8 md:px-20 items-start text-start mx-auto gap-4 rounded-lg w-full flex flex-col h-screen"
  >
    <h1 class="text-4xl md:text-4xl font-bold text-center">
      Hi, I'm <span class="text-indigo-600">Biniyam</span>
    </h1>

    <div class="flex md:w-8/12 flex-col">
      <p class="mt-4 text-gray-600 tracking-widest leading-relaxed">
        As a Full Stack Developer, I specialize in merging creativity with
        technical expertise. Over the years, I've dedicated myself to
        crafting (and occasionally designing) exceptional web-based
        experiences. Every project, whether it's a responsive portfolio, an
        advanced betting platform, or an innovative interactive learning
        platform, showcases my commitment to quality, accessibility, and
        user-centric design.
      </p>
      <p class="mt-4 text-gray-600 tracking-widest leading-relaxed">
        Starting my web development journey in 2017, I've immersed myself in
        the ever-evolving realm of technology. I've had the
        privilege of working with renowned companies like Rigel technologies and
        developing inclusive digital products for diverse clients.
        Leveraging tools such as tailwind, Vue.js, and Laravel, I continue
        to push the boundaries of what's possible in web development.
        Explore further to delve into my portfolio, understand my
        experiences, or to draw inspiration from the world of web
        development that I'm so passionate about.
      </p>

    </div>
  </div>
  </div>
</template>
<style scoped>
.svg-background {
  background-image: url("../assets/coding.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
@keyframes colorChange {
  0% {
    color: #2f2e41; /* Starting color */
  }
  50% {
    color: #d7d7db; /* Intermediate color (optional) */
  }
  100% {
    color: #f7f7fa; /* Ending color */
  }
}

.text-color-animate {
  animation-name: colorChange;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
