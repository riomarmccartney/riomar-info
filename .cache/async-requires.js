// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-jsx": () => import("../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

