<script setup>
import { ref } from 'vue';

const animationClass = ref("animate__zoomIn");

const testimonials = ref([
  {
    id: 1,
    initials: 'JD',
    name: 'Jane Doe',
    message: 'This is a great company with excellent service.'
  },
  {
    id: 2,
    initials: 'JD',
    name: 'John Doe',
    message: 'Very satisfied with the work provided.'
  }, {
    id: 3,
    initials: 'JD',
    name: 'John Doe',
    message: 'Very satisfied with the work provided.'
  }, {
    id: 4,
    initials: 'JD',
    name: 'John Doe',
    message: 'Very satisfied with the work provided.'
  },
  // ...more testimonials
]);
</script>
<template>
  <div
      class="animate__animated animate__fadeOutUp fixed top-50 justify-center items-center w-full flex"
  >
        <span class="text-4xl md:text-4xl font-bold text-center"
        >Tes</span
        >
  </div>
  <div :class="animationClass" class="animate__animated p-8 h-screen">
    <h2 class="flex items-start justify-start font-bold text-3xl">
      Testimonials
    </h2>
  <div
      class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
  >
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="rounded-lg shadow-lg bg-slate-200 p-6">
          <div class="flex items-center space-x-4">
            <div class="rounded-full bg-indigo-600 w-12 h-12 flex items-center justify-center">
              <!-- User icon or image -->
              <span class="text-white text-xl">{{ testimonial.initials }}</span>
            </div>
            <div class="font-medium text-lg">{{ testimonial.name }}</div>
          </div>
          <div class="mt-4 text-gray-600">
            {{ testimonial.message }}
          </div>
        </div>
      </div>
    </div>
</template>

<style>
/* Add any additional custom styles here */
</style>