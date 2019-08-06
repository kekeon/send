
import http from './http'

import {
  LOGIN,
  USER
}
from './api'


export async function login(payload: {account: string, password: string}): Promise<any> {
  let url = LOGIN;
  return http.post(url, payload)
}

export async function userInfo(): Promise<any> {
  let url = USER;
  return http.get(url)
}

