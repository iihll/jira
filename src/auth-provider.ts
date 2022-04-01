// 在真实环境中，如果使用 firebase 这种第三方 auth 服务的话，本文件不需要开发者开发

import { User } from 'screens/project-list/search-panel'

const apiUrl = process.env.REACT_APP_API_URL
const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')

  return user
}

export const login = async (data: { username: string; password: string }) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (response.ok) {
    return handleUserResponse(await response.json())
  } else {
    return Promise.reject(data)
  }
}

export const register = async (data: {
  username: string
  password: string
}) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (response.ok) {
    return handleUserResponse(await response.json())
  } else {
    return Promise.reject(data)
  }
}

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey)
