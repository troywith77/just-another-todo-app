class HttpClient {
  constructor () {
    this._baseUrl = 'https://jsonplaceholder.typicode.com'
  }
  get (url) {
    return fetch(`${this._baseUrl}${url}`)
      .then(res => res.json())
  }
}

export default new HttpClient()
