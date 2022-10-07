<template>
  <div class="bg-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center lg:text-center">
        <h2 class="text-lg font-semibold text-indigo-600">Selamat Datang</h2>
        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Suku Dinas Perumahan Rakyat dan Kawasan Pemukiman</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Kota Administrasi Jakarta Timur</p>
      </div>

      <div class="mt-28 grid gap-10 grid-cols-1 sm:grid sm:grid-cols-5">
        <div class="flex justify-center sm:mt-3">
          <Jakarta />
        </div>
        <div class="flex justify-center sm:mt-3">
          <Dki />
        </div>
        <div class="flex justify-center sm:mt-3">
          <Sirukim />
        </div>
        <div class="flex justify-center sm:mt-3">
          <Jakhabitat />
        </div>
        <div class="flex justify-center">
          <Dprkp class="w-28 h-28"/>
        </div>
      </div>
    </div>

    <div class="mt-32 flex justify-center lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700" @click="toActivityPage">Lihat Daftar Kegiatan</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dki from '../assets/logo/Dki.vue';
import Jakarta from '../assets/logo/Jakarta.vue';
import Sirukim from '../assets/logo/Sirukim.vue';
import Jakhabitat from '../assets/logo/Jakhabitat.vue';
import Dprkp from '../assets/logo/Dprkp.vue';

import router from '../router';

const toActivityPage = () => {
  router.push({
    name: 'activity',
  })
}
</script>

<style>

</style>