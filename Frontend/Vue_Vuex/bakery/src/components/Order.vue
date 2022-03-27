<template>
  <div
    class="font-semibold text-base text-black pl-2 py-2 flex flex-col justify-start w-full h-auto bg-red-300 space-y-1"
  >
    <p class="text-xl py-2 items-center justify-center">Pedido</p>
    <p>¿Qué tipo de pastel quieres?</p>
    <p class="font-normal text-sm">(Puedes combinar hasta dos opciones)</p>
    <select v-model="sabor1" id="sabor1" class="w-3/4 rounded-full bg-white">
      <option value="Vía Láctea (3 leches)">Vía Láctea (3 leches)</option>
      <option value="Andrómeda (chocolate)">Andrómeda (chocolate)</option>
      <option value="Nube de Magallanes (red velvet)">
        Nube de Magallanes (red velvet)
      </option>
      <option value="NGC 6753 (vainilla)">NGC 6753 (vainilla)</option>
    </select>
    <select v-model="sabor2" id="sabor2" class="w-3/4 rounded-full bg-white">
      <option disable value="">Sólo un sabor</option>
      <option value="Vía Láctea (3 leches)">Vía Láctea (3 leches)</option>
      <option value="Andrómeda (chocolate)">Andrómeda (chocolate)</option>
      <option value="Nube de Magallanes (red velvet)">
        Nube de Magallanes (red velvet)
      </option>
      <option value="NGC 6753 (vainilla)">NGC 6753 (vainilla)</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {},
  computed: {
    sabor1: {
      get() {
        return this.$store.state.sabor1;
      },
      set(value) {
        this.$store.commit("updateSabor1", value);
      },
    },
    sabor2: {
      get() {
        return this.$store.state.sabor2;
      },
      set(value) {
        this.$store.commit("updateSabor2", value);
      },
    },
  },
};
</script>
