import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', { path: '/' }, function() {
    this.route('login', { resetNamespace: true } );
  });

  this.route('logout');

  this.route('authenticated', { path: '/' }, function() {
    this.route('layout', { resetNamespace: true, path: '' }, function() {
      this.route('todos', { resetNamespace: true,  path: '/users/:user_id/todos' });
    });
  });

  this.route('404', { path: '/*path' });

});

export default Router;
