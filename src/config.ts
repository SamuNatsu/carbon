// Carbon config

// Constants
const baseUrl: string =
  import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;

// Export config
export default <CarbonConfig>{
  authorName: 'SNRainiar',
  authorUrl: 'https://github.com/SamuNatsu',
  iconUrl: baseUrl + '/favicon.svg',
  locale: 'zh-CN',
  siteLogo: baseUrl + '/logo.svg',
  siteName: 'Carbon',
  titleSeparator: ' | '
};
