<template>
  <div class="mt-8">
    <p class="text-2xl font-bold mb-1">Pendaftaran Imunisasi Anak</p>
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
                <!-- NIK Anak-->
                <div class="col-span-2">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >NIK Anak
                  </label>
                  <input
                    type="number"
                    placeholder="Ex. John Doe"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    :class="input_style"
                  />
                </div>

                <!-- Nama Juru Vaksin -->
                <div class="col-span-4">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Juru Vaksin
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

                <!-- Lokasi Vaksin -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Lokasi Vaksin</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Wanea</option>
                    <option>Wenang</option>
                    <option>Tuminting</option>
                    <option>Tikala</option>
                    <option>Singkil</option>
                    <option>Sario</option>
                    <option>Paal Dua</option>
                    <option>Mapanget</option>
                    <option>Malalayang</option>
                    <option>Bunaken</option>
                    <option>Bunaken Kepulauan</option>
                  </select>
                </div>

                <!-- Tipe Vaksin -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Tipe Vaksin</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Hepatitis 0 (HB0)</option>
                    <option>BCG, OPV1</option>
                    <option>DPT-HB-Hib 1, OPV 2, PCV 1</option>
                    <option>DPT-HB-Hib 2, OPV 3, PCV 2</option>
                    <option>DPT-HB-Hib 3, OPV 4 dan IPV</option>
                    <option>Campak-Rubela</option>
                    <option>PCV 3</option>
                    <option>Campak-Rubela, DPT-HB-Hib 4</option>
                    <option>Campak-Rubela, DT</option>
                    <option>Td</option>
                  </select>
                </div>

                <!-- Tanggal Vaksin -->
                <div class="col-span-4">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Tanggal Vaksinasi
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
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
