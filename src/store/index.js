import { observable, computed, action, configure } from 'mobx'

configure({ enforceActions: 'always' })

export default class Store {
  constructor() {
    this.getPrice = this.getPrice.bind(this)
  }
  @observable apple = 0
  @observable orange = 0
  @observable pear = 0
  @observable planAmount = 0
  @observable averageAmount = 0

  // @observable.shallow
  @observable
  prices = [
    { name: 'apple', price: 2 },
    { name: 'orange', price: 3 },
    { name: 'pear', price: 4 }
  ]

  @computed get total() {
    return this.apple + this.orange + this.pear
  }

  @computed get totalPrice() {
    return (
      this.apple * this.getPrice('apple') +
      this.orange * this.getPrice('orange') +
      this.pear * this.getPrice('pear')
    )
  }

  @action.bound updateAmount({ type, action }) {
    this[type] = action === 'plus' ? this[type] + 1 : this[type] - 1
  }

  @action.bound updatePrice({ type, action }) {
    let target = this.prices.find(v => v.name === type)
    Reflect.set(
      target,
      'price',
      action === 'plus' ? target.price + 1 : target.price - 1
    )
  }

  getPrice(name) {
    let target = this.prices.find(v => v.name === name) || {}
    return target.price
  }

  // @computed get averageAmount() {
  //   return (this.total / 3).toFixed(1)
  // }

  set averageAmount(amount) {
    this.planTotal = amount * 3
  }
}
