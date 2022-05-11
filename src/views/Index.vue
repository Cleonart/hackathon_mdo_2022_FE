<template>
  <VueContainer>
    {{ data_variable.name * 10 }}
    <div class="w-40">
      <a-input
        @change="tes_1()"
        v-model:value="data_variable.name"
        placeholder="Basic usage"
      />
    </div>
    <button disabled>tes</button>
    <VueButton text="Create" type="indigo" @click="tes_1()" />
  </VueContainer>
</template>

<script setup>
import VueButton from "@/components/VueButton.vue";
import VueContainer from "../components/VueContainer.vue";

import { ref } from "vue";

const data_variable = ref({
  name: "",
});
function tes_1() {}
</script>