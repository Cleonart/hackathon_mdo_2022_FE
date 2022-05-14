<template>
  <div class="pt-5">
    <a-breadcrumb>
      <a-breadcrumb-item>Orang Tua</a-breadcrumb-item>
      <a-breadcrumb-item><a href="/#/parents">Anak</a></a-breadcrumb-item>
      <a-breadcrumb-item
        ><a href=""
          >{{ child_data.child_nik }} - {{ child_data.name }}</a
        ></a-breadcrumb-item
      >
    </a-breadcrumb>
  </div>
  <div class="mt-8 pb-12 relative">
    <p class="text-2xl font-bold mb-1">Detail Rekam Medis Anak</p>
    <p class="mb-8">Silahkan mengecek riwayat rekam medis anak disini</p>
    <VueButton
      text="Muat Ulang"
      style="position: absolute; top: 17px; right: 0"
      type="primary"
      @click="location.reload()"
    ></VueButton>
    <hr />
    <div class="mt-8">
      <ChildPersonal :data="child_data" />
      <hr class="my-5" />
      <ChildHistoryData :data="child_history" />
    </div>
  </div>
</template>

<script setup>
import ChildPersonal from "../components/child_personal_data.vue";
import ChildVaccinationData from "../components/child_vaccination_data.vue";
import ChildHistoryData from "../components/child_history_data.vue";
import WizChild from "../wizard/wiz_child.js";
import VueButton from "@/components/VueButton.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const child_data = ref({});
const child_history = ref([]);
const loading = ref(true);
const input_style =
  "mt-1 pl-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";

const get_data = () => {
  const child_id = route.params.id;
  loading.value = true;
  WizChild.get_child_data(child_id).then((response) => {
    console.log(response);
    child_data.value = response.data.result.child_data;
    child_history.value = response.data.result.history;
    loading.value = false;
  });
};

onMounted(() => {
  get_data();
});
</script>