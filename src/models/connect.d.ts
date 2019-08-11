import {EffectsCommandMap} from 'dva';
import { RouterTypes } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';

export interface Loading {
  global: boolean;
  effects: {[key: string]: boolean| undefined}
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
  }
}

export interface ConnectState {
  loading: Loading;
}


export type Effect = EffectsCommandMap & { select: <T>(func: (state: object) => T) => T }


/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload :P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface Route extends MenuDataItem {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch;
}

