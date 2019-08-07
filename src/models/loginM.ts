import {login} from "@/service/userService";
import {EffectsCommandMap} from 'dva';
import {Action, Reducer} from 'redux';
import {LoginInterface} from '../interface/loginInterface';

interface LoginAction extends Action {
  payload: LoginInterface
}

type Effect = EffectsCommandMap & { select: <T>(func: (state: object) => T) => T }

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
    * post({payload}, {call, put}) {
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
      return {
        ...state,
        ...payload,
      }
    },
  }
}

export default model

