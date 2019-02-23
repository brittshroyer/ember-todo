import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  tagName: 'td',
  classNames: ['task-description', 'd-flex', 'justify-content-between', 'align-items-center'],
  classNameBindings: ['editing'],

  focusOut() {
    const task = this.get('task');
    
    this.toggleProperty('editing');
    this.sendAction('save', task);
  },

  keyDown(e) {
    const code = e.keyCode || e.which;

    if (code == 13) {
      this.toggleProperty('editing');
    }
  },

  actions: {

    editTaskName() {
      this.toggleProperty('editing');
      if (this.get('editing')) {
        Ember.run.later(() => {
          this.$('.input-field').focus();
          this.$('.input-field')[0].setSelectionRange(0, this.value.length);
        }, 50);
      }
    }
  }

});
