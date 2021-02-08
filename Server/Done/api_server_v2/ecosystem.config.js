module.exports = {
  apps : [{
    name: 'ecosystem',
    script: 'server.js',
    args: "onw two",
    instances: 1,
    watch: true,
    max_memory_restart: '1G',
    env:{
      PORT: 9001,
      NODE_ENV: 'development'
    },
    env_production:{
      NODE_ENV: 'production'
    }
  }],

};

