<template>
  <nav>
    <!-- Logo here -->
    <div>
      <img src="@/assets/logo.svg" alt="logo" />
    </div>

    <!-- Routes Here -->
    <div class="hidden md:flex items-center gap-11">
      <router-link
        v-for="route in routes"
        :key="route"
        :to="route === 'Home' ? '/' : route"
        >{{ route }}
      </router-link>
    </div>

    <!-- Button Here -->
    <div class="hidden md:block">
      <button @click="$router.push('new')">Call to Action</button>
    </div>

    <!-- Mobile region Here -->

    <div class="md:hidden block h-full">
      <div
        :class="`fixed h-screen p-pat-blur-background top-0 left-0 w-full z-50 ${
          showSideBar ? 'block' : 'hidden'
        }`"
        @click="toggleSideBar"
      >
        <p class="text-left" @click="toggleSideBar"></p>
      </div>
      <div
        :class="`${
          showSideBar ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        } transform h-full z-50 duration-300 w-8/12 md:w-auto right-0 lg:w-auto fixed top-0`"
      >
        <SideBar
          v-if="showSideBar"
          :showSideBar="showSideBar"
          :routes="routes"
          @updateRoute="showSideBar = false"
        />
      </div>
      <div class="side-bar-container hidden lg:block"></div>
    </div>

    <!-- Hamburger here -->
    <div class="block md:hidden">
      <img
        src="@/assets/hamburger.svg"
        alt="hamburger"
        @click="toggleSideBar"
      />
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "./SideBar";

const routes = ["Home", "About", "Services", "Products"];
let showSideBar = ref(false);

const toggleSideBar = () => {
  showSideBar.value = !showSideBar.value;
};
</script>

<style lang="scss" scoped>
nav {
  @apply h-[100px] px-6 xl:px-32 bg-white flex items-center justify-between fixed w-full top-0 z-50;

  a {
    @apply text-[#636262] p-1.5;

    &.router-link-exact-active {
      @apply font-medium text-[black] border-b-2 border-black;
    }
  }
}
</style>
