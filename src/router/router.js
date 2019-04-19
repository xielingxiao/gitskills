import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
}
