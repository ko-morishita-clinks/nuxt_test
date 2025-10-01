<template>
  <div>
    about<br>
    <NuxtLink to="/">Home</NuxtLink>
    <br>
    {{ now }}
    <img src="~/assets/images/cat.jpg" width="300" alt="">
    <div class="red-b">assets/cssのテスト</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      now: null
    }
  },
  mounted(){
    this.now = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}
</script>
