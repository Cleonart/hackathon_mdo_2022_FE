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
    <a-table :columns="table_columns" :dataSource="data" bordered>
      <template #state="{ record }">
        <span :class="REF_CLASS[record.state]">{{
          REF_DATA[record.state]
        }}</span>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["data"]);
const input_style =
  "mt-1 pl-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";

const REF_DATA = ref({
  right_on_time: "TEPAT WAKTU",
  pass_due_date: "TERLAMBAT",
});

const REF_CLASS = ref({
  right_on_time:
    "text-xs  bg-green-500   px-2  py-1  font-bold rounded rounded-xl text-white",
  pass_due_date:
    "text-xs  bg-red-500   px-2  py-1  font-bold rounded rounded-xl text-white",
});

const table_columns = [
  {
    title: "Tanggal Vaksinasi",
    dataIndex: "register_date",
  },
  {
    title: "Umur",
    dataIndex: "actual_month_age",
  },
  {
    title: "Vaksin",
    dataIndex: "vaccine_list_ids",
  },
  {
    title: "Vaksinator",
    dataIndex: "vaccinator",
  },
  {
    title: "Lokasi Vaksinasi",
    dataIndex: "vaccinator_location",
  },
  {
    title: "Status",
    dataIndex: "state",
    slots: {
      customRender: "state",
    },
  },
];
</script>