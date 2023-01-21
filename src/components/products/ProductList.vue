<template>
  <!-- Search region -->
  <div class="flex items-center w-[50%]">
    <h1 class="text-5xl font-bold">Products</h1>

    <div class="ml-auto w-[42%]">
      <input
        type="text"
        id="search"
        placeholder="Search for keywords..."
        v-model="searchQuery"
      />
    </div>
  </div>

  <section class="mt-20 flex justify-between">
    <!-- Table Here -->
    <div class="w-[50%]">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(product, i) in filteredProducts" :key="i">
            <td>{{ product.name }}</td>
            <td>{{ formatCurrency(product.price) }}</td>
            <td>
              <div class="flex justify-center items-center">
                <button
                  class="h-10"
                  @click="$router.push({ query: { edit: i } })"
                >
                  Edit
                </button>

                <button
                  class="secondary h-10 ml-2"
                  @click="$store.dispatch('deleteProduct', i)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--Form Here-->
    <div class="w-[40%]">
      <NewProduct :products="products" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import NewProduct from "@/components/products/NewProduct.vue";

export default {
  name: "ProductList",
  components: { NewProduct },

  data: () => ({
    searchQuery: "",
  }),

  computed: {
    ...mapState(["products"]),

    filteredProducts() {
      if (this.searchQuery)
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

      return this.products;
    },
  },

  methods: {
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #000;

  thead {
    @apply text-lg bg-[#ececec] font-bold;

    th {
      @apply border-l border-black p-4 text-center;

      &:last-child {
        @apply w-1/3;
      }
    }
  }

  tbody {
    td {
      @apply p-4 border border-black border-t-0 text-[#636262] text-center;
    }
  }
}
</style>
