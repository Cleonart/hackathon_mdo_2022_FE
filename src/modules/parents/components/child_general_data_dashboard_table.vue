<template>
  <h3 class="text-2xl">Daftar Anak</h3>
  <p>Lihatlah data umum anak-anak anda di sini</p>
  <a-table
    class="mt-5"
    :columns="props.columns"
    :dataSource="props.dataSource"
    bordered
  >
  </a-table>
</template>

<script setup>
import VueContainer from "@/components/VueContainer.vue";
const props = defineProps(["dataSource", "columns"]);
</script>
