<template>
  <div class="mt-8">
    <p class="text-2xl font-bold mb-1">Detail Rekam Medis Anak</p>
    <p class="mb-8">Silahkan mengecek riwayat rekam medis anak disini</p>
    <hr />
    <div class="mt-8">
      <!-- Personal Data -->
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <ChildPersonal :data="{}" />
        <ChildVaccinationData :data="[]" />
        <ChildHistoryData :data="[]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ChildPersonal from "../components/child_personal_data.vue";
import ChildVaccinationData from "../components/child_vaccination_data.vue";
import ChildHistoryData from "../components/child_history_data.vue";
const input_style =
  "mt-1 pl-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";
</script>