<template>
  <div class="text-red-600 font-bold flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-20 h-20">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
