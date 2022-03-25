<template>
  <div class="w-full h-screen pt-28 relative">
    <Menu></Menu>
    <Toppings></Toppings>
    <Order></Order>
    <TopOrder></TopOrder>
    <ClientData></ClientData>
    <Info></Info>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Info from "@/components/Info.vue";
import Toppings from "@/components/Toppings.vue";
import Order from "@/components/Order.vue";
import TopOrder from "@/components/TopOrder.vue";
import ClientData from "@/components/ClientData.vue"

export default {
  name: "HomeView",
  components: {
    Menu,
    Info,
    Toppings,
    Order,
    TopOrder,
    ClientData,
  },
};
</script>
