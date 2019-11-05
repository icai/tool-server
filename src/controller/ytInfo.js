const ytdl = require('ytdl-core')

class ytInfoontroller {
  async index(ctx) {
    var vidId =  ctx.url.replace("/yt/", "");
    // console.log(ctx.request)
    if (!ytdl.validateURL(vidId)) { // URL is not valid
        //   404, 
      if (vidId == "") {
        ctx.body = "{\"error\":\"Error: Please include a video URL.\"}";
      } else {
        ctx.body = "{\"error\":\"Error: Invalid video URL. The URL should be a full YouTube video URL.\"}";
      }
    } else {
      try {
        const info = await ytdl.getInfo(vidId)
        ctx.body = JSON.stringify(info);
      } catch (e) {
        ctx.body = e
      }
    }    
  }
}

module.exports = new ytInfoontroller();
