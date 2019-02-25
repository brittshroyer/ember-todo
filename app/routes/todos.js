import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const userId = params.user_id;
    const userPromise = this.store.findRecord('user', userId);
    const tasksPromise =  this.store.query('task', { user: userId });

    return Ember.RSVP.hash({
      user: userPromise,
      tasks: tasksPromise
    });
  },

  setupController(controller, models) {
    controller.setProperties({
      user: models.user,
      tasks: models.tasks
    });
  },

});
