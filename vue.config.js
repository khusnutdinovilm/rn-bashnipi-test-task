module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/rn-bashnipi-test-task/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};
