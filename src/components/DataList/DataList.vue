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
              <p class="text-xl font-medium text-gray-900">{{ item.attributes.package_name }}</p>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Informasi Projek</p>
            </div>
            <a-dropdown v-if="store.user.isLogin && store.user.user.username?.toLowerCase() == 'admin'">
              <div class="h-4 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">Edit</a>
                  </a-menu-item>
                  <a-menu-item>
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
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">70% - dummy</dd>
            </div>
            <div v-if="false" class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Pengawasan Mingguan</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div class="flex grid-cols-2 gap-4 mt-5 sm:mt-0">
                  <!-- <p>Tanggal</p> -->
                  <p>22/08/2022 - 30/08/2022</p>
                </div>
                <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <!-- Heroicon name: mini/paper-clip -->
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">data.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                </ul>
                <div class="mt-10">
                  <p>Kepala Seksi Perencanaan dan Pengawasan</p>
                  <a-radio-group name="radioGroup">
                    <a-radio value="1">Setuju</a-radio>
                    <a-radio value="2">Tidak Setuju</a-radio>
                  </a-radio-group>
                  
                  <ul role="list" class="mt-3 divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <!-- Heroicon name: mini/paper-clip -->
                        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2 w-0 flex-1 truncate">Catatan.pdf</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-10">
                  <p>Kepala Suku Dinas</p>
                  <a-radio-group name="radioGroup">
                    <a-radio value="1">Setuju</a-radio>
                    <a-radio value="2">Tidak Setuju</a-radio>
                  </a-radio-group>
                  
                  <ul role="list" class="mt-3 divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <!-- Heroicon name: mini/paper-clip -->
                        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2 w-0 flex-1 truncate">Catatan.pdf</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </dd>
            </div>
            <div v-if="false" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Pengawasan Harian</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div class="flex grid-cols-2 gap-4 mt-5 sm:mt-0">
                  <!-- <p>Tanggal</p> -->
                  <!-- <p>30/08/2022</p> -->
                  <a-date-picker />
                </div>
                <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <!-- Heroicon name: mini/paper-clip -->
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">data.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                </ul>
                <div class="mt-10">
                  <p>Kepala Seksi Perencanaan dan Pengawasan</p>
                  <a-radio-group name="radioGroup">
                    <a-radio value="1">Setuju</a-radio>
                    <a-radio value="2">Tidak Setuju</a-radio>
                  </a-radio-group>
                  
                  <ul role="list" class="mt-3 divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <!-- Heroicon name: mini/paper-clip -->
                        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2 w-0 flex-1 truncate">Catatan.pdf</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-10">
                  <p>Kepala Suku Dinas</p>
                  <a-radio-group name="radioGroup">
                    <a-radio value="1">Setuju</a-radio>
                    <a-radio value="2">Tidak Setuju</a-radio>
                  </a-radio-group>
                  
                  <ul role="list" class="mt-3 divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <!-- Heroicon name: mini/paper-clip -->
                        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2 w-0 flex-1 truncate">Catatan.pdf</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </dd>
            </div>
            <div v-if="false" class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Undangan Rapat</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <!-- Heroicon name: mini/paper-clip -->
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">data.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                  <!-- <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center"> -->
                      <!-- Heroicon name: mini/paper-clip -->
                      <!-- <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">data2.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li> -->
                </ul>
              </dd>
            </div>
            <div v-if="false" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Catatan Khusus</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <!-- Heroicon name: mini/paper-clip -->
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">data.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                  <!-- <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center"> -->
                      <!-- Heroicon name: mini/paper-clip -->
                      <!-- <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">data2.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li> -->
                </ul>
              </dd>
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
import { projectList } from '../../services/api';
import { notification } from 'ant-design-vue';
import ModalDelete from '../Modal/ModalDelete.vue';

const store = useStore()

const dataList = ref({})
const showModal = ref(false)
const showModalDelete = ref(false)
const delId = ref('')

onMounted(() => {
  fetchListProject()
})

const fetchListProject = async () => {
 let params = {
    populate: 'daily_monitorings,weekly_monitorings,meetings,notes,project_location,contractor,consultant'
  } 
  await projectList(params)
      .then(response => {
        dataList.value = response.data.data
        console.log(dataList.value)
      })
      .catch(err => {
        console.error(err)
      })
}

const handleModalDelete = (id) => {
  delId.value = id
  console.log(delId.value)
  showModalDelete.value = !showModalDelete.value
}
</script>

<style>

</style>