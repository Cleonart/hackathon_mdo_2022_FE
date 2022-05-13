<template>
  <div class="shadow-xl w-3/12 px-10 rounded rounded-md center_x_y">
    <div class="py-10">
      <p class="font-bold text-2xl mb-1">Portal Imunisasi</p>
      <p class="text-gray-500">Imunisasi untuk masa depan anak</p>
      <hr class="mb-4" />
      <a-input placeholder="Nomor Induk Keluarga / Anak"></a-input>
      <div class="w-full mt-2">
        <a-input placeholder="Kata Sandi"></a-input>
      </div>
      <VueButton custom_class="w-full mt-3" text="Masuk" type="primary" />
    </div>
  </div>
</template>

<script setup>
import VueContainer from "@/components/VueContainer.vue";
import VueButton from "@/components/VueButton.vue";
</script>