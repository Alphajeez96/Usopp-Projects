<template>
  <div class="action__holder contain">
    <!-- Image Here -->
    <div class="relative bottom-[100px]">
      <ImageHolder />
    </div>

    <!-- text-here -->
    <div class="w-[32%] self-center">
      <h1>Lorem ipsum dolor sit amet consectetur</h1>
      <p class="pt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        placeat quidem repudiandae odio mollitia illo est fugit atque
      </p>

      <div class="mt-9">
        <button>Call to Action</button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHolder from "@/components/ImageHolder";

export default {
  name: "CallToAction",
  components: { ImageHolder },
};
</script>

<style lang="scss" scoped>
.action__holder {
  @apply relative bg-[#ececec] mt-32 flex gap-x-28;

  h1 {
    @apply text-5xl leading-tight font-semibold;
  }
}
</style>
