import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import router from "../router";

export default createStore({
  state: {
    products: [
      {
        name: "Product 1",
        price: 100,
      },

      {
        name: "Product 2",
        price: 200,
      },

      {
        name: "Product 3",
        price: 300,
      },

      {
        name: "Product 4",
        price: 400,
      },

      {
        name: "Product 5",
        price: 500,
      },
    ],
  },

  getters: {},

  mutations: {
    createProduct(state, payload) {
      state.products.push(payload);
    },

    updateProduct(state, data) {
      const { id, payload } = data;
      state.products[id] = payload;
    },

    deleteProduct(state, id) {
      state.products.splice(id, 1);
    },
  },

  actions: {
    createProduct({ commit }, payload) {
      commit("createProduct", payload);
    },

    updateProduct({ commit }, data) {
      commit("updateProduct", data);
      router.push("/products");
    },

    deleteProduct({ commit }, id) {
      commit("deleteProduct", id);
    },
  },

  modules: {},

  plugins: [
    (store) => {
      new VuexPersistence({
        key: "Products",
      }).plugin(store);
    },
  ],
});
