import { createStore } from "vuex";

export default createStore({
  state: {
    sabor1: " Hola ",
    sabor2: " Holi ",
    fr: "",
    ft: "",
    f1: "",
    f1color: "",
    f2: "",
    nombre: "",
    tel: "",
    email: "",
    desc: "",
    invs1: 100,
    invs2: 100,
    invs3: 100,
    invs4: 100,
    invt1: 100,
    invt2: 100,
    invt3: 100,
    invt4: 100,

  },
  getters: {},
  mutations: {
    updateSabor1(state, sabor1) {
      state.sabor1 = sabor1;
    },
    updateSabor2(state, sabor2) {
      state.sabor2 = sabor2;
    },
    updateFColor(state, f1color) {
      state.f1color = f1color;
    },
    updateNombre(state, nombre) {
      state.nombre = nombre;
    },
    updateTel(state, tel) {
      state.tel = tel;
    },
    updateMail(state, email) {
      state.email = email;
    },
    updateDesc(state, desc) {
      state.desc = desc;
    },
    updateFR(state,fr) {
      state.fr = fr;
    },
    updateFT(state,ft) {
      state.ft = ft;
    },
    updateF1(state,f1) {
      state.f1 = f1;
    },
    updateF1C(state,f1color) {
      state.f1color = f1color;
    },
    updateF2(state,f2) {
      state.f2 = f2;
    },
    reset(state) {
      state.sabor1 = null;
      state.sabor2 = null;
      state.fr = null;
      state.ft = null;
      state.f1 = null;
      state.f1color = null;
      state.f2 = null;
      state.nombre = null;
      state.tel = null;
      state.email = null;
      state.desc = null;
      state.test = null;
    },
  },
  actions: {},
  modules: {},
});
