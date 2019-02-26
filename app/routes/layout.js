import Ember from 'ember';

export default Ember.Route.extend({

  firebaseApp: Ember.inject.service(),

  model() {
    this._super(...arguments);
  },

  setupController(controller, model) {
    const user = this.modelFor('authenticated');
    this._super(controller, user);
  },

  afterModel(model) {
    const uid = model.id;

    this.transitionTo(`/user/${uid}/todos`);
  }
});
