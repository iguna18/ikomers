import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const getAllProducts = () => {
  return (
    axios.get(baseUrl+'/products/')
    .then(response => {
      console.log(response.data);
      return response.data
    })
  )
}

export default { getAllProducts } 

export const getAllUsers = () => {}
export const login = (username, password) => {
  return (
    axios.post(baseUrl+'/auth/login', 
      {
        username, password
      })
  )
} 

