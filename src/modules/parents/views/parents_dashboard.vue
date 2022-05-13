<template>
  <VueNavbar />
  <div class="px-28">
    <router-view></router-view>
  </div>
</template>

<script setup>
import VueNavbar from "@/components/VueNavbar.vue";
</script>
