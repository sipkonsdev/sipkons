<template>
  <div class="bg-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center lg:text-center">
        <h2 class="text-lg font-semibold text-indigo-600">Selamat Datang</h2>
        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Suku Dinas Perumahan Rakyat dan Kawasan Pemukiman</p>
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">DKI Jakarta</p> -->
      </div>

      <div class="mt-28 grid gap-10 grid-cols-1 sm:grid sm:grid-cols-5">
        <div class="flex justify-center">
          <Jakarta />
        </div>
        <div class="flex justify-center">
          <Dki />
        </div>
        <div class="flex justify-center">
          <Sirukim />
        </div>
        <div class="flex justify-center">
          <Jakhabitat />
        </div>
        <div class="flex justify-center">
          <Jakhabitat />
        </div>
      </div>
    </div>

    <div class="mt-32 flex justify-center lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="activity" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Lihat Daftar Kegiatan</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dki from '../assets/logo/Dki.vue';
import Jakarta from '../assets/logo/Jakarta.vue';
import Sirukim from '../assets/logo/Sirukim.vue';
import Jakhabitat from '../assets/logo/Jakhabitat.vue';
</script>

<style>

</style>