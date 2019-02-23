import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({

  buttonDisabled: computed.not('description'),

  actions: {
    addTask() {
      const description = this.get('description');
      const task = Ember.Object.create({
                    description,
                    completed: false
                  });
      const taskRecord = this.store.createRecord('task', task);

      taskRecord.save();
    },

    // updateTaskStatus(task) {
    //   task.save();
    // },

    // updateTaskName() {
    //   task.
    // }

    deleteTask(task) {
      task.destroyRecord();
    },

    saveTask(task) {
      task.save();
    }
  }
});
