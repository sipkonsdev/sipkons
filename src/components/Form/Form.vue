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

                <div class="col-span-6 sm:col-span-6 grid grid-cols-12 gap-1 items-center">
                  <div class="col-span-10">
                    <a-form-item
                      name="address"
                      :rules="[{ required: true, message: 'Masukkan Lokasi!' }]"
                    >
                      <label for="address" class="block text-sm font-medium text-gray-700">Lokasi</label>
                      <a-input v-model:value="formState.address"/>
                    </a-form-item>
                  </div>
                  <div class="col-span-2 flex flex-col justify-center items-center">
                    <a-form-item 
                      name="coordinate"
                      :rules="[{ required: true, message: 'Masukkan Pinpoint!' }]"
                    >
                      <a-input hidden v-model:value="formState.coordinate"/>
                      <Marker class="mt-3 w-8 h-8 cursor-pointer rounded" @click="handleModal"/>
                    </a-form-item>
                    <!-- <p class="text-xs text-red-600">Pinpoint Maps!</p> -->
                  </div>
                  <div class="col-span-12 flex justify-end">
                  </div>
                </div>

                <!-- <div class="flex items-center justify-center col-span-6 sm:col-span-1">
                  <a-form-item
                    name="project_location"
                    :rules="[{ required: true, message: 'Masukkan Lokasi!' }]"
                    class="cursor-pointer"
                  >
                    <Marker class="w-8 h-8"/>
                  </a-form-item>
                </div> -->

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="rt"
                    :rules="[{ required: true, message: 'Masukkan RT!' }]"
                  >
                    <label for="rw" class="block text-sm font-medium text-gray-700">RT</label>
                    <a-input v-model:value="formState.rt"/>
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
                    name="postal_code"
                    :rules="[{ required: true, message: 'Masukkan Kode Pos!' }]"
                  >
                    <label for="rw" class="block text-sm font-medium text-gray-700">Kode Pos</label>
                    <a-input v-model:value="formState.postal_code"/>
                  </a-form-item>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <a-form-item
                    name="contractor"
                    :rules="[{ required: true, message: 'Masukkan Kontraktor!' }]"
                  >
                    <label for="contractor" class="block text-sm font-medium text-gray-700">Kontraktor</label>
                    <a-select v-model:value="formState.contractor"  option-filter-prop="fullname">
                      <a-select-option v-for="(item, index) in contractor_list" :key="index" :value="item.id" :label="item.fullname">
                        {{ item.fullname }}
                      </a-select-option>
                    </a-select>
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
                    <a-select v-model:value="formState.consultant" option-filter-prop="fullname">
                      <a-select-option v-for="(item, index) in consultant_list" :key="index" :value="item.id" :label="item.fullname">
                        {{ item.fullname }}
                      </a-select-option>
                    </a-select>
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
                <a class="inline-flex justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3" @click="toBackPage">Batal</a>
                <button html-type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
              </a-form-item>
            </div>
          </div>
        </a-form>
      </div>
    </div>

    <ModalMaps 
      :show-modal="showModal"
      @handleModal="handleModal"
    />
  </div>
</template>

<script setup>
  import { onMounted, reactive, ref, watch } from 'vue';
  import router from '../../router/index';
  import { addProject, userList, projectList, editProject, getProject } from '../../services/api';
  import { notification } from 'ant-design-vue';
  import Marker from '../../assets/logo/Marker.vue'
  import ModalMaps from '../Modal/ModalMaps.vue'
  import { useStore } from '../../store'
  import { useRoute } from 'vue-router';
  import moment from 'moment'

  const store = useStore()
  const route = useRoute()

  const showModal = ref(false)
  const consultant_list = ref([])
  const contractor_list = ref([])
  var dataList = {}

  const formState = reactive({
      package_name: '',
      contract_number: '',
      contract_value: '',
      contract_start_date: '',
      contract_end_date: '',
      contractor: '',
      consultant: '',
      address: '',
      rt: '',
      rw: '',
      postal_code: '',
      coordinate: '',
      // project_location: [{
      //   address: '',
      //   rt: '',
      //   rw: '',
      //   postal_code: '',
      //   coordinate: '-6.93431146580587, 107.60510031218733',
      // }]
  })

  watch(()=> store.form.coordinate, function() {
      console.log('value changes detected');
      formState.coordinate = store.form.coordinate
   });

  onMounted(() => {
    fetchConsultant()
    fetchContractor()
    if (route.name == 'edit') {
      fetchData()
    }
  })

  const onFinish = async (values) => {
    const payload = {
        package_name: values.package_name,
        contract_number: values.contract_number,
        contract_value: values.contract_value,
        contract_start_date: values.contract_start_date,
        contract_end_date: values.contract_end_date,
        contractor: values.contractor,
        consultant: values.consultant,
        project_location: [{
          address: values.address,
          rt: values.rt,
          rw: values.rw,
          postal_code: values.postal_code,
          coordinate: formState.coordinate,
        }]
      } 
    console.log(payload)
    if (route.name == 'add') {
      await addProject(payload)
          .then(response => {
              notification.success({
                message: 'Data Berhasil Ditambahkan',
              })
            router.push({
              name: 'activity'
            })
          })
          .catch(err => {
            console.error(err)
          })
    } else {
      await editProject(payload, route.query.id)
          .then(response => {
              notification.success({
                message: 'Data Berhasil Diedit',
              })
            router.push({
              name: 'activity'
            })
          })
          .catch(err => {
            console.error(err)
          })

    }
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

  const handleModal = () => {
    showModal.value = !showModal.value
  }

  const fetchConsultant = async () => {
  let params = {
      populate: 'role'
    } 
    await userList(params, 'konsultan_pengawas')
        .then(response => {
          consultant_list.value = response.data
          console.log(consultant_list.value)
        })
        .catch(err => {
          console.error(err)
        })
  }
  const fetchContractor = async () => {
  let params = {
      populate: 'role'
    } 
    await userList(params, 'kontraktor_pelaksana')
        .then(response => {
          contractor_list.value = response.data
        })
        .catch(err => {
          console.error(err)
        })
  }
  const fetchData = async() => {
 let params = {
    populate: 'daily_monitorings,weekly_monitorings,meetings,notes,project_location,contractor,consultant'
  } 
  await getProject(params, route.query.id)
    .then(response => {
      dataList = response.data.data
      formState.package_name = dataList.attributes.package_name
      formState.address = dataList.attributes.project_location[0].address
      formState.rt = dataList.attributes.project_location[0].rt
      formState.rw = dataList.attributes.project_location[0].rw
      formState.postal_code = dataList.attributes.project_location[0].postal_code
      formState.contractor = dataList.attributes.contractor.data.id
      formState.consultant = dataList.attributes.consultant.data.id
      formState.contract_number = dataList.attributes.contract_number
      formState.contract_value = dataList.attributes.contract_value
      formState.contract_start_date = moment(dataList.attributes.contract_start_date)
      formState.contract_end_date = moment(dataList.attributes.contract_end_date)
      store.form.coordinate = dataList.attributes.project_location[0].coordinate
      
      
      console.log(dataList.attributes)
    })
    .catch(err => {
      console.error(err)
    })
}

  
</script>

<style lang="scss">
  .ant-form-item {
    margin-bottom: 0px;
  }
</style>