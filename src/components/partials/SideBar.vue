<template>
  <div class="sidebar">
    <div class="flex flex-col text-left pt-4">
      <router-link
        :to="route === 'Home' ? '/' : route"
        class="pl-8 text-base font-medium cursor-pointer py-4 hover:bg-gray-100 text-white"
        v-for="route in routes"
        :key="route"
        @click="$emit('updateRoute')"
      >
        {{ route }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSideBar: {
      type: Boolean,
      default: false,
    },

    routes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  @apply fixed right-0 h-full py-6 w-[217px] bg-black;
}
</style>
