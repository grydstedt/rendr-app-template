var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'users_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.repos = this.options.repos;
    return data;
  },

  postRender: function() {
    console.log('x');
  }
});
module.exports.id = 'UsersShowView';
