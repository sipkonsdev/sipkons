<template>
    <Layout />
</template>

<script setup>
  import { onMounted, watch } from "vue";
  import { RouterView } from "vue-router";
  import Layout from "./components/layout/Layout.vue";
  import { useStore } from '../src/store/index'

  const store = useStore()

  onMounted(() =>{
    checkLogin()
  })

  const checkLogin = () => {
    if (sessionStorage.getItem("jwt")) {
      store.user.isLogin = true
      store.user.jwt = sessionStorage.getItem("jwt")
      store.user.user = JSON.parse(sessionStorage.getItem("user"))
    } else {
      store.user.isLogin = false
    }
  } 

</script>

<style scoped>
</style>
