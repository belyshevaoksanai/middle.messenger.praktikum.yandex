import handlebars from 'vite-plugin-handlebars';
import checker from 'vite-plugin-checker';

export default {
  plugins: [
    handlebars(),
    checker({
      typescript: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/colors";',
      },
    },
  },
};
