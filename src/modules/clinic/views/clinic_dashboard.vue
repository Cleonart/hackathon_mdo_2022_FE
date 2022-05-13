<template>
  <Navbar />
  <div class="px-28">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "../components/clinic_navbar.vue";
</script>