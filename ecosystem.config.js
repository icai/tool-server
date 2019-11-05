module.exports = {
    apps : [{
      name: "tool-server",
      script: "./src/app.js",
      env: {
        NODE_ENV: "development",
        "node_args": "--inspect=0.0.0.0:9229"
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }