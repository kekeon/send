import http from './http';
import { LOGIN, USER } from './api';
export function login(payload) {
    let url = LOGIN;
    return http.post(url, payload);
}
export function userInfo() {
    let url = USER;
    return http.get(url);
}
//# sourceMappingURL=userService.js.map