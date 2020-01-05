if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/registerServiceWorker.js');
  });
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
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
