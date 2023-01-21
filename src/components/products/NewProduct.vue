<template>
  <div class="form__holder">
    <!-- Text Here -->
    <div class="text-center">
      <h5 class="text-2xl font-bold">Header Text</h5>
      <p class="text-lg pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <!-- Form Here -->
    <form @submit.prevent="handleForm" class="mt-8">
      <!-- Name Here -->
      <div class="mb-7">
        <input
          type="text"
          id="name"
          class="form__input"
          placeholder="Name"
          v-model="payload.name"
          required
        />
      </div>

      <!-- Price Here -->
      <div class="mb-7">
        <input
          type="number"
          id="price"
          class="form__input"
          min="1"
          placeholder="Price"
          v-model="payload.price"
          required
        />
      </div>

      <!-- Submit Here -->
      <button class="w-full" :disabled="hasEmptyFields">
        {{ isEditMode ? "Save" : "Create" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewProduct",

  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    payload: {
      name: "",
      price: "",
    },
  }),

  watch: {
    $route: {
      handler() {
        this.updatePayload();
      },
      immediate: true,
    },
  },

  computed: {
    isEditMode() {
      const { edit } = this.$route.query;
      return edit > -1;
    },

    hasEmptyFields() {
      return Object.values(this.payload).some((value) => !value);
    },
  },

  methods: {
    handleForm() {
      if (!this.hasEmptyFields)
        if (this.isEditMode) {
          this.$store.dispatch("updateProduct", {
            id: this.$route.query.edit,
            payload: this.payload,
          });
        } else {
          this.$store.dispatch("createProduct", this.payload);
          this.resetPayload();
        }
    },

    updatePayload() {
      const { edit } = this.$route.query;

      if (edit) {
        const product = this.products[edit];
        this.payload = { ...product };
      } else {
        this.resetPayload();
      }
    },

    resetPayload() {
      this.payload = {
        name: "",
        price: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form__holder {
  @apply bg-[#ececec] py-12 px-20;
}
</style>
