Web.TweetsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('tweet');
  }
});

