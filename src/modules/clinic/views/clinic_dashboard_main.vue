<template>
  <div class="pt-5">
    <a-breadcrumb>
      <a-breadcrumb-item>Klinik</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Beranda</a></a-breadcrumb-item>
    </a-breadcrumb>
  </div>
  <ClinicDashboardCards :data="CHILDS" />
  <div class="relative">
    <h2 class="font-bold text-2xl mb-1 mt-10">
      Daftar Anak Penerima Imunisasi Aktif
    </h2>
    <p>Silahkan melihat daftar anak penerima imunisasi aktif disini</p>
    <VueButton
      @click="toggle = !toggle"
      :text="toggle ? 'Tampilkan Data' : 'Sembunyikan Data'"
      type="primary"
      class="censor_state_button"
    ></VueButton>
  </div>
  <a-table class="mt-5" :columns="table_columns" :dataSource="CHILDS" bordered>
    <template #child_nik="{ record }">
      {{ censor(record.child_nik, toggle) }}</template
    >
    <template #name="{ record }"> {{ censor(record.name, toggle) }}</template>
    <template #child_age_in_month="{ record }">
      {{ record.child_age_in_month }} Bulan</template
    >
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
import VueButton from "../../../components/VueButton.vue";
const toggle = ref(false);

const table_columns = [
  {
    title: "NIK",
    dataIndex: "child_nik",
    slots: { customRender: "child_nik" },
  },
  {
    title: "Nama Anak",
    dataIndex: "name",
    slots: { customRender: "name" },
  },
  {
    title: "Tanggal Lahir",
    dataIndex: "child_date_of_birth",
  },
  {
    title: "Umur (Bulan)",
    dataIndex: "child_age_in_month",
    slots: { customRender: "child_age_in_month" },
  },
  {
    title: "Tinggi",
    dataIndex: "child_height",
    slots: { customRender: "child_height" },
  },
  {
    title: "Berat",
    dataIndex: "child_weight",
    slots: { customRender: "child_weight" },
  },
];

const censor = (text, toggle) => {
  if (toggle == false) {
    const length = parseInt(text.length / 2);
    let new_text = text.split("");
    new_text[length] = "*";
    new_text[length - 2] = "*";
    new_text[length - 1] = "*";
    new_text[length + 1] = "*";
    new_text[length + 2] = "*";
    return new_text.join("");
  }
  return text;
};
</script>

<style scoped>
.censor_state_button {
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 99;
}
</style>
