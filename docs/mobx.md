# mobx

数据层框架

当应用状态更新时,所有依赖于这些应用状态的监听者(UI、服务端数据同步函数等),都应该自动得到细粒度的更新.

- `Observable`: 需要被监听的应用状态. 通过 `@observable` 修饰符可以细粒度的控制  一个 `Class` 的那个属性需要被监听.

- `Reactions`:  应用状态的监听者. 当依赖的应用状态发生变化  时,能够自动  地执行相应的动作.(`reaction`、`autorun`、`@observer`都可以生成一个 `Reactions` )

## 安装

```sh
npm i mobx -S

# react 绑定库
npm i mobx-react -S
```

## 配置装饰器环境

### 劣势

- `ES.next 2` 阶段特性
- 需要设置和编译,目前只有`Babel`/`TypeScript` 编译器支持

### 启用装饰器语法

- `TypeScript`
  在 `tsconfig.json` 中启用编译器选项 `"experimentalDecorators":true`

- `Babel`
  配置:`babel-preset-mobx`

```sh
# 安装 preset
npm i babel-preset-mobx -D
```
