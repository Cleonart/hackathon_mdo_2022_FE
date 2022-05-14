<template>
  <ClinicDashboardCards :data="CHILDS" />
  <h2 class="font-bold text-2xl mb-1 mt-10">Riwayat Data Vaksinasi</h2>
  <p>Silahkan melihat daftar anak penerima imunisasi aktif disini</p>
  <a-table class="mt-5" :columns="table_columns" :dataSource="CHILDS" bordered>
    <template #action>
      <VueButton custom_class="w-full me-0" text="Detail" type="primary" />
    </template>
  </a-table>
</template>

<script setup>
import ClinicDashboardCards from "../components/clinic_card_stats.vue";
import { ref } from "vue";
import { CHILDS } from "../../../seeder/list_of_childs.js";
import VueButton from "../../../components/VueButton.vue";

const table_columns = [
  {
    title: "Aksi",
    dataIndex: "action",
    slots: {
      customRender: "action",
    },
  },
  {
    title: "NIK",
    dataIndex: "child_nik",
  },
  {
    title: "Nama Anak",
    dataIndex: "name",
  },
  {
    title: "Tanggal Lahir",
    dataIndex: "child_date_of_birth",
  },
  {
    title: "Umur (Bulan)",
    dataIndex: "child_age_in_month",
  },
  {
    title: "Tinggi",
    dataIndex: "child_height",
  },
  {
    title: "Berat",
    dataIndex: "child_weight",
  },
];
</script>
