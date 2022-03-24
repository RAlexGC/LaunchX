<template>
  <div class="w-full h-screen">
    <Menu></Menu>
    <Toppings></Toppings>
    <Order></Order>
    <TopOrder></TopOrder>
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

export default {
  name: "HomeView",
  components: {
    Menu,
    Info,
    Toppings,
    Order,
    TopOrder,
  },
};
</script>
