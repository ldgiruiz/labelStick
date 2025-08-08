
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/labelstick/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/labelstick"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 633, hash: 'd259e1c065094ee3d7563e3b3705db15df34fe2159061ec1257d3442f560d0c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1146, hash: '72cbe86ef011b6a3b78727ce2f7740a1c943a288aa634cfa8dc0b982de0411f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15548, hash: '0094617dcbd4480b79a23aea9fedc6f98aa46653f61b788c5eff7ce5baf4a345', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
