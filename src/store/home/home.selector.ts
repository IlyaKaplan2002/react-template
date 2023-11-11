import { RootState } from '../store'

class HomeSelector {
  getCards = (state: RootState) => state.home.cards
}

export const homeSelector = new HomeSelector()
