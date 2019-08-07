import { login } from "@/service/userService.js";
const model = {
    namespace: 'login',
    state: {
        token: 'root',
        state: 'ok'
    },
    effects: {
        *post({ payload }, { call, put }) {
            let info = yield call(login, payload);
            console.log(info);
            yield put({
                type: 'update',
                payload: {
                    token: info.token
                }
            });
        }
    },
    reducers: {
        update(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    }
};
export default model;
//# sourceMappingURL=loginM.js.map