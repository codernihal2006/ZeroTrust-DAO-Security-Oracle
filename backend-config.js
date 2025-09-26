// Backend Configuration for Production
const BACKEND_CONFIG = {
  development: {
    apiUrl: 'http://localhost:3004/api',
    websocket: 'ws://localhost:3004',
    timeout: 5000
  },
  production: {
    apiUrl: 'https://your-backend-deploy-url.com/api', // When deployed
    websocket: 'wss://your-backend-deploy-url.com',
    timeout: 10000
  },
  demo: {
    apiUrl: null, // Fallback to simulation mode
    websocket: null,
    timeout: 1000
  }
};

// Auto-detect environment
const environment = window.location.hostname === 'localhost' ? 'development' : 
                   window.location.hostname.includes('vercel.app') ? 'demo' : 'production';

window.ZEROTRUST_CONFIG = BACKEND_CONFIG[environment];

console.log('🔧 Environment:', environment);
console.log('🌐 Config:', window.ZEROTRUST_CONFIG);
