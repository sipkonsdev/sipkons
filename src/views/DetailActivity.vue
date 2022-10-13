<template>
  <div>
    <div class="text-center lg:text-center">
        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Detail Kegiatan</p>
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">DKI Jakarta</p> -->
    </div>
    <!-- <div class="sm:grid sm:grid-cols-4 sm:gap-4"> -->
      <div v-if="(menu.includes('meetings') ? acces.add_meeting.includes(store.user.role.type) : acces.add_activity.includes(store.user.role.type) )" class="flex justify-end sm:col-span-3 sm:flex sm:justify-end p-2">
        <button class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700" @click="handleModal(menu)">Tambah {{ captionButton }}</button>
      </div>
      <!-- <div class="col-span-1 flex items-center p-2">
        <a-input type="search" class="h-8" placeholder="Cari" style="margin-right: 0.5rem;"/>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 cursor-pointer"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div> -->
    <!-- </div> -->
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
      <a-menu-item key="meetings" @click="handleMenu('meetings')">
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

    <div v-if="menu.includes('daily') || menu.includes('weekly')" class="mt-10 overflow-x-auto max-h-96 overflow-y-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr class="">
                    <th scope="col" class="py-3 px-6">
                        Tanggal
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Berkas
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Konsultan Pengawas
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Kepala Seksi Perencanaan & Pengawasan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Kepala Suku Dinas
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Action
                    </th>
                </tr>
            </thead>
            <tbody v-for="(item) in data" :key="item.id" class="text-xs">
                <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        {{ menu.includes('weekly') ? `${item.attributes.start_date} s.d  ${item.attributes.end_date}` : item.attributes.date }}
                        <!-- :href="item.attributes.documents?.data?.attributes?.url" -->
                    </th>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a v-if="acces.reupload.includes(store.user.role.type)" class="font-medium text-blue-600" @click="handleReupload(item.id)">Upload</a>
                        <a :href="`${url+item.attributes.documents?.data?.attributes?.url}`" class="mt-2 font-medium text-blue-600">{{ item.attributes.documents?.data?.attributes?.name }}</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a-radio-group v-model:value="item.attributes.approved_by_consultant" :disabled="radioKonsultan" @change="handleRadio($event, item.id, 'consultant')">
                          <a-radio :style="radioStyle" :value="true">Setuju</a-radio>
                          <a-radio :style="radioStyle" :value="false">Tolak</a-radio>
                        </a-radio-group>
                        <!-- <div class="flex items-center mb-4">
                            <input :id="`radio-daily-konsultan-${item.id}`" type="radio" value="" :name="`radio-daily-konsultan-${item.id}`" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Setuju</label>
                        </div>
                        <div class="flex items-center">
                            <input :id="`radio-daily-konsultan-${item.id}`" type="radio" value="" :name="`radio-daily-konsultan-${item.id}`" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Tolak</label>
                        </div> -->
                        <a v-if="acces.add_notes.includes(store.user.role.type)" class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a-radio-group v-model:value="item.attributes.approved_by_kasi" :disabled="radioKasi(item.attributes.approved_by_consultant)" @change="handleRadio($event, item.id, 'kasi')">
                          <a-radio :style="radioStyle" :value="true">Setuju</a-radio>
                          <a-radio :style="radioStyle" :value="false">Tolak</a-radio>
                        </a-radio-group>
                        <a v-if="acces.add_notes.includes(store.user.role.type)" class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a-radio-group v-model:value="item.attributes.approved_by_kasudin" :disabled="radioKasudin(item.attributes.approved_by_kasi)" @change="handleRadio($event, item.id, 'kasudin')">
                          <a-radio :style="radioStyle" :value="true">Setuju</a-radio>
                          <a-radio :style="radioStyle" :value="false">Tolak</a-radio>
                        </a-radio-group>
                        <a v-if="acces.add_notes.includes(store.user.role.type)" class="mt-2 font-medium text-blue-600">+ Tambah Catatan</a>
                        <a class="mt-2 font-medium text-blue-600">Catatan</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <RecycleBin class="cursor-pointer w-15 h-15" @click="handleModalDelete(item.id)"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="menu.includes('meetings')" class="mt-10 overflow-x-auto max-h-96 overflow-y-auto relative shadow-md sm:rounded-lg">
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
                    <th scope="col" class="py-3 px-6">
                      Action
                    </th>
                </tr>
            </thead>
            <tbody v-for="(item) in data" :key="item.id" class="text-center text-xs">
                <tr class="bg-white border-b">
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      {{ item.attributes.date }}
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      {{ item.attributes.title }}
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        <p>Konsultan Pengawas</p>
                        <p>PT. Pengawas indah perkasa</p>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a v-if="acces.reupload.includes(store.user.role.type)" class="font-medium text-blue-600">Upload</a>
                        <a :href="`${url+item.attributes.documents?.data?.attributes?.url}`" class="mt-2 font-medium text-blue-600">{{ item.attributes.documents?.data?.attributes?.name }}</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <RecycleBin class="cursor-pointer w-12 h-12" @click="handleModalDelete(item.id)"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="menu.includes('notes')" class="mt-10 overflow-x-auto max-h-96 overflow-y-auto relative shadow-md sm:rounded-lg">
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
                    <th scope="col" class="py-3 px-6">
                      Action
                    </th>
                </tr>
            </thead>
            <tbody v-for="(item) in data" :key="item.id" class="text-center text-xs">
                <tr class="bg-white border-b ">
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      {{ item.attributes.createdAt }}
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      {{ item.attributes.message }}
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <a v-if="acces.reupload.includes(store.user.role.type)" class="font-medium text-blue-600">Upload</a>
                        <a :href="`${url+item.attributes.documents?.data[0]?.attributes?.url}`" class="mt-2 font-medium text-blue-600">{{ item.attributes.documents?.data[0]?.attributes?.name }}</a>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <RecycleBin class="cursor-pointer w-12 h-12" @click="handleModalDelete(item.id)"/>
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

    <Modal 
      :show-modal="showModal"
      :menu="menu"
      :reupload="reupload"
      :update-id="updateId"
      @handleModal="handleModal"
    />
    <ModalDelete 
      :show-modal-delete="showModalDelete"
      :menu="menu"
      :del-id="delId"
      @handleModalDelete="handleModalDelete"
    />
  </div>
