// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Developer: 'Kunal Verma POC',
  title: 'SpaceX Launch Programs',
  API: {
    spaceXData: 'https://api.spaceXdata.com',
  },
  appsettings: {
    LIMIT: 10,
    MAX_FAIL_RETRY: 5,
    RETRY_DURATION: 10,
    THEMES: {
      night: {
        '--bg': '#222',
        '--bg2': '#444',
        '--ltc': '#454e93',
        '--tcc': '#fff',
      },
      day: {
        '--bg': '#f2f2f2',
        '--bg2': '#fff',
        '--ltc': '#454e93',
        '--tcc': 'black',
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
