import HttpClient from '@/shared/http/HttpClient'

class PostRepository {
  getPosts () {
    return HttpClient.get('/posts')
  }
}

export default new PostRepository()
