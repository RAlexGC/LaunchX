<template>
  <div class="font-sans bg-red-300 flex flex-col py-2 w-full h-auto">
    <div class="flex justify-center w-full h-10 px-4 pt-4 space-x-2">
      <p class="font-semibold text-lg text-black ml-2 pb-4">
        Selecciona un pedido:
      </p>
      <select
        v-model="selor"
        id="Pedidos"
        class="bg-white w-1/5 h-auto rounded-full p-1 text-center"
      >
        <option
          v-for="no in $store.state.ordersno"
          v-bind:key="no"
          v-bind:value="no"
        >
          {{ no }}
        </option>
      </select>
    </div>
    <div class="space-y-2">
      <div class="flex justify-center items-center px-4 pt-4">
        <p class="font-semibold text-lg text-black ml-2 pb-4">
          Información del pedido
        </p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Nombre:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ nombre }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Correo:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ correo }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Teléfono:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ telefono }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Sabor 1:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ sabor1 }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Sabor 2:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ sabor2 }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Topping 1:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ topping1 }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Topping 2:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ topping2 }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Topping 3:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ topping3 }}</p>
      </div>
      <div class="flex justify-between px-4 text-base font-semibold">
        <p>Topping 4:</p>
        <p class="bg-white rounded-full w-4/6 text-base font-normal px-4">{{ topping4 }}</p>
      </div>
      <div class="flex flex-col px-4 text-base font-semibold items-center">
        <p>Descripción:</p>
        <p class="bg-white rounded-md w-5/6 h-auto text-base font-normal p-4">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CakeDesc",
  props: {},
  data() {
    return {
      nombre: "",
      correo: "",
      telefono: "",
      sabor1: "",
      sabor2: "",
      topping1: "",
      topping2: "",
      topping3: "",
      topping4: "",
      desc: "",
      sel: "",
    };
  },
  computed: {
    selor: {
      get() {
        return this.$store.state.selor;
      },
      set(value) {
        this.$store.commit("updateSO", value);
        this.nombre = this.$store.state.orders[value-1].nom;
        this.correo = this.$store.state.orders[value-1].correo;
        this.telefono = this.$store.state.orders[value-1].telefono;
        this.sabor1 = this.$store.state.orders[value-1].psabor;
        this.sabor2 = this.$store.state.orders[value-1].ssabor;
        this.topping1 = this.$store.state.orders[value-1].top1;
        this.topping2 = this.$store.state.orders[value-1].top2;
        this.topping3 = this.$store.state.orders[value-1].top3;
        this.topping4 = this.$store.state.orders[value-1].top4;
        this.desc = this.$store.state.orders[value-1].d;
      },
    },
  },
  //   methods: {
  //       OrderInfo(){
  //         this.sel = document.getElementById('Pedidos')
  //       }
  //   }
};
</script>
