<template>
  <div style="height: 70vh; overflow-y: scroll;">
    <div
      v-for="(item, index) in dataList"
      :key="index"
      class="p-2"
    >
    <a-collapse>
      <a-collapse-panel
        :show-arrow="false"
      >
        <template #header>
          <div class="w-full flex justify-between">
            <div class="px-4 py-1-sm sm:px-6">
              <p class="text-lg sm:text-xl font-medium text-gray-900">{{ item.attributes.package_name }}</p>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Informasi Projek</p>
            </div>
            <a-dropdown v-if="store.user.isLogin">
              <div class="h-20 w-20 sm:h-4 sm:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item v-if="acces.edit_project.includes(store.user.role.type)">
                    <a @click="() => $router.push({name: 'edit', query:{ id: item.id}})">Edit</a>
                  </a-menu-item>
                  <a-menu-item v-if="acces.rm_project.includes(store.user.role.type)">
                    <a @click="handleModalDelete(item.id)">Remove</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="() => $router.push({name: 'detail', query:{ id: item.id, coordinate: item.attributes.project_location[0].coordinate}})">Lihat Detail</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </template>
        
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Nama Proyek</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ item.attributes?.package_name }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Lokasi</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ item.attributes?.project_location[0]?.address }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">RW</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ item.attributes?.project_location[0]?.rw }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Kontraktor Pelaksana</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ item.attributes?.contractor.data.attributes.fullname }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Konsultan Pengawas</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ item.attributes?.consultant.data.attributes.fullname }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Progress Kegiatan</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Peta Lokasi</dt>
              <div>
                <Maps 
                  :pinPoint="item.attributes.project_location[0].coordinate"
                  :id="item.id"
                />
              </div>
              
              <!-- <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Billy</dd> -->
            </div>
          </dl>
        </div>
      </a-collapse-panel>
    </a-collapse>
    </div>
    <ModalDelete 
      :show-modal-delete="showModalDelete"
      :menu="menu"
      :del-id="delId"
      @handleModalDelete="handleModalDelete"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Maps from '../Maps/Maps.vue';
import { useStore } from '../../store'
import { notification } from 'ant-design-vue';
import ModalDelete from '../Modal/ModalDelete.vue';
import acces from '../../acces'

const store = useStore()

// const dataList = ref({})
const showModal = ref(false)
const showModalDelete = ref(false)
const delId = ref('')

const props = defineProps({
  dataList : Array,
})


const handleModalDelete = (id) => {
  delId.value = id
  console.log(delId.value)
  showModalDelete.value = !showModalDelete.value
}
</script>

<style>

</style>