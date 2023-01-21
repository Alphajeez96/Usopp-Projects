<template>
  <div class="pt-20 contain">
    <!-- Products Here -->
    <section>
      <ProductList />
    </section>
  </div>

  <!-- Call to action Here -->
  <section class="pt-32">
    <CallToAction />
  </section>
</template>

<script>
import ProductList from "@/components/products/ProductList.vue";
import CallToAction from "@/components/CallToAction.vue";
import NewProduct from "@/components/products/NewProduct.vue";

export default {
  name: "ProductsView",
  components: { ProductList, CallToAction, NewProduct },
};
</script>
