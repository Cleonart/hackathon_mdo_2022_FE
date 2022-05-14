<template>
  <div class="mt-8">
    <p class="text-2xl font-bold mb-1">Pendaftaran Imunisasi Anak</p>
    <p class="mb-8">Silahkan melakukan pendaftaran imunisasi untuk anak</p>

    <hr />
    <div class="mt-8">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Form Pendaftaran Imunisasi Anak
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Pengisian informasi data anak
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white">
              <div class="grid grid-cols-6 gap-6">
                <!-- Tanggal Vaksin -->
                <div class="col-span-4">
                  <label
                    for="tanggal-vaksin"
                    class="block text-sm font-medium text-gray-700"
                    >Tanggal Vaksinasi
                  </label>
                  <input
                    type="date"
                    name="tanggal-vaksin"
                    id="tanggal-vaksin"
                    :class="input_style"
                  />
                </div>

                <!-- NIK Anak-->
                <div class="col-span-3">
                  <label
                    for="nik-anak"
                    class="block text-sm font-medium text-gray-700"
                    >NIK Anak
                  </label>
                  <input
                    type="number"
                    name="nik-anak"
                    id="nik-anak"
                    :class="input_style"
                  />
                </div>

                <!-- Nama Juru Vaksin -->
                <div class="col-span-3">
                  <label
                    for="juru-vaksin"
                    class="block text-sm font-medium text-gray-700"
                    >Juru Vaksin
                  </label>
                  <input
                    type="text"
                    name="juru-vaksin"
                    id="juru-vaksin"
                    autocomplete="given-name"
                    :class="input_style"
                  />
                </div>

                <!-- Tinggi Badan -->
                <div class="col-span-3">
                  <label
                    for="tinggi-badan"
                    class="block text-sm font-medium text-gray-700"
                    >Tinggi Badan</label
                  >
                  <input
                    type="number"
                    name="tingga-badan"
                    id="tinggi-badan"
                    :class="input_style"
                  />
                </div>

                <!-- Berat Badan -->
                <div class="col-span-3">
                  <label
                    for="berat-badan"
                    class="block text-sm font-medium text-gray-700"
                    >Berat Badan</label
                  >
                  <input
                    type="number"
                    name="berat-badan"
                    id="berat-badan"
                    :class="input_style"
                  />
                </div>

                <!-- Lokasi Vaksin -->
                <div class="col-span-3 sm:col-span-3">
                  <label
                    for="lokasi_vaksin"
                    class="block text-sm font-medium text-gray-700"
                    >Lokasi Vaksin</label
                  >
                  <select
                    id="lokasi_vaksin"
                    name="lokasi_vaksin"
                    autocomplete="lokasi-vaksin"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
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
                <div class="col-span-3 sm:col-span-3">
                  <label
                    for="tipe_vaksin"
                    class="mb-2 block text-sm font-medium text-gray-700"
                    >Tipe Vaksin</label
                  >

                  <a-select
                    v-model:value="value"
                    mode="multiple"
                    style="width: 100%"
                    placeholder="Please select"
                    :options="options"
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
                Simpan
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

const options = [
  { valeu: "dt", label: "DT" },
  { valeu: "td", label: "Td" },
  { value: "bcg", label: "BCG" },
  { value: "opv1", label: "OPV1" },
  { value: "opv2", label: "OPV2" },
  { value: "opv3", label: "OPV3" },
  { value: "opv4", label: "OPV4" },
  { value: "pcv1", label: "PCV1" },
  { value: "pcv2", label: "PCV2" },
  { valeu: "pcv3", label: "PCV3" },
  { value: "dpt_hb_hib_1", label: "DPT-HB-Hib 1" },
  { value: "dpt_hb_hib_2", label: "DPT-HB-Hib 2" },
  { value: "dpt_hb_hib_3", label: "DPT-HB-Hib 3" },
  { value: "dpt_hb_hib_4", label: "DPT-HB-Hib 4" },
  { value: "campak_rubela", label: "Campak-Rubela" },
];
</script>
