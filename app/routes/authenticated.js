import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

  model() {
    const firebaseApp = this.get('firebaseApp');

    console.log('%j', firebaseApp.auth());
    // return firebaseApp.auth().then(({currentUser}) => {
    //     console.log('current user', currentUser);
    //     currentUser ? this.store.query('comment', { filter: { user: currentUser.uid} }) : reject()
    // });
  }

});
