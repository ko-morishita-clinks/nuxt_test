export default function () {
  console.log('moduleのテスト')

  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready')
  })
}