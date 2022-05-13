<template>
  <div class="mt-2">
    <h3 class="text-2xl font-bold mb-1">Daftar Anak</h3>
    <p>Lihatlah data umum anak-anak anda di sini</p>
    <a-table
      class="mt-5"
      :columns="props.columns"
      :dataSource="props.dataSource"
      bordered
    >
      <template #action="{ record }">
        <VueButton
          @click="route_to_child(record.id)"
          custom_class="w-full me-0"
          text="Detail"
          type="primary"
        />
      </template>
      <template #child_age_in_yearƒ="{ record }">
        {{ record.child_age_in_year }} Tahun
      </template>
      <template #child_weight="{ record }">
        {{ record.child_weight }} Kg
      </template>
      <template #child_height="{ record }">
        {{ record.child_height }} Cm
      </template>
    </a-table>
  </div>
</template>

<script setup>
import VueContainer from "@/components/VueContainer.vue";
import VueButton from "@/components/VueButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["dataSource", "columns"]);
const route_to_child = (id) => {
  router.replace("/parents/child/" + id.toString());
};
</script>
