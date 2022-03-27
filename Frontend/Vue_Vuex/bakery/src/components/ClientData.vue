<template>
  <div
    class="font-semibold text-base text-black pl-2 pb-2 w-full h-auto pt-2 bg-red-300 space-y-2"
  >
    <p class="text-xl font-bold">Ingresa tus datos</p>
    <div class="flex justify-between px-6">
      <label for="Nombre">Nombre:</label>
      <input
        type="text"
        name="Nombre"
        id="Nombre"
        placeholder="Nombre"
        class="rounded-full w-3/4 text-center"
        v-model="nombre"
      />
    </div>
    <div class="flex justify-between px-6">
      <label for="Teléfono">Teléfono:</label>
      <input
        type="number"
        name="Teléfono"
        id="Teléfono"
        placeholder="Número telefónico"
        class="rounded-full w-3/4 text-center"
        v-model="tel"
      />
    </div>
    <div class="flex justify-between px-6">
      <label for="Correo ">E-mail:</label><br />
      <input
        type="email"
        name="Correo"
        id="Correo"
        placeholder="correo@ejemplo.com"
        class="rounded-full w-3/4 text-center"
        v-model="email"
      />
    </div>
    <div class="flex flex-col px-6">
      <label for="Descripción">Descripción general del pastel:</label>
      <textarea
        v-model="desc"
        placeholder="Ingresa una descripción general de tu pastel"
        class="rounded-lg px-4 py-2"
      ></textarea>
    </div>
    <div class="flex flex-col justify-center items-center space-y-2">
      <button
        type="reset"
        class="font-semibold text-lg bg-slate-700 text-white rounded-full py-1 px-4"
        @click="$store.commit('reset')"
      >
        Reestablecer
      </button>
      <button
        type="submit"
        class="font-semibold text-lg bg-slate-700 text-white rounded-full py-1 px-4"
        @click="$store.commit('submit')"
      >
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientData",
  props: {},
  computed: {
    nombre: {
      get() {
        return this.$store.state.nombre;
      },
      set(value) {
        this.$store.commit("updateNombre", value);
      },
    },
    tel: {
      get() {
        return this.$store.state.tel;
      },
      set(value) {
        this.$store.commit("updateTel", value);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("updateMail", value);
      },
    },
    desc: {
      get() {
        return this.$store.state.desc;
      },
      set(value) {
        this.$store.commit("updateDesc", value);
      },
    },
  },
};
</script>
