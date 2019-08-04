

import {userInfo} from '@/service/userService'

export default {
  namespace: 'user',

  state: {
    name: 'root',
    info: {
      age: 16,
      gender: 'male'
    }
  },

  effects: {
    *get(action, {call, put}) {
      let info = yield call(userInfo)
      yield put({
          type: 'updateState',
          payload: {
            name: info.data.name
          }
        })

    }
  },

  reducers: {
    updateState(state, {payload}) {
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

