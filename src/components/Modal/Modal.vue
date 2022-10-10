<template>
  <a-modal
    :visible="showModal"
    :footer="null"
    @cancel="$emit('handleModal')"
  >
  <div>
    <p class="text-lg text-center">{{ reupload ? 'Reupload Berkas' : `Tambah ${captionButton}` }}</p>
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
              <div v-if="menu.includes('meetings') || menu.includes('notes')" class="col-span-6 sm:col-span-6">
                <a-form-item
                  name="title"
                  :rules="[{ required: true, message: 'Masukkan Judul rapat!' }]"
                >
                  <label for="title" class="block text-sm font-medium text-gray-700">Judul</label>
                  <a-input v-model:value="formState.title" class="w-full"/>
                </a-form-item>
              </div>

              <div v-if="!menu.includes('notes') && !reupload"  class="col-span-6 sm:col-span-6">
                <a-form-item
                  name="date"
                  :rules="[{ required: true, message: 'Masukkan Tanggal!' }]"
                >
                  <label for="date" class="block text-sm font-medium text-gray-700">Tanggal</label>
                  <a-date-picker v-model:value="formState.date" class="w-full"/>
                </a-form-item>
              </div>

              <div v-if="menu.includes('weekly')"  class="col-span-6 sm:col-span-6">
                <a-form-item
                  name="end_date"
                  :rules="[{ required: true, message: 'Masukkan Tanggal!' }]"
                >
                  <label for="end_date" class="block text-sm font-medium text-gray-700">Tanggal Akhir</label>
                  <a-date-picker v-model:value="formState.end_date" class="w-full"/>
                </a-form-item>
              </div>

              <div class="col-span-6 sm:col-span-6">
                <!-- <a-form-item
                  name="fileList"
                  :rules="[{ required: true, message: 'Upload Document!' }]"
                > -->
                  <input type="file" @change="handleChange">
                <!-- </a-form-item> -->
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
  import { addProject,  uploadFile, createDetailActivity, updateDetailActivity } from '../../services/api';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { useRoute } from 'vue-router';
  import { notification } from 'ant-design-vue';
  
  const route  = useRoute()
  const props = defineProps({
    showModal: Boolean,
    menu: Array,
    reupload: Boolean,
    updateId: String,
  })
  const emit = defineEmits(['handleModal'])

  const document = ref('')
  const formState = reactive({
    date: '',
    title: '',
    file: '',
    end_date: '',
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
    if (props.reupload) {
      const payload = {
        data: {
          document: document.value
        }
      }
      await updateDetailActivity(props.menu[0], props.updateId, payload)
        .then(response => {
          notification.success({
            message: 'Berhasil Reupload berkas',
          })
          emit('handleModal')
          router.go()
        })
        .catch(err => {
          console.error(err)
        })

    } else {
      const payload = {
        data: {
          date: props.menu[0] == 'notes' ? undefined : values.date,
          documents: document.value,
          project: route.query.id,
          title: props.menu[0] == 'meetings' ? values.title : undefined,
          message: props.menu[0] == 'notes' ? values.title : undefined,
          start_date:  props.menu[0] == 'weekly' ? values.date : undefined,
          end_date:  props.menu[0] == 'weekly' ? values.end_date : undefined,
        }
      } 
      await createDetailActivity(payload, props.menu[0])
        .then(response => {
          notification.success({
            message: 'Berhasil Menambah data',
          })
          emit('handleModal')
          router.go()
        })
        .catch(err => {
          console.error(err)
        })
      }
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