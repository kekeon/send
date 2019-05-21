
import http from './http'

import {
  LOGIN
}
from './api'

export function login(payload, isLoading = false) {
  let url = LOGIN;
  return http.post(url,payload, {isLoading})
}

