<template>
  <div class="flex flex-wrap">
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
</template>

<script setup>
import CardStats from "@/components/CardStats.vue";
</script>
