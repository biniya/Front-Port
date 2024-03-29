<script setup>
import { defineEmits, defineProps, ref, toRefs, watch } from "vue";
import { Tab, TabGroup, TabList } from "@headlessui/vue";
import Home from "../pages/Home.vue";
import "animate.css";

const emit = defineEmits();
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  active: {
    type: [String, Number],
    default: "Home",
  },
  activeOnly: {
    type: Boolean,
    default: false,
  },
});

// Initialize currentActiveTab with props.active
const currentActiveTab = ref(props.active.toLowerCase());

watch(currentActiveTab, (newActive) => {
  emit("update:active", newActive);
});

// Function to update the active tab
const updateActiveTab = (tabName) => {
  currentActiveTab.value = tabName.toLowerCase();
};

const { tabs, active } = toRefs(props);

watch(active, (newActive) => {
  emit("update:active", newActive);
});
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center">
    <TabGroup v-slot="{ selectedIndex }">
      <!-- Buttons -->
      <div
          class="flex md:w-full justify-center items-center w-full gap-2"
      >
        <TabList
            class="flex flex-wrap items-center justify-center bg-slate-200 rounded-[20px] p-2 mb-8"
        >
          <Tab
              v-for="(tab, index) in tabs"
              :key="index"
              as="template"
          >
            <button
                :class="
                                selectedIndex === index
                                    ? 'bg-white text-slate-900 animate__animated animate__zoomIn'
                                    : 'text-slate-600 hover:text-slate-900 border-gray-800 animate-pulse'
                            "
                class="flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out"
                @click="updateActiveTab(tab.title)"
            >
              {{ tab.title }}
            </button>
          </Tab>
        </TabList>
      </div>

      <!-- Content -->
      <div class="w-full mx-auto">
        <div class="relative flex flex-col">
          <slot :name="currentActiveTab" />
        </div>
      </div>
    </TabGroup>
  </div>
  <div class="contact-me-container">
    <div
        class="contact-options animate__animated animate__fadeIn flex flex-col  px-5 gap-8"
    >
      <a
          class="hover:scale-150"
          href="https://www.upwork.com/freelancers/~019d74242b5d7ffda9?viewMode=1"
          target="_blank"
      >
        <svg
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
          />
        </svg>
      </a>
      <a
          class="hover:scale-150"
          href="https://github.com/biniya" target="_blank">
        <svg
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a
          class="hover:scale-150"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lemmasbini@gmail.com"
          target="_blank"
      >
        <svg
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 17"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
          />
        </svg>
      </a>
      <a
          class="hover:scale-150"
          href="https://www.linkedin.com/in/biniyam-lemma-2a580615a/"
          target="_blank"
      >
        <svg
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                fill-rule="nonzero"
            />
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact-me-container {
  position: fixed;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
  z-index: 10;
}

.contact-options {
  position: absolute;
  right: 100%;
  white-space: nowrap;
}
</style>

