<template>
  <header>
    <AppHeader />
  </header>

  <div class="mt-32">
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/partials/AppHeader";

export default {
  components: { AppHeader },
};
</script>
