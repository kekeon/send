
export default {
  namespace: 'member',

  state: {
    member: 'member',
  },

  effects: {
    *post({payload}, {call, put}) {
      yield put({
        type: 'update',
        payload: {
          member: '123456789'
        }
      })

    }
  },

  reducers: {
    update(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  }
}

