module.exports = {
  apps: [
    {
      name: 'cookie-tutorial-server',
      script: 'dist/index.js',
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
