import apiClient from '../axios'

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

export const dailyList = (params) => {
  return apiClient({
    method: 'get',
    url: '/api/daily-monitorings',
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
