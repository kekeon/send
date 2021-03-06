import { userInfo } from '@/service/userService'
import { Action } from 'history';
import { Effect } from '@/models/connect';
import { Reducer } from 'redux';


interface UserModel {
  namespace: string;
  state: object;
  effects: {
    get(action: Action, effect: Effect): void
  };
  reducers: {
    update: Reducer<{}>;
  };
}

const model: UserModel = {
  namespace: 'user',

  state: {
    name: 'root',
    info: {
      age: 16,
      gender: 'male'
    }
  },

  effects: {
    * get({payload}: any, {call, put}: any) {
      let info = yield call(userInfo)
      yield put({
        type: 'update',
        payload: {
          name: info.data.name
        }
      })
    }
  },

  reducers: {
    update(state: any, {payload}: any ) {
      return {
        ...state,
        ...payload,
      }
    },
  }
}

export default model

