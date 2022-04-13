import axios from 'axios'

const client = axios.create({
  baseURL: 'http://104.197.0.21:8000/',
  json: true
})

export default {
  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {}
    }).then(req => {
      return req.data
    })
  },
  getCompanies () {
    return this.execute('get', 'api/companies')
  },
  getCompany (id) {
    return this.execute('get', `api/companies/${id}`)
  },
  createCompany (data) {
    return this.execute('post', 'api/companies/', data)
  },
  updateCompany (id, data) {
    return this.execute('put', `api/companies/${id}`, data)
  },
  deleteCompany (id) {
    return this.execute('delete', `api/companies/${id}`)
  }
}