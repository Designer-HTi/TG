import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx
} from 'unocss'

export default defineConfig({
  theme: {},
  shortcuts: {
    // 全局公共样式
    'flex-col': 'flex flex-col'
  },
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' }
    }),
    presetTypography()
  ],
  transformers: [transformerAttributifyJsx()]
})
