<template>
  <div class="holder" :class="{ small: size === 'small' }"></div>
</template>

<script>
export default {
  name: "ImageHolder",

  props: {
    background: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: "large",
    },

    height: {
      type: String,
      default: "600px",
    },
  },
};
</script>

<style lang="scss" scoped>
.holder {
  @apply h-[400px] w-full md:h-[550px] lg:w-[600px] bg-[#c4c4c4];

  &.small {
    @apply h-[250px] w-[250px] bg-[#9d9d9d];
  }
}
</style>
