if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/registerServiceWorker.js');
  });
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/client/'
  //   : '/',
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          options: {
            cachableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
};
