<template>
  <div class="py-4 text-gray-500 text-sm mt-12 mx-auto text-center bg-topbar">
    <p>Pastelería Stella</p>
    <span class="text-red-500">♥</span>
    <p>Telefóno: 55-55555555</p>
    <p>Horarios de atención: L-V 09:00 a 18:00 hrs.</p>
    <div class="flex justify-center space-x-2">
      <p class=""> {{ new Date().getFullYear() }} - by </p>
      <a class="hover:underline text-gray-600" href="https://twitter.com/tlozot">tlozot</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {},
};
</script>
