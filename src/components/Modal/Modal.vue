<template>
  <a-modal
    :visible="showModal"
    :footer="null"
    @cancel="$emit('handleModal')"
  >
  <div>
    <p class="text-lg text-center">Tambah {{ captionButton }}</p>
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
                  name="date"
                  :rules="[{ required: true, message: 'Masukkan Tanggal!' }]"
                >
                  <label for="date" class="block text-sm font-medium text-gray-700">Tanggal</label>
                  <a-range-picker v-if="menu.includes('weekly')" class="w-full"/>
                  <a-date-picker v-model:value="formState.date"  v-if="!menu.includes('weekly')" class="w-full"/>
                </a-form-item>
              </div>

              <div class="col-span-6 sm:col-span-6">
                <a-form-item
                  name="fileList"
                  :rules="[{ required: true, message: 'Upload Document!' }]"
                >
                  <a-upload
                    v-model:file-list="fileList"
                    name="file"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                  >
                    <a-button>
                      <upload-outlined></upload-outlined>
                      Upload Document
                    </a-button>
                  </a-upload>
                </a-form-item>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <a-form-item>
              <button class="inline-flex justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3" @click="$emit('handleModal')">Batal</button>
              <button html-type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </a-form-item>
          </div>
        </div>
      </a-form>
  </div>
  </a-modal>
</template>

<script setup>
  import { reactive, ref, computed } from 'vue';
  import router from '../../router/index';
  import { addProject } from '../../services/api';
  import { UploadOutlined } from '@ant-design/icons-vue';
  
  const props = defineProps({
    showModal: Boolean,
    menu: Array,
  })

  const formState = reactive({
    date: '',
    document: '',
    project: '',
  })

  const handleChange = info => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    const fileList = ref([]);


    const onFinish = async (values) => {
      // const payload = {
      //     ...values,
      //   } 
      // console.log(payload)
      // await addProject(payload)
      //     .then(response => {
      //       daily.value = response.data.data
      //       console.log(daily.value)
      //     })
      //     .catch(err => {
      //       console.error(err)
      //     })
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const captionButton = computed(() => {
    if (props.menu.includes('daily')) {
      return 'Pengawasan Harian'
    }
    if (props.menu.includes('weekly')) {
      return 'Pengawasan Mingguan'
    }
    if (props.menu.includes('meeting')) {
      return 'Undangan Rapat'
    }
    if (props.menu.includes('notes')) {
      return 'Catatan Khusus'
    }
  })
</script>

<style>

</style>