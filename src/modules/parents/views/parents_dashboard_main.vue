<template>
  <div class="pb-24">
    <parents_dashboard_jumbotron />
    <clinic_dashboard_chart />
    <clinic_dashboard_table :dataSource="test_data" :columns="columns" />
  </div>
</template>

<script setup>
import parents_dashboard_jumbotron from "../components/parents_dashboard_jumbotron.vue";
import clinic_dashboard_table from "../components/child_general_data_dashboard_table.vue";
import clinic_dashboard_chart from "../components/child_progression_dashboard_chart.vue";
import WizChild from "../wizard/wiz_child";
import { ref } from "vue";
const test_data = ref([]);
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
  },
  {
    title: "Berat",
    dataIndex: "child_weight",
  },
];

const get_data = () => {
  WizChild.search_read_by_family(11).then((response) => {
    console.log(response);
    test_data.value = response.data.result.records;
  });
};

get_data();
</script>
