import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

  description: attr('string'),
  completed: attr('boolean', { defaultValue: false })
  
});
