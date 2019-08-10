import {EffectsCommandMap} from 'dva';
import { RouterTypes } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';

/**
 *
 */
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


