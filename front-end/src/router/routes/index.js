/*eslint comma-dangle: ["error", "always-multiline"]*/
import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home')),
    meta: {
      accessTo: 'user',
    },
  },
  {
    path: '/tasks',
    component: lazy(() => import('../../views/tasks/tasks')),
  },
  {
    path: '/postTask',
    component: lazy(() => import('../../views/tasks/postTask')),
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout',
  },
]

export { DefaultRoute, TemplateTitle, Routes }
