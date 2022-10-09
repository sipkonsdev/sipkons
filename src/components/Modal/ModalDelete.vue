<template>
  <a-modal
    :visible="showModalDelete"
    :footer="null"
    @cancel="$emit('handleModalDelete')"
  >
    <h1 class="mt-5 text-3xl text-center">Konfirmasi</h1>
    <p class="text-lg text-center text-gray-400">Apakah kamu yakin akan menghapus data ini ?</p>
    <div class="flex justify-around px-4 py-3 text-right sm:px-6">
      <a class="inline-flex justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3" @click="$emit('handleModalDelete')">Batal</a>
      <button html-type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="handleDelete">Hapus</button>
    </div>
  </a-modal>
</template>

<script setup>
import { deleteDetailActivity } from '../../services/api';
import { notification } from 'ant-design-vue';

const props = defineProps({
  showModalDelete: Boolean,
  menu: Array,
  delId: String,
})
const emit = defineEmits(['handleModalDelete'])

const handleDelete = async() => {
  await deleteDetailActivity(props.menu[0], props.delId)
    .then(response => {
      notification.success({
        message: 'Berhasil Menghapus data',
      })
      emit('handleModalDelete')
      location.reload()
    })
    .catch(err => {
      console.error(err)
    })
}
</script>

<style>

</style>