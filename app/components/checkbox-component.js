import Ember from 'ember';

export default Ember.Component.extend({

  change() {
    const task = this.get('task');
    
    this.sendAction('updateTaskStatus', task);
  }

});
