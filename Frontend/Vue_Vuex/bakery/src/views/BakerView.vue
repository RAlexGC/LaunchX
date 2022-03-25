<template>
  <div class="w-full h-screen pt-28 bg-red-300">
    <h1>{{ $store.state.sabor1 }}</h1>
    <h1>{{ $store.state.sabor2 }}</h1>
    <InvCakes></InvCakes>
    <Info class="absolute bottom-0 w-full"></Info>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info.vue";
import InvCakes from "@/components/InvCakes.vue";

export default {
  name: "BakerView",
  components: {
    Info,
    InvCakes,
  },
};
</script>
