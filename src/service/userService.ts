
import http from './http'
import {AxiosRequestConfig} from 'axios'

import {
  LOGIN,
  USER
}
from './api'


export function login(payload: {account: string, password: string}) {
  let url = LOGIN;
  return http.post(url, payload)
}

export function userInfo() {
  let url = USER;
  return http.get(url)
}

