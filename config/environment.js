/* eslint-env node */

module.exports = environment => {
  const ENV = {
    modulePrefix: 'open-tour-builder',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-cli-mirage': {
      enabled: false
    },
    torii: {
      providers: {}
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    googleFonts: ['Open+Sans:300,400,700', 'Source+Sans+Pro:300'],

    fastboot: {
      hostWhitelist: [
        /^.*lvh.me:4200+$/,
        /^.*tours.org:4200+$/,
        /^.*otb.org:3000+$/,
        '*'
      ],
      disabled: true
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.i18n = {
    defaultLocale: 'en'
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'https://otb.org:3000';
    ENV.fastboot.hostWhitelist.push('https://jay.otb.org:3000');
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV['g-map'] = {
      key: 'AIzaSyD-G_lDtvChv-P3nchtQYHoCLfFzn9ylr8',
      libraries: ['places'],
      language: 'en'
    };

    ENV.torii.providers['google-oauth2'] = {
      apiKey: '391159993660-70se4jcll933rh4f896takormj0rnlbc.apps.googleusercontent.com',
      redirectUri: 'https://lvh.me:4200/torii/redirect.html'
    };
    // ENV.torii.providers['google-oauth2-bearer-v2'] = {
    // };
  }

  if (environment === 'mobile') {
    ENV.locationType = 'hash';
    ENV.rootURL = '';
    ENV.sub = 'jay';
    ENV.APP.API_HOST = 'otb.org:3000';
    ENV['g-map'] = {
      key: 'AIzaSyD-G_lDtvChv-P3nchtQYHoCLfFzn9ylr8',
      protocol: 'https'
    };
  }

  if (environment === 'test') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    ENV.APP.API_HOST = 'otb.org:3000';
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.APP.API_HOST = 'https://otb-api.ecdsdev.org';

    ENV['g-map'] = {
      key: 'AIzaSyC0l_y6pP0DK4oig0ile1XLbRx9HUQeryE',
      protocol: 'https'
    };

    ENV.torii.providers['facebook-oauth2'] = {
      apiKey: '383939088765607',
      redirectUri: 'https://obt.ecdsdev.org/torii/redirect.html'
    };

    ENV.torii.providers['google-oauth2'] = {
      apiKey: '171053764894-edtmjrjbnh8jukcbsgdue4sovqpe1l5f.apps.googleusercontent.com',
      redirectUri: 'https://otb.ecdsdev.org/torii/redirect.html'
    };
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };

  return ENV;
};
