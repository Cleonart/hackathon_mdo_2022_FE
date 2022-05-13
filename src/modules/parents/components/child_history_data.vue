<!-- Personal Data -->
<template>
  <div class="md:col-span-1">
    <div class="px-4 sm:px-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Riwayat Imunisasi Anak
      </h3>
      <p class="mt-1 text-sm text-gray-600">Pantau kesehatan anak anda</p>
    </div>
  </div>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <a-table :columns="table_columns" :dataSource="props.dataSource" bordered />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
const input_style =
  "mt-1 pl-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";

const table_columns = [
  {
    title: "Tanggal Vaksinasi",
    dataIndex: "test",
  },
  {
    title: "Umur",
    dataIndex: "test",
  },
  {
    title: "Vaksin",
    dataIndex: "test",
  },
  {
    title: "Vaksinator",
    dataIndex: "test",
  },
];
</script>