<template>
  <div class="w-full h-screen pt-28 bg-red-300">
    <InvCakes></InvCakes>
    <InvToppings></InvToppings>
    <CakeDesc></CakeDesc>
    <Info></Info>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info.vue";
import InvCakes from "@/components/InvCakes.vue";
import InvToppings from "@/components/InvToppings.vue"
import CakeDesc from "@/components/CakeDesc.vue"

export default {
  name: "BakerView",
  components: {
    Info,
    InvCakes,
    InvToppings,
    CakeDesc,
  },
};
</script>
