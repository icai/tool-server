const youtubeInfoController = require('./controller/ytInfo');

module.exports = (router) => {
  // router.prefix('/api');
  router
    .get('/', (ctx)=> { ctx.body = "it's ok"})
    .get('/yt*', youtubeInfoController.index)
};
