import httpClient from '../../http-common'

const update = (data) => {
  return httpClient.put(`/forgotpassword`, data)
}

export default { update }
