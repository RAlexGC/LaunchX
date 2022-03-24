<template>
  <div
    class="font-semibold text-base text-black pl-2 pb-2 flex flex-col justify-start w-full h-auto bg-red-300 space-y-1"
  >
    <p class="text-xl py-2">Pedido</p>
    <p>¿Qué tipo de pastel quieres?</p>
    <p class="font-normal text-sm">(Puedes combinar hasta dos opciones)</p>
    <select v-model="sabor1" id="sabor1" class="w-3/4">
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
  name: "TopOrder",
  props: {},
};
</script>
