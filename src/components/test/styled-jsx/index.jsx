import React, { Component } from 'react'
import css from 'styled-jsx/css'

export default class StyledJSX extends Component {
  constructor() {
    super(...arguments)
    this.state = { color: 'pink' }
  }

  render() {
    const { color } = this.state

    return (
      <div>
        <style jsx>
          {`
            p {
              color: red;
            }
          `}
        </style>
        <style jsx>{`
          p.pink {
            color: ${color};
          }
        `}</style>
        <style jsx>{blueText}</style>
        <style jsx>{`
          p {
            span {
              color: #666;
            }
          }
        `}</style>

        <p>jsx</p>
        <p className="pink">pink jsx</p>
        <p className="blue">pink jsx</p>
        <p>
          <span>sass-test</span>
        </p>
      </div>
    )
  }
}

const blueText = css`
  p.blue {
    color: blue;
  }
`
