
import http from './http'

import {
  LOGIN,
  USER
}
from './api'

export function login(payload, isCache = false) {
  let url = LOGIN;
  return http.post(url, payload, isCache)
}

export function getUserInfo(params, isCache = false) {
  let url = USER;
  return http.get(url, params, isCache)
}

