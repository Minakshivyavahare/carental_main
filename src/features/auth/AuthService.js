import axios from "axios";


const register = async(formData) => {

const response = await axios.post("/api/auth/register", formData)
localStorage.setItem('user', JSON.stringify(response.data))
// console.log(response.data);
return response.data

}

const login = async(loginData) => {
    
    const response = await axios.post("/api/auth/login", loginData)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
    // console.log(response.data);
    
}

const AuthService = {register, login}

export default AuthService




