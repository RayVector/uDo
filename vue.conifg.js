if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/registerServiceWorker.js');
  });
}

module.exports = {
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
