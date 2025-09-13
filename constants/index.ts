import { router } from "expo-router";

export const HERO_IMAGE = require("@/assets/images/coffee-hero-image.png");
export const FILTER_ICON = require("@/assets/svgs/filter.svg");
export const PROMO_IMAGE = require("@/assets/images/promo-image.png");

// Coffee Images
export const FLAT_WHITE = require("@/assets/images/coffee/flat-white.png");
export const MOCHA_FUSI = require("@/assets/images/coffee/mocha-fusi.png");
export const CAFFE_PANNA = require("@/assets/images/coffee/caffe-panna.png");
export const CAFFE_MOCHA = require("@/assets/images/coffee/caffe-mocha.png");

// Colors
// Primary
export const PRIMARY = "#C67C4E";
export const PRIMARY_DARK = "#A65E36";
export const PRIMARY_LIGHT = "#E89B6A";

// Greys
export const GREY_NORMAL = "#242424";
export const GREY_LIGHT = "#797979";
export const GREY_LIGHTER = "#A2A2A2";
export const GREY_DARK = "#111111";

// Surfaces
export const SURFACE_WHITE = "#FFFFFF";
export const SURFACE_LIGHT = "#F9F9F9";
export const SURFACE_NORMAL = "#D8D8D8";

// Gradients
export const SHADOW_CONTAINER =
  "linear-gradient(rgba(5,5,5,0) 0%, rgba(5, 5, 5, 1) 24%)";
export const CONTAINER =
  "linear-gradient(rgba(11,11,11,1) 0%, rgba(31, 31, 31, 1) 100%)";

export const handleNav = (screen: string) => {
  switch (screen) {
    case "home":
      router.push("/home");
      break;
    case "favorites":
      router.push("/home");
      break;
    case "cart":
      router.push("/home");
      break;
    case "notifications":
      router.push("/home");
      break;
  }
};
