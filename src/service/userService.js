import http from './http';
import { LOGIN, USER } from './api';
export async function login(payload) {
    let url = LOGIN;
    return http.post(url, payload);
}
export async function userInfo() {
    let url = USER;
    return http.get(url);
}
//# sourceMappingURL=userService.js.map