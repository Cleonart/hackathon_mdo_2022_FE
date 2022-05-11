<template>
  <button
    :class="
      button_base + ' ' + button + ' ' + button_type[type] + ' ' + custom_class
    "
  >
    {{ text }}
  </button>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["text", "type", "disabled", "custom_class"]);

const button =
  "justify-center w-auto px-5 py-2 border border-transparent text-s font-medium rounded";
const button_base = "flex items-center";
const button_size = {
  sm: "",
  md: "",
  lg: "",
};
const button_type = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  outline: "outline outline-2 text-black",
  warning: "bg-yellow-500 hover:bg-yellow-700 text-black",
  indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
};
const button_disabled = ref("");
</script>
