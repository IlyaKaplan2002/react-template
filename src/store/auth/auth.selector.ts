import { RootState } from 'store'

class AuthSelector {
  getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
}

export const authSelector = new AuthSelector()
