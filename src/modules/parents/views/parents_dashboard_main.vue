<template>
  <div class="pt-5">
    <a-breadcrumb>
      <a-breadcrumb-item>Orang Tua</a-breadcrumb-item>
      <a-breadcrumb-item><a href="/#/parents">Beranda</a></a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href="/#/parents">Keluarga Fam - Doe</a>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>

  <div class="pb-24">
    <div class="grid grid-cols-3 gap-6">
      <parents_dashboard_jumbotron class="col-span-2" />
      <div class="mt-5">
        <b class="text-2xl">Notifikasi</b>
        <hr class="my-2" />
        <div
          class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p class="font-bold mb-0">Jangan Lupa Imunisasi</p>
          <p class="mt-1 mb-1">
            Jangan lupa untuk membawa Vira Maode untuk imunisasi pada tanggal
            15-03-2022 ya
            <VueButton text="Daftarkan" type="danger" class="mt-3"></VueButton>
          </p>
        </div>
      </div>
    </div>
    <!-- <clinic_dashboard_chart /> -->
    <clinic_dashboard_table :dataSource="test_data" :columns="columns" />
  </div>
</template>

<script setup>
import parents_dashboard_jumbotron from "../components/parents_dashboard_jumbotron.vue";
import clinic_dashboard_table from "../components/child_general_data_dashboard_table.vue";
import clinic_dashboard_chart from "../components/child_progression_dashboard_chart.vue";
import WizChild from "../wizard/wiz_child";
import { ref } from "vue";
import VueButton from "@/components/VueButton.vue";
const test_data = ref([]);
const loading = ref(true);
const columns = [
  {
    title: "Aksi",
    slots: {
      customRender: "action",
    },
  },
  {
    title: "Nama Anak",
    dataIndex: "name",
  },
  {
    title: "Umur",
    dataIndex: "child_age_in_year",
    slots: {
      customRender: "child_age_in_yearƒ",
    },
  },
  {
    title: "NIK",
    dataIndex: "child_nik",
  },
  {
    title: "Tanggal Lahir",
    dataIndex: "child_date_of_birth",
  },
  {
    title: "Tinggi",
    dataIndex: "child_height",
    slots: {
      customRender: "child_height",
    },
  },
  {
    title: "Berat",
    dataIndex: "child_weight",
    slots: {
      customRender: "child_weight",
    },
  },
];

const get_data = () => {
  loading.value = true;
  WizChild.search_read_by_family(11).then((response) => {
    console.log(response);
    loading.value = false;
    test_data.value = response.data.result.records;
  });
};

get_data();
</script>
