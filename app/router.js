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

  this.route('authenticated', { path: '' }, function() {

    this.route('welcome', { resetNamespace: true, path: '/welcome' });
    this.route('layout', { resetNamespace: true, path: '/:user_id' }, function() {
      this.route('account');
      this.route('todos');
    });
  });

  this.route('404', { path: '/*path' });
});

export default Router;
