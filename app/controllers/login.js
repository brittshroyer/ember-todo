import Ember from 'ember';
// import Firebase from 'firebase';

const { Controller, observer } = Ember;

export default Controller.extend({

  firebaseApp: Ember.inject.service(),

  actions: {

    login() {
      const { email, password, firebaseApp } = this.getProperties('email', 'password', 'firebaseApp');

      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.set('email', null);
          this.set('password', null);

          firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
              const usersPromise = this.store.findAll('user').then(users => users.toArray());

              console.log('usersPromise', usersPromise.length);
              // const userPromise = this.store.query('user', { orderBy: 'email', equalTo: user.email });
              // return userPromise.then(user => {
              //   if (user) {
              //     console.log('user model found', user);
              //   }
              // });
              // ...
            } else {
              console.log('no user model found');
              // User is signed out.
              // ...
            }
          });

          // console.log('userID', userModel);
          // console.log('firebase auth', firebaseApp.auth());
          // this.transitionToRoute('layout');
          // this.transitionToRoute('layout');
        })
        .catch(error=> {
          console.log('error signing into firebase', error);
          //get particular error and notify with relevant info
          //notify error
        });
    },

    signUp() {

      const { email, password, firebaseApp } = this.getProperties('email', 'password', 'firebaseApp');

      console.log('email', email);
      console.log('firebaseApp', firebaseApp);
      // if (!email) {
      //   return notify.alert('Email/Username can not be blank');
      // }
      //
      // if (!password) {
      //   return notify.alert('Password can not be blank');
      // }

      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.transitionToRoute('welcome');
          // transition to welcome page - have user click button to get started
        })
        .catch(error => {
          console.log('error creating firebase user', error);
          //get particular error and notify with relevant info
          //notify error
        });
    },
  }
});
