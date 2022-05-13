<template>
  <clinic_dashboard_jumbotron />
  <clinic_dashboard_chart />
  <clinic_dashboard_table :dataSource="test_data" :columns="columns" />
</template>

<script setup>
import clinic_dashboard_table from "../components/clinic_dashboard_table.vue";
import clinic_dashboard_jumbotron from "../components/clinic_dashboard_jumbotron.vue";
import clinic_dashboard_chart from "../components/clinic_dashboard_chart.vue";

const test_data = [
  {
    test: "gagaga",
  },
  {
    test: "gegege",
  },
];
const columns = [
  {
    title: "Nama Anak",
    dataIndex: "test",
  },
  {
    title: "Umur",
    dataIndex: "test",
  },
  {
    title: "NIK",
    dataIndex: "test",
  },
  {
    title: "Tanggal Lahir",
    dataIndex: "test",
  },
  {
    title: "Tinggi",
    dataIndex: "test",
  },
  {
    title: "Berat",
    dataIndex: "test",
  },
];
</script>