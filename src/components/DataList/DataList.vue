<template>
  <div>
    <a-collapse>
      <a-collapse-panel
        v-for="(item, index) in 10"
        :key="index"
        :show-arrow="false"
      >
        <template #header>
          Proyek Hambalang
        </template>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>