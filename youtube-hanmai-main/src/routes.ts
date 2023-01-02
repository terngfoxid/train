import { lazy } from 'solid-js'
import type { RouteDefinition } from 'solid-app-router'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: await import('./pages/index').then(o => o.default),
    data: await import('./pages/fetch.data').then(o => o.default),
  },
  {
    path: '/checkout',
    component: lazy(() => import('./pages/checkout')),
    data: await import('./pages/fetch.data').then(o => o.default),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
]
