<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-1 md:mt-0">
        <form action="#" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Nama Paket Pekerjaan</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Lokasi</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">RW</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Kontraktor</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Email Kontraktor</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Konsultan Pengawas</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Email Konsultan Pengawasan</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Nomor Kontrak</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Nilai Kontrak</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-input />
                </div>
                
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Tanggal Mulai Kerja</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-date-picker class="w-full"/>
                </div>
                
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Tanggal Selesai Kontrak</label>
                  <!-- <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> -->
                  <a-date-picker class="w-full"/>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button class="inline-flex justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3" @click="toBackPage">Batal</button>
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import router from '../../router/index';

  const toBackPage = () => {
    router.push(
      {
        name: 'activity',
      }
    )
  }
</script>

<style>

</style>