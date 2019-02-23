import Ember from 'ember';
import Firebase from 'firebase';

const { Controller } = Ember;

export default Controller.extend({

  actions: {

    signUp() {

      const { identification, password } = this.getProperties('identification', 'password');

      // if (!identification) {
      //   return notify.alert('Email/Username can not be blank');
      // }
      //
      // if (!password) {
      //   return notify.alert('Password can not be blank');
      // }

      Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log('error', error);
      // ...
      });

      this.get('session').authenticate('authenticator:custom', {
        identification,
        password
      }).catch((err) => {
        console.log('LOGIN FAILURE', err);
        notify.alert('Incorrect email or password');
      });
    } 
  }
});
