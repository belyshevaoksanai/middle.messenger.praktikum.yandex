import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [handlebars()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/colors";`
      }
    }
  }
};
