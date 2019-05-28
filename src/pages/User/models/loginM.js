

import {login} from "@/service/userService.js";

export default {
  namespace: 'login',

  state: {
    token: 'root',
    state:'ok'
  },

  effects: {
    *post({payload}, {call, put}) {
      let info = yield call(login, payload)
      console.log(info);
      yield put({
        type: 'update',
        payload: {
          token: info.token
        }
      })
    }
  },

  reducers: {
    update(state, {payload}) {
      console.log("payload");
      console.log(payload);
      console.log(state);
      return {
        ...state,
        ...payload,
      }
    },
  }
}

