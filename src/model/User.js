/* eslint no-return-await:0 */
class UserModel {
  async findUserProfile() {
    // Similar: return await query('select * from user where uid = ?', uid);
    return await {
      userid: 10001,
    };
  }
}

module.exports = new UserModel();
