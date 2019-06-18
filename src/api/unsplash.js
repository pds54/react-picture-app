import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b99651f409b42fe34b11ba3824f0f4b1ed7bcb56a4d04b259d3c8bdd0cb60bbe'
  }
})
