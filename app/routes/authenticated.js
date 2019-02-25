import Ember from 'ember';

export default Ember.Route.extend({

  firebaseApp: Ember.inject.service(),

  beforeModel() {
    const isAuthenticated = this.get('session.isAuthenticated');

    // console.log('%j session on auth', this.get('session.isAuthenticated'));
    if (!isAuthenticated) {
      // console.log('not authenticated, transitioning to login');
      this.transitionTo('login');
    }
  },

  // model() {
  //   const uid = this.get('session.currentUser.uid');
  //   console.log('curren user', currentUser);
  //   //get user model from firebase
  //   // return this.store.findRecord('user', uid);
  // },
  //
  // //redirect back to login if there is a session but no model found


});
