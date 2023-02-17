import axios from 'axios'

// const baseUrl = 'https://fakestoreapi.com/'
const baseUrl = 'https://localhost:3001'

const getAllProducts = () => {
  return (
    // axios.get(baseUrl+'/products/')
    // .then(response => {
    //   console.log(response.data);
    //   return response.data
    // })
    fetch(baseUrl+'/products')
    .then(res => console.log(res.json()))
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

