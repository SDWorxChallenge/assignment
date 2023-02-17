const CONFIG_GENERIC = {
  general: {
    brand: {
      name: "SDWorx"
    }
  },
  thirdParty: {},
  constants: {
    meta: {
      name: "SDWorx",
      slogan: "Contest",
      description:
        "Contest",
    },
  },
}

const CONFIG = {
  development: {
    ...CONFIG_GENERIC
  },
  staging: {
    ...CONFIG_GENERIC
  },
  production: {
    ...CONFIG_GENERIC
  },
};

// We use NEXT_PUBLIC_WEBSITE_ENVIRONMENT since everything prefixed with NEXT_PUBLIC_ gets exposed to the browser
// this way we can configure our environment
const environment =
  process.env.NEXT_PUBLIC_WEBSITE_ENVIRONMENT ||
  process.env.NODE_ENV ||
  "development";
export default CONFIG[environment];
