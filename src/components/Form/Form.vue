<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-1 md:mt-0">
        <a-form
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="name_project"
                    :rules="[{ required: true, message: 'Masukkan Nama Paket Pekerjaan!' }]"
                  >
                    <label for="name_project" class="block text-sm font-medium text-gray-700">Nama Paket Pekerjaan</label>
                    <a-input v-model:value="formState.name_project"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="location"
                    :rules="[{ required: true, message: 'Masukkan Lokasi!' }]"
                  >
                    <label for="location" class="block text-sm font-medium text-gray-700">Lokasi</label>
                    <a-input v-model:value="formState.location"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="rw"
                    :rules="[{ required: true, message: 'Masukkan RW!' }]"
                  >
                    <label for="rw" class="block text-sm font-medium text-gray-700">RW</label>
                    <a-input v-model:value="formState.rw"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="kontraktor"
                    :rules="[{ required: true, message: 'Masukkan Kontraktor!' }]"
                  >
                    <label for="kontraktor" class="block text-sm font-medium text-gray-700">Kontraktor</label>
                    <a-input v-model:value="formState.kontraktor"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="email_kontraktor"
                    :rules="[{ required: true, message: 'Masukkan Email Kontraktor!' }]"
                  >
                    <label for="email_kontraktor" class="block text-sm font-medium text-gray-700">Email Kontraktor</label>
                    <a-input v-model:value="formState.email_kontraktor"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="konsultan_pengawas"
                    :rules="[{ required: true, message: 'Masukkan Konsultan Pengawas!' }]"
                  >
                    <label for="konsultan_pengawas" class="block text-sm font-medium text-gray-700">Konsultan Pengawas</label>
                    <a-input v-model:value="formState.konsultan_pengawas"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="email_konsultan_pengawas"
                    :rules="[{ required: true, message: 'Masukkan Email Konsultan Pengawas!' }]"
                  >
                    <label for="email_konsultan_pengawas" class="block text-sm font-medium text-gray-700">Email Konsultan Pengawas</label>
                    <a-input v-model:value="formState.email_konsultan_pengawas"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="no_kontrak"
                    :rules="[{ required: true, message: 'Masukkan No. Kontrak!' }]"
                  >
                    <label for="no_kontrak" class="block text-sm font-medium text-gray-700">No. Kontrak</label>
                    <a-input v-model:value="formState.no_kontrak"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="nilai_kontrak"
                    :rules="[{ required: true, message: 'Masukkan Nilai Kontrak!' }]"
                  >
                    <label for="nilai_kontrak" class="block text-sm font-medium text-gray-700">Nilai Kontrak</label>
                    <a-input v-model:value="formState.nilai_kontrak"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <a-form-item
                    name="tgl_mulai"
                    :rules="[{ required: true, message: 'Masukkan Tanggal Mulai Kerja!' }]"
                  >
                    <label for="tgl_mulai" class="block text-sm font-medium text-gray-700">Tanggal Mulai Kerja</label>
                    <a-date-picker v-model:value="formState.tgl_mulai" class="w-full"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <a-form-item
                    name="tgl_selesai"
                    :rules="[{ required: true, message: 'Masukkan Tanggal Selesai Kontrak!' }]"
                  >
                    <label for="tgl_selesai" class="block text-sm font-medium text-gray-700">Tanggal Selesai Kontrak</label>
                    <a-date-picker v-model:value="formState.tgl_selesai" class="w-full"/>
                  </a-form-item>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <a-form-item>
                <button class="inline-flex justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3" @click="toBackPage">Batal</button>
                <button html-type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
              </a-form-item>
            </div>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import router from '../../router/index';

  const formState = reactive({
      name_project: '',
      location: '',
      rw: '',
      kontraktor: '',
      email_kontraktor: '',
      konsultan_pengawas: '',
      email_konsultan_pengawas: '',
      no_kontrak: '',
      nilai_kontrak: '',
      tgl_mulai: '',
      tgl_selesai: '',
  })

  const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

  const toBackPage = () => {
    router.push(
      {
        name: 'activity',
      }
    )
  }
</script>

<style lang="scss">
  .ant-form-item {
    margin-bottom: 0px;
  }
</style>