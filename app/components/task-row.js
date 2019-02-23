import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  tagName: 'tr',
  classNameBindings: ['hover', 'active'],

  visible: computed.or('hover', 'active'),

  mouseEnter() {
    this.set('hover', true);
  },

  mouseLeave() {
    this.set('hover', false);
  },

  actions: {
    editing() {
      console.log('firing');
      this.toggleProperty('active');
    }
  }

});
