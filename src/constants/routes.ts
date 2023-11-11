import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { Home } from 'modules/home/pages/home'
import { Login } from 'modules/home/pages/login'

export interface IRoute {
  path: string
  component: () => EmotionJSX.Element
  private?: boolean
  restricted?: boolean
  redirect: string
}

export const routes: IRoute[] = [
  { path: '/', component: Home, private: true, redirect: '/login' },
  { path: '/login', component: Login, restricted: true, redirect: '/' },
]
