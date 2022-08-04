const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // cnblogs.com/xzybk/p/14379861.html
        additionalData: `
        $env: ${process.env.NODE_ENV};
				@import "~@/style/scss/custom.scss";
      `,
      },
    },
  },
};
