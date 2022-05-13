<template>
  <div class="mt-8">
    <p class="text-2xl font-bold mb-1">Detail Rekam Medis Anak</p>
    <p class="mb-8">Silahkan mengecek riwayat rekam medis anak disini</p>
    <hr />
    <div class="mt-8">
      <div class="md:grid md:grid-cols-3 md:gap-6">
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
              <div class="grid grid-cols-6 gap-6">
                <!-- NIK -->
                <div class="col-span-2">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >NIK
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. John Doe"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    :class="input_style"
                  />
                </div>

                <!-- Nama Lengkap -->
                <div class="col-span-4">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. John Doe"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    :class="input_style"
                  />
                </div>

                <!-- Tanggal Lahir -->
                <div class="col-span-4">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    placeholder="Ex. John Doe"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    :class="input_style"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const input_style =
  "mt-1 pl-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";
</script>