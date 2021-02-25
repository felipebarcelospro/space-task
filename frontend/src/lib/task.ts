import { useFetch } from '../hooks/useFetch'
import { api } from './api'
import { mutate } from 'swr'

export interface Task {
  id: string
  name: string
  done?: boolean
  createdAt: Date
}

export const findAll = () => {
  const { data, error, isValidating } = useFetch('/tasks')

  return { data, error, isValidating }
}

export const create = async (name: string) => {
  const { data } = await api.post('/tasks', { name })

  mutate('/tasks')

  return data
}

export const update = async (id: string, done: boolean) => {
  const { data } = await api.put(`/tasks/${id}`, { done })

  mutate('/tasks')

  return data
}

export const remove = async (id: string) => {
  await api.delete(`/tasks/${id}`)

  mutate('/tasks')
}
