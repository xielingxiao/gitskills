const Todo = () => import(/* webpackChunkName: "about" */ '../views/todo/todo')
const Login = () => import(/* webpackChunkName: "about" */ '../views/login/login')
const Echarts = () => import(/* webpackChunkName: "about" */ '../views/echarts/echarts')
const Ui = () => import(/* webpackChunkName: "about" */ '../views/ui/ui')

export default [
  {
    path: '/',
    name: 'home',
    component: Todo,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: Echarts,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/ui',
    name: 'ui',
    component: Ui,
    meta: {
      keepAlive: false
    }
  }
]
