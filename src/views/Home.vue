<template>
  <div class="home">
  </div>
</template>

<script>
import PostUseCase from '@/domains/post/use-cases/post.use-case'

export default {
  name: 'home',
  mounted () {
    PostUseCase.getPosts()
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
