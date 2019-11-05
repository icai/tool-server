const userService = require('../service/user');

class UserController {
  async profile(ctx) {
    const res = await userService.profile();
    ctx.body = res.data;
  }

  async register(ctx) {
    ctx.body = {
      status: 200,
      statusText: 'ok',
      currentAuthority: 'user',
    };
  }

  async logout(ctx) {
    ctx.body = {
      status: 200,
      statusText: 'ok',
      currentAuthority: 'guest',
    };
  }
}

module.exports = new UserController();
