
import http from './http'
import {LoginInterface} from '../interface/loginInterface'

import {
  LOGIN,
  USER
}
from './api'


export async function login(payload: LoginInterface): Promise<any> {
  let url = LOGIN;
  return http.post(url, payload)
}

export async function userInfo(): Promise<any> {
  let url = USER;
  return http.get(url)
}

