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
