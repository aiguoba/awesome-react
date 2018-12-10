import { observable, computed, action, autorun } from 'mobx'

export default class Store {
  @observable apple = 0
  @observable orange = 0
  @observable pear = 0

  @computed get total() {
    return this.apple + this.orange + this.pear
  }

  @action.bound updateAmount({ type, action }) {
    this[type] = action === 'plus' ? this[type] + 1 : this[type] - 1
  }
}
