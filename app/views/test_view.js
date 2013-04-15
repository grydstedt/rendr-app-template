var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'test_view',
  postRender: function() {
    console.log('postRender');
    console.log(this.model);
  }
});
module.exports.id = 'TestView';
