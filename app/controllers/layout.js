import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({

  firebaseApp: Ember.inject.service(),

  actions: {
    signOut() {
      const firebase = this.get('firebaseApp');

      firebase.auth().signOut();
      this.transitionToRoute('/login');
    }
  }
});
