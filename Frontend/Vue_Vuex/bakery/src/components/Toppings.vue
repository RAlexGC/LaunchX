<template>
  <div class="bg-red-300 pb-2">
    <div class="flex justify-center items-center px-4 pt-2 rounded-full">
      <img
        :src="require('../assets/cake2.jpg')"
        alt=""
        class="w-1/2 h-auto shadow-md rounded-md"
      />
    </div>
    <p class="font-semibold text-lg text-black ml-2 pb-4">Adornos</p>
    <div class="flex justify-between items-center px-4 text-base font-semibold">
      <div class="flex flex-col">
        <p>Frutos rojos</p>
        <p class="text-base font-normal">150 g de frutos rojos mixtos</p>
      </div>
      <p>$70.00</p>
    </div>
    <div class="flex justify-between items-center px-4 text-base font-semibold">
      <div class="flex flex-col">
        <p>Frutas de temporada</p>
        <p class="text-base font-normal">
          150 g de frutas de temporada a elegir
        </p>
      </div>
      <p>$50.00</p>
    </div>
    <div class="flex flex-col px-4 text-base font-semibold">
      <p>Fondant</p>
      <div class="flex justify-between">
        <p class="text-base font-normal">Color a elegir</p>
        <p>$50.00</p>
      </div>
      <div class="flex justify-between">
        <p class="text-base font-normal">Figura hecha con fondant</p>
        <p>$80.00</p>
      </div>
    </div>
    <div class="flex justify-between items-center px-4 text-base font-semibold">
      <div class="flex flex-col">
        <p>Flores comestibles</p>
        <p class="text-base font-normal">
          Floes comestibles a elegir
        </p>
      </div>
      <p>$80.00</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Toppings",
  props: {},
};
</script>
