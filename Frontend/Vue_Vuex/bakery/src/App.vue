<template>
  <nav class="w-full bg-topbar flex justify-between items-center fixed z-50 shadow-md">
    <div class="px-4">
      <img
        src="./assets/logo_stella.png" alt="Logo_Stella" class="w-auto h-28"/>
    </div>
    <div class="font-bold text-xl text-red-400 px-6">
      <router-link to="/">Home</router-link> |
      <router-link to="/baker">Pastelero</router-link>
    </div>
  </nav>
  <router-view />
</template>
