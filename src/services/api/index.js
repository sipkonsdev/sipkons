import apiClient from '../axios'
import FormData from  'form-data'

export const login = (payload) => {
  return apiClient({
    method: 'post',
    url: '/api/auth/local',
    data: payload,
  })
}

export const projectList = (params) => {
  return apiClient({
    method: 'get',
    url: '/api/projects',
    params,
  })
}

export const dailyList = (params, id) => {
  return apiClient({
    method: 'get',
    url: `/api/daily-monitorings?filters[project][id][$eq]=${id}`,
    params,
  })
}

export const addProject = (payload) => {
  return apiClient({
    method: 'post',
    url: '/api/projects',
    data: {
      data: payload
    },
  })
}

export const userList = (params, type) => {
  return apiClient({
    method: 'get',
    url: `/api/users?populate=role&filters[role][type][$eq]=${type}`,
  })
}

export const uploadFile = (payload) => {
  // var fs = require('fs');
  console.log(payload)
  var data = new FormData();
  data.append('files', payload);
  return apiClient({
    method: 'post',
    url: '/api/upload',
    headers: {
      'Content-Type' : 'multipart/form-data',
    },
    data: data
  })
}

export const createDaily = (payload) => {
  return apiClient({
    method: 'post',
    url: '/api/daily-monitorings',
    data: payload
  })
}
