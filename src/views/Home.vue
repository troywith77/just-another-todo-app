<template>
  <div class="home">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import PostUseCase from '@/domains/post/use-cases/post.use-case'

export default {
  name: 'home',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    PostUseCase.getPosts()
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.posts = res
      })
  }
}
</script>
