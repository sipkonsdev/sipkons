<template>
  <a-modal
    :visible="showModal"
    :footer="null"
    @cancel="$emit('handleModal')"
  >
  <Maps />
  </a-modal>
</template>

<script setup>
import Maps from '../Maps/Maps.vue';

const props = defineProps({
  showModal: Boolean,
})
</script>

<style>

</style>