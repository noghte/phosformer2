module.exports = {
  apps: [
    {
      name: 'phosformer2',
      script: './index.js',
      watch: false,
      ignore_watch: ['node_modules'],
      autorestart: true,
      node_args: '--experimental-modules',
      env: {
        NODE_ENV: 'production',
        PORT: 8085
      }
    }
  ]
};