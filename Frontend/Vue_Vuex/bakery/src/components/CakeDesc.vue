<template>
  <div class="font-sans bg-red-300 flex flex-col py-2">
    <div class="flex justify-center items-center px-4 pt-4">
    </div>
    <p class="font-semibold text-lg text-black ml-2 pb-4">Decripción del pedido</p>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Frutos rojos</p>
      <p>{{ $store.state.order[0] }}</p>
    </div>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Frutas de temporada</p>
      <p>{{ $store.state.invt2 }}</p>
    </div>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Fondant de color</p>
      <p>{{ $store.state.invt3 }}</p>
    </div>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Figura de fondant</p>
      <p>{{ $store.state.invt4 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CakeDesc",
  props: {},
};
</script>
