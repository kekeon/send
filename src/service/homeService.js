
import axios from './axiosConfig'
class HomeService {
    login(userModel){
        let url = "api/login"
        return axios.post(url,userModel)
    }
}

let instance = null;
export default ()=>{
    if(!instance){
        instance = new HomeService()
    }
    return instance;
}