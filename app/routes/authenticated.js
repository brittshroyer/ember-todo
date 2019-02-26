import Ember from 'ember';

export default Ember.Route.extend({

  firebaseApp: Ember.inject.service(),

  model() {
    const user = this.get('firebaseApp').auth().currentUser;

    if (user) {
      // User is signed in.
      const userEmail = user.email;
      return this.store.query('user', { orderBy: 'email' }).then(users => {
        // console.log('users from store call');
        users = users.toArray();
        return users[0];
      });
    } else {
      //user is signed out.
      return null;
    }
  },

  afterModel(model) {
    console.log('model after', model);
    const isAuthenticated = this.get('firebaseApp').auth();

    if (!model && isAuthenticated) {
      this.get('firebaseApp').auth().signOut().then(() => {
        // Sign-out successful.
        this.transitionTo('/login');
      }).catch((error) => {
        console.log('there was an error signing out', error);
      });
    }
  }

});
