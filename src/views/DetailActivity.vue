<template>
  <div>
    <div class="text-center lg:text-center">
        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Detail Kegiatan</p>
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">DKI Jakarta</p> -->
    </div>
    <a-menu :selectedKeys="menu" mode="horizontal">
      <a-menu-item key="daily" @click="handleMenu('daily')">
        <template #icon>
          <mail-outlined />
        </template>
        Pengawasan Harian
      </a-menu-item>
      <a-menu-item key="weekly" @click="handleMenu('weekly')">
        <template #icon>
          <mail-outlined />
        </template>
        Pengawasan Mingguan
      </a-menu-item>
      <a-menu-item key="meeting" @click="handleMenu('meeting')">
        <template #icon>
          <mail-outlined />
        </template>
        Undangan Rapat
      </a-menu-item>
      <a-menu-item key="notes" @click="handleMenu('notes')">
        <template #icon>
          <mail-outlined />
        </template>
        Catatan Khusus
      </a-menu-item>
    </a-menu>

    <div v-if="menu.includes('weekly')" class="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Tanggal
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Berkas
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Konsultan Perencanaan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Kepala Seksi Perencanaan & Pengawasan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Kepala Suku Dinas
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b ">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        20/10/2022 - 27/10/2022
                    </th>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a href="#" class="font-medium text-blue-600">Upload</a>
                        <a href="#" class="mt-2 font-medium text-blue-600">Download</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <div class="flex items-center mb-4">
                            <input id="radio-weekly-konsultan" type="radio" value="" name="radio-weekly-konsultan" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="radio-weekly-konsultan" type="radio" value="" name="radio-weekly-konsultan" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div>
                        <a class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <div class="flex items-center mb-4">
                            <input id="radio-weekly-ksp" type="radio" value="" name="radio-weekly-ksp" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="radio-weekly-ksp" type="radio" value="" name="radio-weekly-ksp" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div>
                        <a class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <div class="flex items-center mb-4">
                            <input id="radio-weekly-ksd" type="radio" value="" name="radio-weekly-ksd" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="radio-weekly-ksd" type="radio" value="" name="radio-weekly-ksd" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div>
                        <a class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="menu.includes('daily')" class="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Tanggal
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Berkas
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Konsultan Perencanaan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Kepala Seksi Perencanaan & Pengawasan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Kepala Suku Dinas
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b ">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        27/10/2022
                    </th>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a href="#" class="font-medium text-blue-600">Upload</a>
                        <a href="#" class="mt-2 font-medium text-blue-600">Download</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <div class="flex items-center mb-4">
                            <input id="radio-daily-konsultan" type="radio" value="" name="radio-daily-konsultan" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="radio-daily-konsultan" type="radio" value="" name="radio-daily-konsultan" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div>
                        <a class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <div class="flex items-center mb-4">
                            <input id="radio-daily-ksp" type="radio" value="" name="radio-daily-ksp" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="radio-daily-ksp" type="radio" value="" name="radio-daily-ksp" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div>
                        <a class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <div class="flex items-center mb-4">
                            <input id="radio-daily-ksd" type="radio" value="" name="radio-daily-ksd" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="radio-daily-ksd" type="radio" value="" name="radio-daily-ksd" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div>
                        <a class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="menu.includes('meeting')" class="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Tanggal
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Judul Rapat
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Nama Pembuat Rapat
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Berkas
                    </th>
                </tr>
            </thead>
            <tbody class="text-center text-xs">
                <tr class="bg-white border-b">
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        20/10/2022 - 27/10/2022
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        Rapat koordinasi mingguan
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        <p>Konsultan Pengawas</p>
                        <p>PT. Pengawas indah perkasa</p>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a href="#" class="font-medium text-blue-600">Upload</a>
                        <a href="#" class="mt-2 font-medium text-blue-600">Download</a>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="menu.includes('notes')" class="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Tanggal
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Judul Catatan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Berkas
                    </th>
                </tr>
            </thead>
            <tbody class="text-center text-xs">
                <tr class="bg-white border-b ">
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        20/10/2022
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        Surat Peringatan
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a href="#" class="font-medium text-blue-600">Upload</a>
                        <a href="#" class="mt-2 font-medium text-blue-600">Download</a>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div  class="mt-5 px-4 py-5 sm:px-6">
      <dt class="text-sm font-medium text-gray-500">Peta Lokasi</dt>
      <div>
        <Maps />
      </div>
      <!-- <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Billy</dd> -->
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Maps from '../components/Maps/Maps.vue';
  
    const menu = ref(['daily'])
    const handleMenu = (param) => {
      menu.value =[ param ]
      console.log(menu.value)
    }

</script>

<style>

</style>