import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const uid = params.user_id;
    // console.log('firing layout model');
    return this.store.findRecord('user', uid);
  },

  afterModel(model) {
    const isAuthenticated = this.get('session.isAuthenticated');
    const uid = model.get('id');

    if (!model && isAuthenticated) {
      this.get('session').close();
      this.transitionTo('login');
    } else {
      console.log('transitioning');
      this.transitionTo(`/${uid}/todos`);
    }
  }
});
