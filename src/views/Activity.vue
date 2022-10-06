<template>
  <div>
    <div class="text-center lg:text-center">
        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Daftar Kegiatan</p>
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">DKI Jakarta</p> -->
      </div>
    <div class="sm:grid sm:grid-cols-4 sm:gap-4">
      <div class="flex justify-end sm:col-span-3 sm:flex sm:justify-start p-2">
        <button v-if="store.user.isLogin && store.user.user.username?.toLowerCase() == 'admin'" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700" @click="toAddPage">Tambah Kegiatan</button>
      </div>
      <div class="col-span-1 flex items-center p-2">
        <a-input type="search" class="h-8" placeholder="Cari" style="margin-right: 0.5rem;"/>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 cursor-pointer"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
    </div>
    <DataList />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import DataList from '../components/DataList/DataList.vue';
  import router from '../router';
  import { useStore } from '../store/index'

  const store = useStore()
  const toAddPage = () => {
    router.push({
      name: 'add',
    })
  }
</script>

<style>

</style>