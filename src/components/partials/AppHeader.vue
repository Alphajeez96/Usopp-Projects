<template>
  <nav>
    <!-- Logo here -->
    <div>
      <img src="@/assets/logo.svg" alt="logo" />
    </div>

    <!-- Routes Here -->
    <div class="flex items-center gap-11">
      <router-link
        v-for="route in routes"
        :key="route"
        :to="route === 'Home' ? '/' : route"
        >{{ route }}
      </router-link>
    </div>

    <!-- Button Here -->
    <div>
      <button @click="$router.push('new')">Call to Action</button>
    </div>
  </nav>
</template>

<script setup>
const routes = ["Home", "About", "Services", "Products"];
</script>

<style lang="scss" scoped>
nav {
  @apply h-[100px] px-6 md:px-16 xl:px-32 bg-white flex items-center justify-between fixed w-full top-0 z-50;

  a {
    @apply text-[#636262] p-1.5;

    &.router-link-exact-active {
      @apply font-medium text-[black] border-b-2 border-black;
    }
  }
}
</style>
