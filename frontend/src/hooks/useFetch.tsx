import useSWR, { keyInterface, responseInterface } from 'swr'
import { ConfigInterface } from 'swr/dist/types'

import { api } from '../lib/api'

export function useFetch<Data = any, Error = any>(
  url: keyInterface,
  options?: ConfigInterface<Data, Error, any>
): responseInterface<Data, Error> {
  const fetch = async url => {
    const response = await api.get(url)

    return response.data
  }

  const response = useSWR<Data, Error>(url, fetch, options)

  return response
}
