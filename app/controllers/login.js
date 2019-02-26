import Ember from 'ember';
// import Firebase from 'firebase';

const { Controller, observer } = Ember;

export default Controller.extend({

  firebaseApp: Ember.inject.service(),

  actions: {

    login() {
      console.log('firing login action');
      const { email, password, firebaseApp } = this.getProperties('email', 'password', 'firebaseApp');

      firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.set('email', null);
        this.set('password', null);
        this.transitionToRoute('layout');
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
