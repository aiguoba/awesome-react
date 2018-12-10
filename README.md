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

## 🌵 数据流

- Mobx

  - 概念
    - 状态: 驱动应用的数据.
    - 衍生: 任何源自应用状态并且不会再有任何进一步的相互作用的即为衍生.
      - 用户界面
      - 衍生数据(计算属性)
      - 后端集成(服务请求)
    - 动作: 任意一段可以改变状态的代码.
    - Action --> State --> Views
  - API
    - @observable 将可被制作成可观察的数据结构转换为可观测对象
      - observable(value)
      - observable.box(value,options?)
      - observable.object(value,decorators?,options?)
      - observable.array(value,options?)
      - observable.map(value,options?)
      - extendObservable
    - @observable.deep
    - @observable.ref
    - @observable.shadow
    - @computed
    - @action
    - @action.bound
    - @observer `mobx-react`
    - autorun
    - when
    - reaction
    - onReactionError
  - 实用工具
    - [mobx-utils](https://github.com/mobxjs/mobx-utils)
    - Provider `mobx-react`
    - injetc `mobx-react`
    - toJS
    - isObservable & isObservableProp
    - isObservableObject|Array|Map & isBoxedObservable
    - isArrayLike
    - isAction
    - isComputed & isComputedProp
    - intercept `拦截`
    - observe
    - onBecomeObserved & onBecomeUnobserved
    - configure
      - arraybuffer
      - computedRequiresReaction
      - disableErrorBoundaries
      - enforceActions
      - isolateGlobalState
      - reactionScheduler

- Redux

## 🌿 工具库

- font-spider
- fontmin
