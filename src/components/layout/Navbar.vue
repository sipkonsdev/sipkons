<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <Sipkons class="w-44 h-44" style="fill: white"/>
            <!-- <h1 class="text-3xl font-bold tracking-tight text-white">SIPKONS</h1> -->
            <!-- <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[$route.meta.key == item.key ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">

            <!-- Notification Button -->
            <!-- <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->

            <!-- Sign in & Sign up -->
            <div v-if="!store.user.isLogin" class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a-popover :visible="visible" trigger="click">
                  <template #content>
                    <div class="py-2 px-1">
                      <div class="mb-2" >
                        <a-input placeholder="Username" @change="handleUsername"/>
                      </div>
                      <div class="mb-2" >
                        <a-input-password placeholder="Password" @change="handlePassword"/>
                      </div>
                      <div class="box-content flex justify-end">
                        <a class="whitespace-nowrap text-sm rounded-md border border-transparent bg-indigo-600 font-medium text-white hover:text-blue-500 px-2 py-1" @click="loginUser">Sign in</a>
                      </div>
                    </div>
                  </template>
                  <a class="whitespace-nowrap text-base font-medium text-white hover:text-blue-500" @click="toogleLogin(visible)">Sign in</a>
                </a-popover>
              <!-- <a href="/signup" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a> -->
            </div>

            <div v-if="store.user.isLogin" class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer" @click="toogleAvatar(avatar)">
              <a-popover :visible="avatar" trigger="click">
                  <template #content>
                    <div class="py-2 px-1">
                      <div class="mb-2" >
                        {{ store.user.user.fullname }}
                      </div>
                      <div class="mb-2" >
                        {{ store.user.user.email }}
                      </div>
                      <div class="mt-5 box-content flex justify-start cursor-pointer">
                        <div class="font-medium text-blue-600" @click="logout">Logout</div>
                      </div>
                    </div>
                  </template>
                  <span class="font-medium text-gray-600 dark:text-gray-300" >{{ store.user.user.username?.charAt(0).toUpperCase()}}</span>
                </a-popover>  
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="absolute inset-x-0 top-15 origin-top-right transform p-2 transition md:hidden z-50">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/chart-bar -->
                  <!-- <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg> -->
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div v-if="!store.user.isLogin">
              <!-- <a href="signup" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a> -->
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                <!-- Existing customer? -->
                <button class="text-indigo-600 hover:text-indigo-500" @click="handleLoginMobile">Sign in</button>
              </p>
            </div>
            <div v-if="store.user.isLogin" class="grid grid-cols-6 gap-3 flex items-center">
              <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
                <span class="font-medium text-gray-600 dark:text-gray-300" >{{ store.user.user.username?.charAt(0).toUpperCase()}}</span>
              </div>
              <div class="col-span-5">
                <div class="flex items-end">{{ store.user.user.fullname }}</div>
                <div class="flex items-start">{{ store.user.user.email }}</div>
              </div>
              <div class="col-span-6">
                <div class="flex justify-end font-medium text-blue-600" @click="logout">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a-modal
        :visible="modalLoginMobile"
        :footer="null"
        @cancel="handleLoginMobile"
      >
        <div class="mt-5 py-2 px-1">
          <div class="mb-2" >
            <a-input placeholder="Username" @change="handleUsername"/>
          </div>
          <div class="mb-2" >
            <a-input-password placeholder="Password" @change="handlePassword"/>
          </div>
          <div class="box-content flex justify-end">
            <a class="whitespace-nowrap text-sm rounded-md border border-transparent bg-indigo-600 font-medium text-white hover:text-blue-500 px-2 py-1" @click="loginUser">Sign in</a>
          </div>
        </div>
      </a-modal>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { login, getMe } from '../../services/api'
import { notification } from 'ant-design-vue';
import router from '../../router';
import { useStore } from '../../store/index'
import Cookies from 'js-cookie'
import Sipkons from "../../assets/logo/Sipkons.vue"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import './navbar.scss'


const store = useStore()

const state_ = reactive({
  username: '',
  password: '',
  popLogin: false,
})
const visible = ref(false)
const avatar = ref(false)
const modalLoginMobile = ref(false)
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigation = [
    { name: 'Home', href: '/', key:'home' },
    { name: 'Daftar Kegiatan', href: '/activity', key:'activity' },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

  const handleUsername = (e) => {
    state_.username = e.target.value
  }
  const handlePassword = (e) => {
    state_.password = e.target.value
  }
  const toogleLogin = (param) => {
    visible.value = !param
  }
  const toogleAvatar = (param) => {
    avatar.value = !param
  }

  const loginUser = async () => {
    const param = {
      identifier: state_.username,
      password: state_.password,
    }
    await login(param)
      .then(response => {
        Cookies.set("jwt", response.data.jwt)
        Cookies.set("user", JSON.stringify(response.data.user))
        visible.value = false
        store.user = {
          isLogin: true,
          jwt: response.data.jwt,
          user: response.data.user,
        }
        getInit()
        notification.success({
          message: 'Succes login',
        })
        router.push({
          name: 'home'
        })
        modalLoginMobile.value = false
      })
      .catch(err => {
        console.error(err)
      })
    // .finally(() => this.isLoading = false)
  }

  const getInit = async() => {
    await getMe()
      .then(response => {
        store.user.role = response.data.role
        Cookies.set("role", JSON.stringify(response.data.role))
      })
      .catch(err => {
        console.error(err)
      })
  }

  const logout = () => {
    Cookies.remove("jwt")
    Cookies.remove("user")
    store.user = {
          isLogin: false,
          jwt: '',
        }
    notification.success({
      message: 'Success Logout',
    })
    router.push({
      name: 'home',
    })
  }
  const handleLoginMobile = () => {
    modalLoginMobile.value = !modalLoginMobile.value
  }
</script>

<style>

</style>