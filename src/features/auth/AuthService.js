import axios from "axios";

const base_url = "https://car-rental-app-5d25.onrender.com"

const register = async(formData) => {

const response = await axios.post(base_url + "/api/auth/register", formData)
localStorage.setItem('user', JSON.stringify(response.data))
// console.log(response.data);
return response.data

}

const login = async(loginData) => {
    
    const response = await axios.post(base_url + "/api/auth/login", loginData)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
    // console.log(response.data);
    
}

const AuthService = {register, login}

export default AuthService




