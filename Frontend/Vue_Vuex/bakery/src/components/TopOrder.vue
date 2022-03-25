<template>
  <div
    class="font-semibold text-base text-black pl-2 pb-2 w-full h-auto pt-2 bg-red-300 space-y-1"
  >
    <div class="flex flex-col">
      <p>¿Qué adornos añadiremos?</p>
      <p class="font-normal text-sm">(Selecciona las opciones que desees)</p>
    </div>
    <div class="flex flex-col items-start">
      <div class="space-x-2">
        <input type="checkbox" id="FR" name="FR" v-model="fr"/>
        <label for="FR">Frutos Rojos</label>
      </div>
      <div class="space-x-2">
        <input type="checkbox" id="FT" name="FT" v-model="ft"/>
        <label for="FT">Frutas de temporada</label>
      </div>
      <div class="space-x-2">
        <input type="checkbox" id="F1" name="F1" v-model="f1"/>
        <label for="F1">Fondant (selecciona un color)</label>
        <input type="color" name="FC" id="FC" class="" v-model="f1color">
      </div>
      <div class="space-x-2">
        <input type="checkbox" id="F2" name="F2" v-model="f2"/>
        <label for="F2">Figura de fondant</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopOrder",
  props: {},
   computed: {
    f1color: {
      get() {
        return this.$store.state.f1color;
      },
      set(value) {
        this.$store.commit("updateFColor", value);
      },
    },
    fr: {
      get() {
        return this.$store.state.fr;
      },
      set(value) {
        this.$store.commit("updateFR", value);
      },
    },
    ft: {
      get() {
        return this.$store.state.ft;
      },
      set(value) {
        this.$store.commit("updateFT", value);
      },
    },
     f1: {
      get() {
        return this.$store.state.f1;
      },
      set(value) {
        this.$store.commit("updateF1", value);
      },
    },
     f1color: {
      get() {
        return this.$store.state.f1color;
      },
      set(value) {
        this.$store.commit("updateF1C", value);
      },
    },
     f2: {
      get() {
        return this.$store.state.f2;
      },
      set(value) {
        this.$store.commit("updateF2", value);
      },
    },
  },
};
</script>
