<template>
  <div class="font-sans bg-red-300 flex flex-col py-2">
    <p class="font-bold text-xl text-white pt-2 ml-2">Bienvenido(a)</p>
    <div class="flex justify-center items-center px-4 pt-4">
    </div>
    <p class="font-semibold text-lg text-black ml-2 pb-4">Inventario de pasteles</p>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Vía Láctea (3 leches)</p>
      <p>{{ $store.state.invs1 }}</p>
    </div>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Andrómeda (chocolate)</p>
      <p>$160.00/kg</p>
    </div>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Nube de Magallanes (red velvet)</p>
      <p>$160.00/kg</p>
    </div>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>NGC 6753 (vainilla)</p>
      <p>$140.00/kg</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvCakes",
  props: {},
};
</script>
