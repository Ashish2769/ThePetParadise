import axios from 'axios'
import httpCommon from '../../http-common' 

const authenticateUser = (email, pwd) => {
  //make api call for auth
  console.log('auth call', email, pwd)
  return httpCommon.post(`http://localhost:8080/petparadise/signin`, {
    email: email,
    password: pwd,
  })
}
const storeUserDetails = (jwt, email, role, id) => {
  // console.log('add user');
  //since user has logged in : now for every request to the backend : add req auth interceptor
  setupRequestInterceptor(jwt)
  //user has logged in successfully : so add it's details under session storage
  sessionStorage.setItem('user_email', email)
  // sessionStorage.setItem('user_key', jwt);
  sessionStorage.setItem('user_role', role)
  sessionStorage.setItem('jwt', jwt)
  sessionStorage.setItem('user_id', id)
}
const removeUserDetails = () => {
  console.log('rem user')
  sessionStorage.removeItem('user_email')
  // sessionStorage.removeItem('user_key');
}
const isUserLoggedIn = () => {
  console.log('chk user')
  return sessionStorage.getItem('user_email') === null ? false : true
}
const getUserName = () => {
  return sessionStorage.getItem('user_email')
}

const getUserRole = () => {
  return sessionStorage.getItem('user_role')
}
const getUserId = () => {
  return sessionStorage.getItem('user_id')
}

//set up axios request interceptor for JWT
const setupRequestInterceptor = (jwt) => {
  console.log('in setUpRequestInterceptor')
  //  const basicAuth = 'Basic ' + window.btoa(userName + ':' + password);
  axios.interceptors.request.use((config) => {
    if (isUserLoggedIn()) {
      //adding the authorization header to config
      config.headers.Authorization = 'Bearer ' + jwt
      console.log('in isUserLoggedIn()')
      console.log(config.headers.authorization)
    }
    //return config
    return config
  })
}

export default {
  authenticateUser,
  getUserName,
  isUserLoggedIn,
  removeUserDetails,
  storeUserDetails,
  getUserRole,
  getUserId
}
