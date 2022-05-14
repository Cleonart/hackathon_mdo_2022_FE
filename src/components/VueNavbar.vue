<template>
  <nav class="bg-blue-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <h2 class="text-2xl text-white mb-0">MeVaccine</h2>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                v-for="(route, index) in route_list"
                v-bind:key="route"
                :href="route.route"
                :class="get_class(route.selected)"
                @click="change_selected(index)"
              >
                {{ route.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, reactive } from "vue";

const props = defineProps(["page_title"]);
const get_class = (selected) => {
  let class_name = "text-white px-3 py-2 rounded-md text-sm font-medium ";
  if (selected) {
    class_name += "bg-blue-900";
  }
  return class_name;
};

const change_selected = (selected_route) => {
  route_list.forEach((route_obj) => {
    route_obj.selected = false;
  });
  route_list[selected_route].selected = true;
  console.log(route_list);
};

const route_list = reactive([
  {
    route: "/#/parents",
    selected: true,
    name: "Beranda",
  },
  {
    route: "/#/parents/child/1",
    selected: false,
    name: "Anak",
  },
]);
</script>
