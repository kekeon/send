import { login } from '@/service/userService';
import { Action, Reducer } from 'redux';
import { LoginInterface } from '@/interface/loginInterface';
import { Effect } from '@/models/connect';

interface LoginAction extends Action {
  payload: LoginInterface
}


interface ModelType {
  namespace: string;
  state: object;
  effects: {
    post(action: LoginAction, effect: Effect): void;
  };
  reducers: {
    update: Reducer<{}>;
  };
}

const model: ModelType = {
  namespace: 'login',


  state: {
    token: 'root',
    state: 'ok'
  },

  effects: {
    *post({payload}: LoginAction, {call, put}: Effect) {
      try {
        let res = yield call(login, payload);
        yield put({
          type: 'update',
          payload: {
            token: res.token
          }
        });
        console.log("=============");

        console.log(res);
        return res;
      }catch (e) {
        console.log("=======errr======");

        console.log(e);
        return Promise.reject(e);
      }

    }
  },

  reducers: {
    update(state: object, {payload}: any) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default model;
