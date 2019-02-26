import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', { path: '/' }, function() {
    this.route('login', { resetNamespace: true } );
    // });

    this.route('logout');

  // this.route('authenticated', { path: '/' }, function() {

    this.route('welcome', { resetNamespace: true, path: 'welcome' });
    this.route('layout', { resetNamespace: true, path: '' }, function() {
      this.route('account', { path: '/:user_id/account' });
      this.route('todos', { path: '/:user_id/todos' });
    });
  });

  this.route('404', { path: '/*path' });
});

export default Router;
