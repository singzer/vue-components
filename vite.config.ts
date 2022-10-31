import { join } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    // 组件自动导入
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      // include: [/.vue$/, /.vue?vue/],
      deep: true,
      dts: 'src/components.d.ts',
      directives: true,
      globalNamespaces: ['global'],
      //打包时自动导入
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    // api自动导入
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        // vue的语法糖$ref
        'vue/macros',
      ],
      vueTemplate: true,
      // eslintrc: {
      //   enabled: true, // Default `false`
      //   filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      //   globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      // },
    }),
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
})
