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
                    name="package_name"
                    :rules="[{ required: true, message: 'Masukkan Nama Paket Pekerjaan!' }]"
                  >
                    <label for="package_name" class="block text-sm font-medium text-gray-700">Nama Paket Pekerjaan</label>
                    <a-input v-model:value="formState.package_name"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="project_location"
                    :rules="[{ required: true, message: 'Masukkan Lokasi!' }]"
                  >
                    <label for="project_location" class="block text-sm font-medium text-gray-700">Lokasi</label>
                    <a-input v-model:value="formState.project_location.address"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="project_location"
                    :rules="[{ required: true, message: 'Masukkan RW!' }]"
                  >
                    <label for="project_location" class="block text-sm font-medium text-gray-700">RW</label>
                    <a-input v-model:value="formState.project_location.rw"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="contractor"
                    :rules="[{ required: true, message: 'Masukkan Kontraktor!' }]"
                  >
                    <label for="contractor" class="block text-sm font-medium text-gray-700">Kontraktor</label>
                    <a-input v-model:value="formState.contractor"/>
                  </a-form-item>
                </div>

                <!-- <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="email_kontraktor"
                    :rules="[{ required: true, message: 'Masukkan Email Kontraktor!' }]"
                  >
                    <label for="email_kontraktor" class="block text-sm font-medium text-gray-700">Email Kontraktor</label>
                    <a-input v-model:value="formState.email_kontraktor"/>
                  </a-form-item>
                </div> -->

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="consultant"
                    :rules="[{ required: true, message: 'Masukkan Konsultan Pengawas!' }]"
                  >
                    <label for="consultant" class="block text-sm font-medium text-gray-700">Konsultan Pengawas</label>
                    <a-input v-model:value="formState.consultant"/>
                  </a-form-item>
                </div>

                <!-- <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="email_konsultan_pengawas"
                    :rules="[{ required: true, message: 'Masukkan Email Konsultan Pengawas!' }]"
                  >
                    <label for="email_konsultan_pengawas" class="block text-sm font-medium text-gray-700">Email Konsultan Pengawas</label>
                    <a-input v-model:value="formState.email_konsultan_pengawas"/>
                  </a-form-item>
                </div> -->

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="contract_number"
                    :rules="[{ required: true, message: 'Masukkan No. Kontrak!' }]"
                  >
                    <label for="contract_number" class="block text-sm font-medium text-gray-700">No. Kontrak</label>
                    <a-input v-model:value="formState.contract_number"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="contract_value"
                    :rules="[{ required: true, message: 'Masukkan Nilai Kontrak!' }]"
                  >
                    <label for="contract_value" class="block text-sm font-medium text-gray-700">Nilai Kontrak</label>
                    <a-input v-model:value="formState.contract_value"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <a-form-item
                    name="contract_start_date"
                    :rules="[{ required: true, message: 'Masukkan Tanggal Mulai Kerja!' }]"
                  >
                    <label for="contract_start_date" class="block text-sm font-medium text-gray-700">Tanggal Mulai Kerja</label>
                    <a-date-picker v-model:value="formState.contract_start_date" class="w-full"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <a-form-item
                    name="contract_end_date"
                    :rules="[{ required: true, message: 'Masukkan Tanggal Selesai Kontrak!' }]"
                  >
                    <label for="contract_end_date" class="block text-sm font-medium text-gray-700">Tanggal Selesai Kontrak</label>
                    <a-date-picker v-model:value="formState.contract_end_date" class="w-full"/>
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
  import { addProject } from '../../services/api';

  
  // rw: '',
  //     kontraktor: '',
  //     email_kontraktor: '',
  //     konsultan_pengawas: '',
  //     email_konsultan_pengawas: '',
//   {
//     "data": {
//         "package_name": "string",
//         "contract_number": "string",
//         "contract_value": "123456789",
//         "contract_start_date": "2022-10-05",
//         "contract_end_date": "2022-10-05",
//         "contractor": 1,
//         "consultant": 1,
//         "project_location": [
//             {
//                 "id": "random string",
//                 "address": "string",
//                 "rt": "string",
//                 "rw": "string",
//                 "postal_code": "string",
//                 "coordinate": "23123,12313"
//             }
//         ]
//     }
// }
  const formState = reactive({
      package_name: '',
      contract_number: '',
      contract_value: '',
      contract_start_date: '',
      contract_end_date: '',
      contractor: '1',
      consultant: '1',
      project_location: [{
        address: '',
        rt: '1',
        rw: '',
        postal_code: '14320',
        coordinate: '123, 123',
      }]
  })

  const onFinish = async (values) => {
  const payload = {
      ...values,
    } 
    console.log(payload)
    await addProject(payload)
        .then(response => {
          daily.value = response.data.data
          console.log(daily.value)
        })
        .catch(err => {
          console.error(err)
        })
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