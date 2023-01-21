<template>
  <div
    class="flex lg:flex-nowrap flex-wrap flex-col-reverse lg:flex-row justify-between pt-6 md:pt-24"
  >
    <!-- Hero text Here -->
    <div class="w-full lg:w-[35%] mt-16 lg:mt-0">
      <h1>
        Lorem ipsum <br class="hidden md:block" />
        dolor sit amet <br class="hidden md:block" />
        consectetur
      </h1>

      <p class="pt-6 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        voluptas, deleniti, doloremque quasi
      </p>

      <!-- Buttons Here -->
      <div class="flex flex-wrap lg:flex-nowrap mt-10">
        <button class="w-full lg:w-[inherit]">Call to Action</button>
        <button
          class="secondary w-full lg:w-[inherit] mt-3 lg:mt-0 ml-0 lg:ml-3"
        >
          See Workspace
        </button>
      </div>
    </div>

    <!-- Hero Image Here -->
    <div class="block md:block ml-auto relative w-full lg:w-3/5 xl:w-[46%]">
      <ImageHolder />

      <div class="hidden xl:block absolute -top-[70px] right-0 z-10">
        <ImageHolder size="small" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageHolder from "@/components/ImageHolder";
export default {
  name: "Hero",
  components: { ImageHolder },
};
</script>

<style lang="scss" scoped>
h1 {
  @apply text-4xl md:text-6xl  font-bold;
}
</style>