</template>

<script setup>
  import { computed, onMounted, ref, watch, reactive } from 'vue'
  import Maps from '../components/Maps/Maps.vue';
  import { detailactivityList, updateDetailActivity } from '../services/api';
  import Modal from '../components/Modal/Modal.vue';
  import { useRoute } from 'vue-router';
  import RecycleBin from '../assets/logo/RecycleBin.vue';
  import ModalDelete from '../components/Modal/ModalDelete.vue'
  import { useStore } from '../store'
  import acces from '../acces'

  const route = useRoute()
  const store = useStore()
  const menu = ref(['daily'])
  const data = ref([])
  const weekly = ref([])
  const url = import.meta.env.VITE_API_URL
  const showModal = ref(false)
  const showModalDelete = ref(false)
  const delId = ref('')
  const updateId = ref('')
  const reupload = ref(false)
  const radioStyle = reactive({
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  });
  const value = ref('')

  onMounted(() => {
    fetchData()
  })

  watch(menu, (newValue, oldValue) => {
    fetchData()
  })

  const fetchData = async () => {
    let params = {
      populate: 'documents,projects'
    } 
    await detailactivityList(params, route.query.id, menu.value[0])
      .then(response => {
        data.value = response.data.data
      })
      .catch(err => {
        console.error(err)
      })

  }
  const radioKonsultan = computed(() =>{
    return !acces.approve_konsultan.includes(store.user.role.type)
  })
  
  const radioKasi = (param) =>{
    if (param) {
      return !acces.approve_kasi.includes(store.user.role.type)
    } else if (!param) {
      return true
    }
    return !acces.approve_kasi.includes(store.user.role.type)
  }

const radioKasudin = (param) =>{
    if (param) {
      return !acces.approve_kasudin.includes(store.user.role.type)
    } else if (!param) {
      return true
    }
    return !acces.approve_kasudin.includes(store.user.role.type)
}

  const handleMenu = (param) => {
    menu.value =[ param ]
  }

  const captionButton = computed(() => {
    if (menu.value.includes('daily')) {
      return 'Pengawasan Harian'
    }
    if (menu.value.includes('weekly')) {
      return 'Pengawasan Mingguan'
    }
    if (menu.value.includes('meetings')) {
      return 'Undangan Rapat'
    }
    if (menu.value.includes('notes')) {
      return 'Catatan Khusus'
    }
  })

  const handleModal = () => {
    showModal.value = !showModal.value
    reupload.value = false
  }
  
  const handleReupload = (id) => {
    showModal.value = !showModal.value
    reupload.value = true
    updateId.value = id
  }

  const handleModalDelete = (id) => {
    delId.value = id
    console.log(delId.value)
    showModalDelete.value = !showModalDelete.value
  }

  const handleRadio = async(e, id, role) => {
    const payload = {
      data: {
        [`approved_by_${role}`]: e.target.value
      }
    }
    await updateDetailActivity(menu.value[0], id, payload)
      .then(response => {
      location.reload()
      })
      .catch(err => {
        console.error(err)
      })
  }

</script>

<style>

</style>