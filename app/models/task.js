import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({

  user: belongsTo('user'),
  description: attr('string'),
  completed: attr('boolean', { defaultValue: false })
  
});
