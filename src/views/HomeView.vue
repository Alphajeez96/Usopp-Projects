<template>
  <!-- Hero Section  -->
  <section class="contain">
    <Hero />
  </section>

  <!-- Header Text Section -->
  <section class="pt-16 xl:pt-32 contain">
    <HeaderText />
  </section>

  <!-- Call to Action Section -->
  <section class="pt-16 xl:pt-36">
    <CallToAction />
  </section>
</template>

<script>
import Hero from "@/components/home/Hero";
import HeaderText from "@/components/home/HeaderText";
import CallToAction from "@/components/CallToAction";

export default {
  name: "HomeView",
  components: { Hero, HeaderText, CallToAction },
};
</script>
