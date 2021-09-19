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
    exact: true,
    component: lazy(() => import('../../views/tasks/tasks')),
  },
  {
    path: '/tasks/:id',
    exact: true,
    component: lazy(() => import('../../views/tasks/taskDetails')),
  },
  {
    path: '/task-update/:id',
    exact: true,
    component: lazy(() => import('../../views/tasks/updateTask')),
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
    path: '/profile/me',
    component: lazy(() => import('../../views/profile/Profile')),
    exact: true,
  },
  {
    path: '/settings-general',
    component: lazy(() => import('../../views/settings/settingsViews/General')),
    exact: true,
  },
  {
    path: '/settings-info',
    component: lazy(() => import('../../views/settings/settingsViews/Info')),
    exact: true,
  },
  {
    path: '/settings-social',
    component: lazy(() => import('../../views/settings/settingsViews/Social')),
    exact: true,
  },
  {
    path: '/inbox',
    component: lazy(() => import('../../views/inbox/index')),
    appLayout: true,
    className: 'chat-application',
    exact: true,
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout',
  },
]

export { DefaultRoute, TemplateTitle, Routes }
