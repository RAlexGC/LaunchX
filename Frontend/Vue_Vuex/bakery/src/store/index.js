import { VueElement } from "vue";
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
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    t1: false,
    t2: false,
    t3: false,
    t4: false,
    numorder: 0,
    order: {
      no: 0,
      nom: "",
      correo: "",
      telefono: "",
      psabor: "",
      ssabor: "",
      top1: "",
      top2: "",
      top3: "",
      top4: "",
      d: "",
    },
    orders: [],
    ordersno: [],
    selor: 0,
  },
  getters: {},
  mutations: {
    updateSabor1(state, sabor1) {
      state.sabor1 = sabor1;
      switch (sabor1) {
        case "Vía Láctea (3 leches)":
          state.s1 = true;
          break;
        case "Andrómeda (chocolate)":
          state.s2 = true;
          break;
        case "Nube de Magallanes (red velvet)":
          state.s3 = true;
          break;
        case "NGC 6753 (vainilla)":
          state.s4 = true;
          break;
        default:
          break;
      }
    },
    updateSabor2(state, sabor2) {
      state.sabor2 = sabor2;
      switch (sabor2) {
        case "Vía Láctea (3 leches)":
          state.s1 = true;
          break;
        case "Andrómeda (chocolate)":
          state.s2 = true;
          break;
        case "Nube de Magallanes (red velvet)":
          state.s3 = true;
          break;
        case "NGC 6753 (vainilla)":
          state.s4 = true;
          break;
        default:
          break;
      }
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
    updateFR(state, fr) {
      state.fr = fr;
      state.t1 = true;
    },
    updateFT(state, ft) {
      state.ft = ft;
      state.t2 = true;
    },
    updateF1(state, f1) {
      state.f1 = f1;
      state.t3 = true;
    },
    updateF1C(state, f1color) {
      state.f1color = f1color;
    },
    updateF2(state, f2) {
      state.f2 = f2;
      state.t4 = true;
    },
    updateSO(state, selor) {
      state.selor = selor;
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
      state.s1 = false;
      state.s2 = false;
      state.s3 = false;
      state.s4 = false;
      state.t1 = false;
      state.t2 = false;
      state.t3 = false;
      state.t4 = false;
    },
    submit(state) {
      state.order.no++;
      state.order.nom = state.nombre;
      state.order.correo = state.email;
      state.order.telefono = state.tel;
      state.order.psabor = state.sabor1;
      state.order.ssabor = state.sabor2;
      state.order.d =  state.desc;
      switch (state.sabor1) {
        case "Vía Láctea (3 leches)":
          state.invs1--;
          break;
        case "Andrómeda (chocolate)":
          state.invs2--;
          break;
        case "Nube de Magallanes (red velvet)":
          state.invs3--;
          break;
        case "NGC 6753 (vainilla)":
          state.invs4--;
          break;
        default:
          break;
      }
      switch (state.sabor2) {
        case "Vía Láctea (3 leches)":
          state.invs1--;
          break;
        case "Andrómeda (chocolate)":
          state.invs2--;
          break;
        case "Nube de Magallanes (red velvet)":
          state.invs3--;
          break;
        case "NGC 6753 (vainilla)":
          state.invs4--;
          break;
        default:
          break;
      }
      if (state.t1 == true) {
        state.invt1--;
        state.order.top1 = 'Frutos rojos';
      }
      if (state.t2 == true) {
        state.invt2--;
        state.order.top2 = 'Frutas de temporada';
      }
      if (state.t3 == true) {
        state.invt3--;
        state.order.top3 = 'Fondant de color';
      }
      if (state.t4 == true) {
        state.invt4--;
        state.order.top4 = 'Figura de fondant';
      }
      state.orders.push(state.order);
      state.ordersno.push(state.order.no);
      console.log(state.order)
      console.log(state.orders)
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
      state.s1 = false;
      state.s2 = false;
      state.s3 = false;
      state.s4 = false;
      state.t1 = false;
      state.t2 = false;
      state.t3 = false;
      state.t4 = false;
      state.order = {
        no: state.order.no,
        nom: "",
        correo: "",
        telefono: "",
        psabor: "",
        ssabor: "",
        top1: "",
        top2: "",
        top3: "",
        top4: "",
        d: "",
      };
      alert('¡Pedido enviado exitosamente!')
    },
  },
  actions: {
    submit: (context, payload) => {
      context.commit("submit", payload);
    },
  },
  modules: {},
});
