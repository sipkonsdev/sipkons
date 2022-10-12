import apiClient from '../axios'
import FormData from  'form-data'

export const login = (payload) => {
  return apiClient({
    method: 'post',
    url: '/api/auth/local',
    data: payload,
  })
}

export const getMe = (payload) => {
  return apiClient({
    method: 'get',
    url: '/api/users/me',
    params: {
      populate: 'role',
    }
  })
}

export const projectList = (params) => {
  return apiClient({
    method: 'get',
    url: '/api/projects',
    params,
  })
}

export const getProject = (params, id) => {
  return apiClient({
    method: 'get',
    url: `/api/projects/${id}`,
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

export const editProject = (payload, id) => {
  return apiClient({
    method: 'put',
    url: `/api/projects/${id}`,
    data: {
      data: payload
    },
  })
}

export const deleteProject = (id) => {
  return apiClient({
    method: 'delete',
    url: `/api/projects/${id}`,
  })
}

export const detailactivityList = (params, id, type) => {
  let url
  if (['daily', 'weekly'].includes(type)) {
    url = `${type}-monitorings`
  } else {
    url = `${type}`
  }
  return apiClient({
    method: 'get',
    url: `/api/${url}?filters[project][id][$eq]=${id}&pagination[pageSize]=100&sort[date]=asc`,
    params,
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

export const createDetailActivity = (payload, type) => {
  let url
  if (['daily', 'weekly'].includes(type)) {
    url = `${type}-monitorings`
  } else {
    url = `${type}`
  }
  return apiClient({
    method: 'post',
    url: `/api/${url}`,
    data: payload
  })
}

export const deleteDetailActivity = (type, id) => {
  let url
  if (['daily', 'weekly'].includes(type)) {
    url = `${type}-monitorings`
  } else {
    url = `${type}`
  }
  return apiClient({
    method: 'delete',
    url: `/api/${url}/${id}`,
  })
}

export const updateDetailActivity = (type, id, payload) => {
  let url
  if (['daily', 'weekly'].includes(type)) {
    url = `${type}-monitorings`
  } else {
    url = `${type}`
  }
  return apiClient({
    method: 'put',
    url: `/api/${url}/${id}`,
    data: payload,
  })
}
