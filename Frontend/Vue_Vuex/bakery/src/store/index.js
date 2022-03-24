import { createStore } from "vuex";

export default createStore({
  state: {
    sabor1: " Hola ",
    sabor2: " Holi ",
  },
  getters: {},
  mutations: {
    updateSabor1(state, sabor1) {
      state.sabor1 = sabor1;
    },

    updateSabor2(state, sabor2) {
      state.sabor2 = sabor2;
    },
  },
  actions: {},
  modules: {},
});
