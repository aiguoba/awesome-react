import load from "./load"

const routes = [
  {
    path: "/",
    redirect: "/styled-jsx",
    component: load(() => import("~/layouts/base")),
    routes: [
      {
        path: "/styled-jsx",
        name: "styled-jsx",
        exact: true,
        component: load(() => import("~/components/test/styled-jsx"))
      },
      {
        path: "/pure",
        name: "pure",
        exact: true,
        component: load(() => import("~/components/test/pure-component"))
      },
      {
        path: "/memo",
        name: "memo",
        exact: true,
        component: load(() => import("~/components/test/memo"))
      },
      {
        path: "/life",
        name: "life",
        exact: true,
        component: load(() => import("~/components/test/life"))
      }
    ]
  }
]

export default routes
