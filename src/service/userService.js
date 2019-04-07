
import http from './http'

import {
  LOGIN
}
from './api'

class UserService  {

  login(payload, isLoading = false){
    let url = LOGIN;

    return http.post(url,payload, {isLoading})
  }
}


let instance = null;
export default () => {

  if (!instance) {
    instance = new UserService()
  }

  return instance
}

