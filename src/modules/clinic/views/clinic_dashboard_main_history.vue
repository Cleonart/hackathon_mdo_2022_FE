<template>
  <div class="pt-5">
    <a-breadcrumb>
      <a-breadcrumb-item>Klinik</a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/clinic/vaccination_history">
          Riwayat Vaksinasi
        </router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
  <ClinicDashboardCards :data="CHILDS" />
  <h2 class="font-bold text-2xl mb-1 mt-10">Riwayat Data Vaksinasi</h2>
  <p>Silahkan melihat daftar anak penerima imunisasi aktif disini</p>
  <a-table class="mt-5" :columns="table_columns" :dataSource="HISTORY" bordered>
    <template #action>
      <VueButton custom_class="w-full me-0" text="Detail" type="primary" />
    </template>
    <template #child_id="{ record }">
      {{ record.child_id[1] }}
    </template>
    <template #state="{ record }">
      <span :class="REF_CLASS[record.state]">{{ REF_DATA[record.state] }}</span>
    </template>
    <template #child_height="{ record }">
      {{ record.child_height }} Cm
    </template>
    <template #child_weight="{ record }">
      {{ record.child_weight }} Kg
    </template>
  </a-table>
</template>

<script setup>
import ClinicDashboardCards from "../components/clinic_card_stats.vue";
import { ref } from "vue";
import { CHILDS } from "../../../seeder/list_of_childs.js";
import { HISTORY } from "../../../seeder/list_of_history.js";
import VueButton from "../../../components/VueButton.vue";

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
    dataIndex: "child_id",
    slots: { customRender: "child_id" },
  },
  {
    title: "Tanggal Perkiraan",
    dataIndex: "expected_date",
  },
  {
    title: "Tanggal Imunisasi",
    dataIndex: "register_date",
  },
  {
    title: "Umur (Bulan)",
    dataIndex: "child_age_in_month",
  },
  {
    title: "Tinggi",
    dataIndex: "child_height",
    slots: { customRender: "child_height" },
  },
  {
    title: "Berat Badan",
    dataIndex: "child_weight",
    slots: { customRender: "child_weight" },
  },
  {
    title: "Status",
    dataIndex: "state",
    slots: { customRender: "state" },
  },
];
</script>
