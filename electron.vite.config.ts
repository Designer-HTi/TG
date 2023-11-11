import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/renderer')
      },
      extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    plugins: [
      vue(),
      AutoImport({
        dts: 'auto-import.d.ts',
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/ // .vue
        ],
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true
          }
        ]
      }),
      Unocss({
        /* options */
        configFile: './uno.config.ts'
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${resolve(
            __dirname,
            'src/renderer/common/styles/index.less'
          )}";`,
          javascriptEnabled: true
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 6060,
      open: false,
      proxy: {
        '/api': {
          autoRewrite: true,
          target: 'http://127.0.0.1:9999',
          changeOrigin: true,
          ws: true
        }
      }
    }
  }
})
