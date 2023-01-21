<template>
  <div class="flex flex-wrap xl:flex-nowrap gap-16 mt-12">
    <!-- Header Text Here -->
    <div class="w-full xl:w-3/12">
      <h5>Header Text</h5>
      <p class="pt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt non
        iure magni sapiente praesentium itaque et excepturi. Fugiat nam
        laboriosam non facilis ad dolorum sint voluptates, dolore impedit
        tenetur saepe?
      </p>
    </div>

    <!-- Image Here -->
    <div class="w-full lg:w-3/5 2xl:w-2/5">
      <ImageHolder />
    </div>

    <!-- Header Text Here -->
    <div class="w-full lg:w-3/12 self-end">
      <h5>Header Text</h5>
      <p class="pt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt non
        iure magni sapiente praesentium itaque et excepturi. Fugiat nam
        laboriosam non facilis ad dolorum sint voluptates, dolore impedit
        tenetur saepe?
      </p>
    </div>
  </div>
</template>

<script>
import ImageHolder from "@/components/ImageHolder";

export default {
  name: "HeaderText",
  components: { ImageHolder },
};
</script>

<style lang="scss" scoped>
h5 {
  @apply text-lg font-bold;
}
</style>
