export const environment = {
  production: true,
  Developer: 'Kunal Verma POC',
  title: 'SpaceX Launch Programs',
  API: {
    spaceXData: 'https://api.spaceXdata.com/v3/launches?',
    // spaceXData: '/api/?',
  },
  appsettings: {
    LIMIT: 100,
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
