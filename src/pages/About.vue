<script setup>
import "animate.css";
import { ref } from "vue";

const animationClass = ref("animate__zoomIn");

const releases = ref([
  {
    title: "HTML & CSS",
    description:
        "HTML is the standard markup language for Web pages. With HTML you can create your own Website. CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
    // icon: "src/assets/html.svg",
    badge: "7+ yrs",
    icon: new URL('../assets/html.svg', import.meta.url).href,
    isDark: false,
  },
  {
    title: "Tailwind CSS",
    description:
        "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
    badge: "3+ yrs",
    // icon: "src/assets/tailwind.svg",
    icon: new URL('../assets/tailwind.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "JavaScript",
    description:
        "JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.",
    // icon: "src/assets/js.svg",
    badge: "5+ yrs",
    icon: new URL('../assets/js.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Vue.js",
    description:
        "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
    badge: "5+ yrs",
    // icon: "src/assets/vue.svg",
    icon: new URL('../assets/vue.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Bulma",
    description:
        "Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.",
    // icon: "src/assets/bulma.svg",
    badge: "3+ yrs",
    icon: new URL('../assets/bulma.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Laravel",
    description:
        "Laravel is a free, open-source PHP web framework intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.",
    badge: "5+ yrs",
    // icon: "src/assets/laravel.svg",
    icon: new URL('../assets/laravel.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Inertia.js",
    description:
        "Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers.",
    badge: "1+ yrs",
    // icon: "src/assets/inertia.svg",
    icon: new URL('../assets/inertia.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Sanity",
    description:
        "Sanity delivers content anywhere (just like a headless CMS). Beyond that, Sanity gives you total composability. A fully decoupled, real-time content back end. Entirely customizable content workspaces.",
    badge: "1+ yrs",
    // icon: "src/assets/inertia.svg",
    icon: new URL('../assets/sanity.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Git hub",
    description:
        "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
    // icon: "src/assets/github.svg",
    badge: "6+ yrs",
    icon: new URL('../assets/github.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Digital Ocean",
    description: "DigitalOcean, Inc. is an American cloud infrastructure provider headquartered in New York City with data centers worldwide. DigitalOcean provides developers cloud services that help to deploy and scale applications that run simultaneously on multiple computers.",
    // icon: "src/assets/digitalocean.svg",
    badge: "1+ yrs",
    icon: new URL('../assets/digital-ocean.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Nuxt",
    description: "Nuxt provides a simple way to share a reactive and SSR-friendly state between components. Create smooth transitions between layouts, pages and components with a built-in support for Vue & browser transitions.",
    badge: "1+ yrs",
    icon: new URL('../assets/nuxt.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Docker",
    description:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    // icon: "src/assets/docker.svg",
    badge: "1+ yrs",
    icon: new URL('../assets/docker.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Algolia",
    description:
        "Algolia is a hosted search engine capable of delivering real-time results from the first keystroke. Algolia's powerful API lets you quickly and seamlessly implement search within your websites and mobile applications.",
    // icon: "src/assets/algolia.svg",
    badge: "1+ yrs",
    icon: new URL('../assets/algolia.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Firebase",
    description:
        "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.",
    // icon: "src/assets/firebase.svg",
    badge: "1+ yrs",
    icon: new URL('../assets/firebase.svg', import.meta.url).href,
    isDark: true,
  },
  {
    title: "Netlify",
    description:
        "Netlify is a San Francisco-based cloud computing company that offers hosting and automation services for web projects. Its features include continuous deployment from Git across Netlify Edge, the company's global application delivery network infrastructure.",
    // icon: "src/assets/netlify.svg",
    badge: "1+ yrs",
    icon: new URL('../assets/netlify.svg', import.meta.url).href,
    isDark: true,
  }
]);
</script>

<template>
  <div
      class="animate__animated animate__fadeOutUp fixed top-50 justify-center items-center w-full flex"
  >
    <span class="text-4xl md:text-4xl font-bold text-center">About Me</span>
  </div>
  <div
      :class="animationClass"
      class="animate__animated items-start text-start mx-auto p-8 md:px-20 rounded-lg w-full flex flex-col max-w-7xl overflow-hidden"
  >
    <h1 class="text-4xl font-bold text-gray-800">Hi there,</h1>
    <p class="mt-4 text-gray-600 tracking-widest">
      As a software engineer, I specialize in merging creativity with
      technical expertise. Over the years, I've dedicated myself to
      crafting (and occasionally designing) exceptional web-based
      experiences. Every project, whether it's a responsive portfolio, an
      advanced betting platform, or an innovative interactive learning
      platform, showcases my commitment to quality, accessibility, and
      user-centric design.
    </p>

    <ol class="relative border-l mt-5 border-gray-200">
      <li
          v-for="(release, index) in releases"
          :key="index"
          class="mb-10 ml-6"
      >
        <img
            :src="release.icon"
            alt="Project Image"
            class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-3 ring-8 ring-white"
        />
        <h3
            class="flex items-center mb-1 ml-2 text-lg font-semibold text-black"
        >
          {{ release.title }}
          <span
              v-if="release.badge"
              class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"
          >
                        {{ release.badge }}
                    </span>
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500">
          {{ release.description }}
        </p>
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
