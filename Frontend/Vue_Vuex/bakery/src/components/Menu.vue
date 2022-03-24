<template>
  <div class="font-sans bg-red-300 flex flex-col pb-4">
    <p class="font-bold text-xl text-white pt-2 ml-2">Bienvenidos a Stella</p>
    <div class="flex justify-center items-center px-4 pb-1 pt-4">
      <img
        :src="require('../assets/cake.jpg')"
        alt=""
        class="w-1/2 h-auto shadow-md rounded-md"
      />
    </div>
    <p class="font-semibold text-lg text-black ml-2 py-4">Pasteles</p>
    <div class="flex justify-between px-4 text-base font-semibold">
      <p>Vía Láctea (3 leches)</p>
      <p>$150.00/kg</p>
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
  name: "Menu",
  props: {},
};
</script>
