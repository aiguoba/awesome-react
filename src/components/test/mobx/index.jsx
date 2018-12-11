import React, { Component } from 'react'
import styles from './index.scss'
import { autorun, when } from 'mobx'
import { observer } from 'mobx-react'

@observer
export default class Test extends Component {
  constructor() {
    super(...arguments)
  }
  componentDidMount() {
    autorun(() => {
      const { apple, orange, pear, total } = this.props.store
      console.log(`苹果数量: ${apple}`)
      console.log(`橘子数量: ${orange}`)
      console.log(`梨数量: ${pear}`)
    })

    when(
      () => this.props.store.total,
      () => {
        const { total } = this.props.store
        console.log(`总数又变了 ${total}`)
      }
    )
  }

  render() {
    const {
      apple,
      orange,
      pear,
      total,
      updateAmount,
      totalPrice,
      getPrice,
      updatePrice,
      averageAmount,
      planAmount
    } = this.props.store
    return (
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.col}>
            <button
              onClick={() => updateAmount({ type: 'apple', action: 'plus' })}
            >
              +
            </button>
            <div>
              🍎({getPrice('apple')}/个):{apple}
            </div>
            <button
              onClick={() => updateAmount({ type: 'apple', action: 'minus' })}
            >
              -
            </button>
          </div>
          +
          <div className={styles.col}>
            <button
              onClick={() => updateAmount({ type: 'orange', action: 'plus' })}
            >
              +
            </button>
            <div>
              🍊({getPrice('orange')}元/个):{orange}
            </div>
            <button
              onClick={() => updateAmount({ type: 'orange', action: 'minus' })}
            >
              -
            </button>
          </div>
          +
          <div className={styles.col}>
            <button
              onClick={() => updateAmount({ type: 'pear', action: 'plus' })}
            >
              +
            </button>
            <div>
              🍐({getPrice('pear')}元/个):{pear}
            </div>
            <button
              onClick={() => updateAmount({ type: 'pear', action: 'minus' })}
            >
              -
            </button>
          </div>
          =<div className={styles.col}>{total}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>总价:${totalPrice}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            苹果 单价{' '}
            <button
              onClick={() => {
                updatePrice({ type: 'apple', action: 'plus' })
              }}
            >
              +1
            </button>
          </div>
          <div className={styles.col}>
            苹果 单价{' '}
            <button
              onClick={() => {
                updatePrice({ type: 'apple', action: 'minus' })
              }}
            >
              -1
            </button>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>平均数量:{averageAmount}个</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>预计购买:{planAmount}个</div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <button
              onClick={() => {
                averageAmount = 3
              }}
            >
              每样买三个
            </button>
          </div>
        </div>
      </div>
    )
  }
}
