module.exports = {
    apps: [
      {
        name: 'phosformer2',
        script: './index.js',
        watch: false,
        ignore_watch: ['node_modules'],
        autorestart: true,
        env: {
          NODE_ENV: 'production',
            PORT: 8085
        }
      }
    ]
  };
