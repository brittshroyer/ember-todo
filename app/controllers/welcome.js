import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({

  firebaseApp: Ember.inject.service(),

  actions: {
    createUserModel(username) {
      if (!username) {
        //notify need a username
        return;
      } else {
        const firebase = this.get('firebaseApp');
        const email = firebase.auth().currentUser.email;
        console.log('email', email);
        const user = Ember.Object.create({
          email, username
        });
        const userRecord = this.store.createRecord('user', user);
        console.log('userRecord', userRecord);
        return userRecord.save().then(user => {
          console.log('userid', user.get('id'));
          const uid = user.get('id');
          // console.log('user', user);
          this.transitionToRoute(`/${uid}/todos`);
          // this.transitionToRoute(`layout`);
        }).catch(err => {
          // this.get('notify').alert('Something went wrong creating a new user');
          console.log('error saving user: ', err);
        });
      }
    }
  }
});
