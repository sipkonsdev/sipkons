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
                <input type="file" name="" id="" @change="handleChange">
                <!-- <a-form-item
                  name="fileList"
                  :rules="[{ required: true, message: 'Upload Document!' }]"
                >
                  <a-upload
                    name="file"
                    @change="handleChange"
                  >
                    <a-button>
                      <upload-outlined></upload-outlined>
                      Upload Document
                    </a-button>
                  </a-upload>
                </a-form-item> -->
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
  import { addProject,  uploadFile, createDaily } from '../../services/api';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { useRoute } from 'vue-router';
  import { notification } from 'ant-design-vue';
  
  const route  = useRoute()
  const props = defineProps({
    showModal: Boolean,
    menu: Array,
  })
  const emit = defineEmits(['handleModal'])

  const document = ref('')
  const formState = reactive({
    date: '',
  })

  const handleChange = async(info) => {
    await uploadFile(info.target.files[0])
      .then(response => {
        console.log(response.data[0].id)
        document.value = response.data[0].id
      })
      .catch(err => {
        console.error(err)
      })
  };

    const fileList = ref([]);


    const onFinish = async (values) => {
      const payload = {
        data: {
          date: values.date,
          documents: document.value,
          project: route.query.id,
        }
        } 
      console.log(payload)
      await createDaily(payload)
        .then(response => {
          console.log(response)
        notification.success({
          message: 'Berhasil Menambah data',
        })
          emit('handleModal')
        })
        .catch(err => {
          console.error(err)
        })
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