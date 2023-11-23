import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

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
      vueJsx(),
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
      Components({
        dirs: ['src/renderer/components']
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
        '/user_subscribe_list': {
          autoRewrite: true,
          target: 'http://192.168.10.70:7890',
          changeOrigin: true,
          ws: true
        }
      }
    }
  }
})
