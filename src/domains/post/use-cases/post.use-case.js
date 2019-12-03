import PostRepository from '../repositories/post.repository'

class PostUseCase {
  getPosts () {
    return PostRepository.getPosts()
  }
}

export default new PostUseCase()
