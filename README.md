# 🍀 awesome-react

## 🌱 环境搭建

- webpack@4
  - babel-loader
  - html-loader
  - html-webpack-plugin
  - clean-webpack-plugin
- webpack-cli@3
- webpack-dev-server@3
- babel@7
  - @babel/core
  - @babel/preset-env (es6->es5)
  - @bebel/preset-react (jsx->js)
- webpack-merge(合并 webpack 配置)

## 🍒 组件

- 有状态组件
- 无状态组件
-
  - React.PureComponent
  - React.memo

## 🌵 数据流

- Mobx

  - 概念
    - 状态: 驱动应用的数据.
    - 衍生: 任何源自应用状态并且不会再有任何进一步的相互作用的即为衍生.
      - 用户界面
      - 衍生数据(计算属性)
      - 后端集成(服务请求)
    - 动作: 任意一段可以改变状态的代码.
    - `Action` --> `State` --> `Views`
  - API
    - `@observable` 将可被制作成可观察的数据结构转换为可观测对象, `@observable.deep` 的别名.
      - `observable(value)` `{ deep: false }` 浅集合
      - `observable.box(value,options?)` `{ deep: false }` 浅集合
      - `observable.object(value,decorators?,options?)` `{ deep: false }` 浅集合
      - `observable.array(value,options?)` `{ deep: false }` 浅集合
      - `observable.map(value,options?)` `{ deep: false }` 浅集合
      - `extendObservable` `{ deep: false }` 浅集合
    - `@observable.deep` 任何 `observable` 都默认使用的调节器.
    - `@observable.ref` 禁用自动的 `observable` 转换,只是创建了一个`observable`.
    - `@observable.shadow` 只能与集合组合使用,将任何分配的集合转换为`observable`,但该集合的值将按照原样处理.
    - `@computed` 创建衍生属性.
    - `@action` 创建动作
    - `@action.bound` 创建动作,并将 this 绑定到实例
    - `@observer` `mobx-react`
    - `autorun`
    - `when`
    - `reaction`
    - `onReactionError`
  - 实用工具
    - [mobx-utils](https://github.com/mobxjs/mobx-utils)
    - `Provider` `mobx-react`
    - `injetc` `mobx-react`
    - `toJS`
    - `isObservable` & `isObservableProp`
    - `isObservableObject`|`Array`|`Map` & `isBoxedObservable`
    - `isArrayLike`
    - `isAction`
    - `isComputed` & `isComputedProp`
    - `intercept` `拦截`
    - `observe`
    - `onBecomeObserved` & `onBecomeUnobserved`
    - `configure`
      - `arraybuffer`
      - `computedRequiresReaction`
      - `disableErrorBoundaries`
      - `enforceActions`
      - `isolateGlobalState`
      - `reactionScheduler`

- Redux

## CSS in JS

- [`JSS`](https://cssinjs.org/?v=v9.8.7)
- [`Radium`](https://github.com/FormidableLabs/radium)
- [CSS-Modules](https://github.com/css-modules/css-modules)
  - `css-loader options:{ modules：true }`
- `styled-jsx`

  - 安装 - `npm i styled-jsx -D`
  - `.babelrc` `{ "plugins": [ "styled-jsx/babel" ] }`
  - 支持 `sass`、`less`、`stylus`....
  - `styled-jsx-plugin-sass`
  - `npm i styled-jsx-plugins-sass node-sass -D`
    - ```json
      {
        "plugins": [
          ["styled-jsx/babel", { "plugins": ["styled-jsx-plugin-sass"] }]
        ]
      }
      ```
    - `styled-jsx-plugin-postcss`
    - `styled-jsx-plugin-stylelint`
    - `styled-jsx-plugin-less`
    - `styled-jsx-plugin-stylus`
  - `vscode` 语法高亮 `vscode-styled-jsx`
  - `vscode` 自动补全 `styled-jsx Language Server ❎`

* `styled-component`

## 🍬 `this`

- `React.createClass 废弃 ❌`
- `props bind 每次render重复bind,性能浪费 ❌`
- `props ()=>{} 每次render重复生命匿名函数,性能浪费 ❌`
- `constructor bind 繁琐,易出错 ❌`
- `static ()=>{} ✅`

## 🍭 `extends React.Component`

```js
constructor(props){
  super(props) // ✅
}
```

```js
constructor(){
  super(...arguments) // ✅ 💯
}
```

## 🍿 `inline style`

```jsx
const View = ({ milliseconds = 0 }) => {
  return (
    <h1
      style={{
        'font-family': 'monospace'
      }} {/** ❌ */}
    >
      view
    </h1>
  )
}
```

`重复定义 style 对象,性能浪费,如果每次都是使用相同的样式对象,可提出 render 函数之外. ✅`

## 🌿 工具库

- 字体压缩
  - font-spider
  - fontmin
