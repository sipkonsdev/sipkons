<template>
    <Layout />
</template>

<script setup>
  import { onMounted, watch } from "vue";
  import { RouterView } from "vue-router";
  import Layout from "./components/layout/Layout.vue";
  import { useStore } from '../src/store/index'
  import Cookies from 'js-cookie'

  const store = useStore()

  onMounted(() =>{
    checkLogin()
  })

  const checkLogin = () => {
    if (Cookies.get("jwt")) {
      store.user.isLogin = true
      store.user.jwt = Cookies.get("jwt")
      store.user.user = JSON.parse(Cookies.get("user"))
    } else {
      store.user.isLogin = false
    }
  } 

</script>

<style scoped>
</style>
