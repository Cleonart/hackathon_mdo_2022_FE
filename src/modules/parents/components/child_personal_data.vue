<!-- Personal Data -->
<template>
  <div class="md:col-span-1">
    <div class="px-4 sm:px-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Data Personal Anak
      </h3>
      <p class="mt-1 text-sm text-gray-600">Profil dan data dasar anak</p>
    </div>
  </div>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white">
        <div class="grid grid-cols-12 gap-6">
          <!-- NIK -->
          <div class="col-span-4">
            <label class="block text-sm font-medium text-gray-700">
              Nomor Induk Keluarga
            </label>
            <input
              type="text"
              placeholder="Ex. 7171...."
              :class="input_style"
              v-model="data.child_nik"
            />
          </div>
          <!-- NIK -->
          <div class="col-span-4">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
            >
              Nomor Induk Kependudukan
            </label>
            <input
              type="text"
              placeholder="Ex. 7171...."
              :class="input_style"
              v-model="data.child_nik"
            />
          </div>

          <!-- Nama Lengkap -->
          <div class="col-span-4">
            <label class="block text-sm font-medium text-gray-700"
              >Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Ex. John Doe"
              :class="input_style"
              v-model="data.name"
            />
          </div>

          <!-- Tanggal Lahir -->
          <div class="col-span-6">
            <label class="block text-sm font-medium text-gray-700">
              Tanggal Lahir
            </label>
            <input
              type="text"
              placeholder="Ex. John Doe"
              :class="input_style"
              v-model="data.child_date_of_birth"
            />
          </div>

          <!-- Umur -->
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700">
              Umur
            </label>
            <input
              type="text"
              placeholder="1"
              :class="input_style"
              :value="data.child_age + ' Tahun'"
            />
          </div>

          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700">
              Berat Badan
            </label>
            <input
              type="text"
              placeholder="1"
              :class="input_style"
              :value="data.child_weight + ' Kg'"
            />
          </div>

          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700">
              Tinggi
            </label>
            <input
              type="text"
              placeholder="1"
              :class="input_style"
              :value="data.child_height + ' Cm'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
const input_style =
  "mt-1 pl-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";
</script>