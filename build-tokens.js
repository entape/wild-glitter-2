import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

function buildConfig(source) {
  return StyleDictionary.extend({
    source: [`tokens/${source}.json`],
    platforms: {
      js: {
        transformGroup: "tokens-studio",
        buildPath: "build/js/",
        files: [
          {
            destination: `${source}.js`,
            format: "javascript/es6",
          },
        ],
      },
      css: {
        transforms: [
          "size/pxToRem",
          "size/rem",
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/size/css/letterspacing",
          "ts/size/lineheight",
          "ts/type/fontWeight",
          "ts/resolveMath",
          "ts/typography/css/shorthand",
          "ts/border/css/shorthand",
          "ts/shadow/css/shorthand",
          "ts/color/css/hexrgba",
          "ts/color/modifiers",
          "name/cti/kebab",
        ],
        buildPath: "build/css/",
        prefix: source,
        files: [
          {
            destination: `${source}.css`,
            format: "css/variables",
          },
        ],
      },
    },
  });
}

let sd = buildConfig("core");

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

sd = buildConfig("light");

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

sd = buildConfig("dark");

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
