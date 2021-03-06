
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: false,
      title: 'chat',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  proxy: {
    '/api': {
      target: 'http://192.168.1.8:8069/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
}
