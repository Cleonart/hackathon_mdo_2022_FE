<template>
  <div class="flex flex-wrap mt-10">
    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
      <CardStats
        statTitle="350,897"
        statSubtitle="Jumlah Anak"
        statPercent="2.30"
        statArrow="up"
        statDescripiron="Sejak bulan lalu"
        statIconName="far fa-chart-bar"
      ></CardStats>
    </div>
    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
      <CardStats
        statTitle="350,897"
        statSubtitle="User Baru"
        statPercent="2.30"
        statArrow="up"
        statDescripiron="Sejak bulan lalu"
        statIconName="fas fa-chart-pie"
        statIconColor="bg-orange-500"
      ></CardStats>
    </div>
    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
      <CardStats
        statIconName="fas fa-users"
        statIconColor="bg-pink-500"
      ></CardStats>
    </div>
    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
      <CardStats
        statIconName="fas fa-percent"
        statIconColor="bg-emerald-500"
      ></CardStats>
    </div>
  </div>
  <h2 class="font-bold text-2xl mb-1 mt-10">
    Daftar Anak Penerima Imunisasi Aktif
  </h2>
  <p>Silahkan melihat daftar anak penerima imunisasi aktif disini</p>
  <a-table class="mt-5" :columns="table_columns" :dataSource="[]" bordered>
    <template #action>
      <VueButton custom_class="w-full me-0" text="Detail" type="primary" />
    </template>
  </a-table>
</template>

<script setup>
import CardStats from "@/components/CardStats.vue";
import { ref } from "vue";

const table_columns = [
  {
    title: "Tanggal Vaksinasi",
    dataIndex: "register_date",
  },
  {
    title: "NIK",
    dataIndex: "register_date",
  },
  {
    title: "Nama Anak",
    dataIndex: "register_date",
  },
  {
    title: "Tanggal Lahir",
    dataIndex: "register_date",
  },
  {
    title: "Umur (Bulan)",
    dataIndex: "register_date",
  },
  {
    title: "Tinggi",
    dataIndex: "register_date",
  },
  {
    title: "Berat",
    dataIndex: "register_date",
  },
];
</script>
