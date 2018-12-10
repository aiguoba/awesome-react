import React, { Component } from 'react'
import styles from './index.scss'
import { observer } from 'mobx-react'

@observer
export default class Test extends Component {
  render() {
    const { apple, orange, pear, total, updateAmount } = this.props.store
    return (
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.col}>
            <button
              onClick={() => updateAmount({ type: 'apple', action: 'plus' })}
            >
              +
            </button>
            <div>🍎:{apple}</div>
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
            <div>🍊:{orange}</div>
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
            <div>🍐:{pear}</div>
            <button
              onClick={() => updateAmount({ type: 'pear', action: 'minus' })}
            >
              -
            </button>
          </div>
          =<div className={styles.col}>{total}</div>
        </div>
      </div>
    )
  }
}
