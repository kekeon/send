
import http from './http'

import {
  LOGIN
}
from './api'

class UserService extends http {

  login(payload,isLoading = false){
    let url = LOGIN;

    return this.post(url,payload, {isLoading})
  }

}

