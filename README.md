# プロジェクト立ち上げ
docker-compose run --rm nuxt npx create-nuxt-app@3.7.1 .

docker-compose run --rm nuxt npm install

# nuxt.config.jsに下記を追記
server: {
  host: '0.0.0.0',
  port: 3000
},
vue: {
  config: {
    devtools: true
  }
},
watchers: {
  webpack: {
    poll: true
  }
}

# build
docker-compose run --rm nuxt npm run build