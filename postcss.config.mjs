import autoprefixer from "autoprefixer";
import mediaMinMax from "postcss-media-minmax";

export default {
  plugins: [
    mediaMinMax(),
    ...(process.env.HUGO_ENVIRONMENT !== "development" ? [
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 3 versions", "Firefox >= 20", "iOS >=7"],
      }),
    ] : []),
  ],
};
